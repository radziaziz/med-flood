import csv
import json
import os

csv_path = "/home/radziaziz/Projects/Planetary_Health_2026/game/data/predictions.csv"
med_value_path = "/home/radziaziz/Projects/Planetary_Health_2026/game/data/med_value.csv"
output_js_path = "/home/radziaziz/Projects/Planetary_Health_2026/game/data/scenarios.js"

def load_med_values():
    med_values = {}
    with open(med_value_path, mode='r') as f:
        reader = csv.DictReader(f)
        for row in reader:
            med_values[row['MED_NAME']] = float(row['MED_VALUE'])
    return med_values

def load_data():
    fac_med_data = {}
    with open(csv_path, mode='r') as f:
        reader = csv.DictReader(f)
        for row in reader:
            key = (row['FAC_CODE'], row['MED_NAME'])
            if key not in fac_med_data:
                fac_med_data[key] = []
            fac_med_data[key].append(row)
    return fac_med_data

def extract_scenarios(fac_med_data, med_values):
    scenarios = []
    
    for (fac, med), rows in fac_med_data.items():
        # Sort by date
        rows.sort(key=lambda r: r['TXN_DATE'])
        
        # Find flood indices
        flood_indices = [i for i, r in enumerate(rows) if r['FLOOD'] == '1']
        if not flood_indices:
            continue
            
        # Group contiguous flood blocks
        blocks = []
        if flood_indices:
            start_idx = flood_indices[0]
            prev_idx = flood_indices[0]
            for idx in flood_indices[1:]:
                if idx - prev_idx > 1:
                    blocks.append((start_idx, prev_idx))
                    start_idx = idx
                prev_idx = idx
            blocks.append((start_idx, prev_idx))
            
        # Find the longest block that has 14-day history and complete predictions
        valid_block = None
        for start_idx, end_idx in sorted(blocks, key=lambda b: (b[1] - b[0]), reverse=True):
            # We need at least 28 days index before start_idx for the Naive baseline (t-28)
            if start_idx >= 28 and start_idx + 14 <= len(rows):
                forecast_slice = rows[start_idx : start_idx + 14]
                has_predictions = all(
                    r['PRED_XGB'] and r['PRED_LSTM'] and r['PRED_TFT'] and r['PRED_CHR2']
                    for r in forecast_slice
                )
                if has_predictions:
                    valid_block = (start_idx, end_idx)
                    break
        
        if valid_block:
            s_idx, e_idx = valid_block
            history_rows = rows[s_idx - 14 : s_idx]
            forecast_rows = rows[s_idx : s_idx + 14]
            
            # Format scenario
            scenario = {
                "med_name": med,
                "fac_code": fac,
                "unit_cost": med_values.get(med, 0.10),
                "flood_start_date": rows[s_idx]['TXN_DATE'],
                "flood_duration_days": e_idx - s_idx + 1,
                "history": [
                    {
                        "date": r['TXN_DATE'],
                        "actual": float(r['ACTUAL'])
                    }
                    for r in history_rows
                ],
                "forecast": [
                    {
                        "date": r['TXN_DATE'],
                        "actual": float(r['ACTUAL']),
                        "xgb": float(r['PRED_XGB']),
                        "lstm": float(r['PRED_LSTM']),
                        "tft": float(r['PRED_TFT']),
                        "chr2": float(r['PRED_CHR2']),
                        # Naive is actual from 28 days ago (i.e. idx - 28)
                        "naive": float(rows[s_idx + offset - 28]['ACTUAL']),
                        "is_flood": int(r['FLOOD'])
                    }
                    for offset, r in enumerate(forecast_rows)
                ]
            }
            scenarios.append(scenario)
            
    return scenarios

def main():
    print("Loading med values...")
    med_values = load_med_values()
    print("Med Values loaded:", med_values)
    
    print("Loading predictions data...")
    fac_med_data = load_data()
    
    print("Extracting flood scenarios...")
    scenarios = extract_scenarios(fac_med_data, med_values)
    print(f"Extracted {len(scenarios)} valid scenarios.")
    
    # Save as scenarios.js
    os.makedirs(os.path.dirname(output_js_path), exist_ok=True)
    with open(output_js_path, 'w') as f:
        f.write("// Preprocessed game scenarios from actual 2023 data\n")
        f.write("window.gameScenarios = ")
        json.dump(scenarios, f, indent=2)
        f.write(";\n")
        
    print(f"Successfully saved scenarios JS file to {output_js_path} (Size: {os.path.getsize(output_js_path)/1024:.2f} KB)")

if __name__ == '__main__':
    main()
