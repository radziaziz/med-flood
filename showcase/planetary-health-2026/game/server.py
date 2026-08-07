#!/usr/bin/env python3
import http.server
import json
import csv
import os
import sys
from datetime import datetime

PORT = 5000
RESULTS_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'data', 'results.csv')

class GameResultsHandler(http.server.BaseHTTPRequestHandler):
    def send_cors_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')

    def do_OPTIONS(self):
        self.send_response(204)
        self.send_cors_headers()
        self.end_headers()

    def do_POST(self):
        if self.path == '/api/results':
            content_length = int(self.headers.get('Content-Length', 0))
            post_data = self.rfile.read(content_length)
            
            try:
                data = json.loads(post_data.decode('utf-8'))
                
                # Ensure data directory exists
                os.makedirs(os.path.dirname(RESULTS_FILE), exist_ok=True)
                
                # Check if results file exists to write headers
                file_exists = os.path.isfile(RESULTS_FILE)
                
                headers = [
                    'timestamp', 'player_name', 'player_email', 'facility_code', 
                    'med_name', 'flood_start_date', 'unit_cost_myr', 'actual_total_ddd',
                    'stage1_pred_ddd', 'stage1_error_pct', 'stage1_cost_myr', 'stage1_patients_affected',
                    'stage2_pred_ddd', 'stage2_error_pct', 'stage2_cost_myr', 'stage2_patients_affected',
                    'chosen_model', 'cost_saved_vs_naive_myr', 'shortage_avoided_patients', 'waste_avoided_myr'
                ]
                
                with open(RESULTS_FILE, mode='a', newline='', encoding='utf-8') as f:
                    writer = csv.DictWriter(f, fieldnames=headers)
                    if not file_exists:
                        writer.writeheader()
                    
                    row = {
                        'timestamp': datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
                        'player_name': data.get('name', 'Anonymous'),
                        'player_email': data.get('email', ''),
                        'facility_code': data.get('fac_code', ''),
                        'med_name': data.get('med_name', ''),
                        'flood_start_date': data.get('flood_start_date', ''),
                        'unit_cost_myr': data.get('unit_cost', 0),
                        'actual_total_ddd': data.get('actual_total', 0),
                        'stage1_pred_ddd': data.get('stage1_pred', 0),
                        'stage1_error_pct': data.get('stage1_error', 0),
                        'stage1_cost_myr': data.get('stage1_cost', 0),
                        'stage1_patients_affected': data.get('stage1_patients', 0),
                        'stage2_pred_ddd': data.get('stage2_pred', 0),
                        'stage2_error_pct': data.get('stage2_error', 0),
                        'stage2_cost_myr': data.get('stage2_cost', 0),
                        'stage2_patients_affected': data.get('stage2_patients', 0),
                        'chosen_model': data.get('chosen_model', ''),
                        'cost_saved_vs_naive_myr': data.get('cost_saved_vs_naive', 0),
                        'shortage_avoided_patients': data.get('shortage_avoided', 0),
                        'waste_avoided_myr': data.get('waste_avoided', 0)
                    }
                    writer.writerow(row)
                
                # Respond successfully
                self.send_response(200)
                self.send_cors_headers()
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({'status': 'success', 'message': 'Result logged successfully'}).encode('utf-8'))
                print(f"[{datetime.now().strftime('%H:%M:%S')}] Logged score for player: {row['player_name']}")
                
            except Exception as e:
                self.send_response(400)
                self.send_cors_headers()
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({'status': 'error', 'message': str(e)}).encode('utf-8'))
                print(f"Error handling post request: {e}", file=sys.stderr)
        else:
            self.send_response(404)
            self.end_headers()

def run(server_class=http.server.HTTPServer, handler_class=GameResultsHandler):
    server_address = ('', PORT)
    httpd = server_class(server_address, handler_class)
    print(f"--- Planetary Health Game Results Logger Server ---")
    print(f"Listening on port {PORT}...")
    print(f"Writing to local file: {RESULTS_FILE}")
    print(f"Press Ctrl+C to stop.")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nStopping server...")
        httpd.server_close()
        sys.exit(0)

if __name__ == '__main__':
    run()
