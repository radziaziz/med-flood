# Planetary Health Forecasting Game 🏥⚡

An interactive, high-fidelity web mini-game developed for the **Planetary Health Awareness Program 2026** (AEON Mall Shah Alam, Booth 1). 

The game simulates the role of a **Pharmacy/Logistics Manager** receiving a 2-week flood forecast. Players predict daily cardivascular medication utilization (in Defined Daily Doses - DDD) based on actual historical trends, observing the severe public health and cost penalties of traditional guesses (medicine shortages vs inventory waste) and how state-of-the-art machine learning models (TFT, LSTM, XGBoost, Chronos) solve these challenges.

---

## 📂 Project Structure

- `index.html`: The main single-page web game (HTML5, Tailwind CSS, Chart.js, and programmatical Web Audio API sound synthesis).
- `server.py`: A lightweight, zero-dependency Python background server that captures results and appends them to a local CSV file.
- `data/scenarios.js`: Curated 30-day flood scenarios preprocessed from actual 2023 Malaysian public clinic data. Loaded dynamically as a JS script to allow 100% CORS-free execution when opened directly via the browser (`file://`).
- `data/results.csv`: Local log where players' scores, contact details, and predictions are stored (created automatically upon the first submission).

---

## 🚀 How to Run the Game (Offline Local Setup)

To display and log results on the **ThinkPad T14** laptop during the AEON Mall Shah Alam event, follow these steps:

### Step 1: Start the Background Logging Server
Open your terminal, navigate to the `game/` folder, and launch the Python backend server:

```bash
python3 server.py
```

- This starts a server on `http://localhost:5000`.
- It will automatically create and log game scores into `game/data/results.csv`.
- *Note:* If the server is not running, the game will automatically degrade gracefully to save scores in browser `LocalStorage` instead.

### Step 2: Open the Game in Chrome or Firefox
You can open the game in two ways:
1. **Direct Double-Click:** Open `game/index.html` directly in your browser. (The URL will be `file:///home/radziaziz/.../game/index.html`). Because the data is loaded via a `<script>` tag, the game will load and run 100% offline without CORS blockages.
2. **Via Local Server:** If you prefer, run a quick python server inside `game/` using `python3 -m http.server 8000` and open `http://localhost:8000`.

---

## 🎮 Gameplay Flow (1-2 minutes)

1. **Manager Details:** The player inputs their Name and optional Email (to receive their results or research updates later).
2. **Language Toggle:** Instant language selection between **English** and **Bahasa Melayu** at the top right.
3. **Stage 1 (Wild Guess):** The player is shown 14 days of historical utilization. They drag a slider to predict the next 14 days under stress. A dashed orange preview line shifts on the Chart.js grid in real-time.
4. **Stage 1 Results:** Shows actual utilization (in green). Calculates the absolute forecast error, procurement costs (standard vs emergency buying), and the count of missed patient treatment courses.
5. **Stage 2 (AI-Assisted):** Introduces four deep learning and machine learning models:
   - **TFT (Temporal Fusion Transformer):** State-of-the-art accuracy (<2% error), but complex and requires training.
   - **LSTM (Long Short-Term Memory):** Recurrent neural network capturing sequence trends.
   - **XGBoost:** Extremely fast tree-based ML running on lightweight CPU hardware.
   - **Chronos (CHR2):** Pre-trained Time Series Foundation Model (zero-shot, no training needed).
   *Players click on any model to instantly apply its forecast to the chart and submit their order.*
6. **Stage 2 Results:** Compares Stage 1 vs Naive Baseline vs Stage 2 AI-assisted predictions. Displays the total procurement money saved (RM) and shortages prevented.

---

## 🔑 Admin Dashboard & Data Export

### Opening the Admin Scoreboard
1. Tap or click the **"PLANETARY HEALTH FORECAST GAME"** header at the top left **4 times** consecutively.
2. This reveals the hidden scoreboard listing all sessions played.

### Exporting/Clearing Data
- **Export CSV:** Click "Export CSV" inside the admin panel. It downloads the scores stored in `LocalStorage` as a standard `.csv` file.
- **Results.csv:** If `server.py` was running in the background, you can also grab the unified results directly from `game/data/results.csv`.

---

## ☁️ Google Sheets Cloud Database Integration (Cloud Deployment)

If you host the game in the cloud (e.g. on GitHub Pages) and want to collect player results globally into a single spreadsheet without running a local Python server, you can set up a free Google Sheets database:

### Step 1: Create a Google Sheet & Apps Script
1. Create a new Google Sheet.
2. Go to **Extensions** > **Apps Script**.
3. Delete the default code and paste the following Google Apps Script:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  
  // Set up headers on first use
  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "Timestamp", "Name", "Email", "Facility", "Medication", 
      "Flood Start Date", "Unit Cost", "Actual Total Doses", 
      "Stage 1 Prediction", "Stage 1 Error %", "Stage 1 Cost (RM)", "Stage 1 Missed Patients",
      "Stage 2 Prediction", "Stage 2 Error %", "Stage 2 Cost (RM)", "Stage 2 Missed Patients",
      "Chosen Model", "Net AI Savings vs Guess (RM)", "Shortage Avoided (Patients)", "Waste Avoided (Doses)"
    ]);
  }
  
  sheet.appendRow([
    data.timestamp || new Date().toISOString(),
    data.name || "",
    data.email || "",
    data.fac_code || "",
    data.med_name || "",
    data.flood_start_date || "",
    data.unit_cost || 0,
    data.actual_total || 0,
    data.stage1_pred || 0,
    data.stage1_error || 0,
    data.stage1_cost || 0,
    data.stage1_patients || 0,
    data.stage2_pred || 0,
    data.stage2_error || 0,
    data.stage2_cost || 0,
    data.stage2_patients || 0,
    data.chosen_model || "",
    data.cost_saved_vs_naive || 0,
    data.shortage_avoided || 0,
    data.waste_avoided || 0
  ]);
  
  return ContentService.createTextOutput(JSON.stringify({"status": "success"}))
    .setMimeType(ContentService.MimeType.JSON);
}
```

### Step 2: Deploy as a Web App
1. Click the **Deploy** button on the top right, and choose **New deployment**.
2. Click the gear icon next to "Select type" and select **Web App**.
3. Configure the deployment:
   - **Description:** Planetary Health Game Database
   - **Execute as:** Me (your email)
   - **Who has access:** Anyone (essential so the public browser can submit results)
4. Click **Deploy** and authorize the script permissions.
5. Copy the generated **Web App URL** (e.g. `https://script.google.com/macros/s/AKfycb.../exec`).

### Step 3: Insert URL into the Game Code
1. Open [game/index.html](file:///home/radziaziz/Projects/Planetary_Health_2026/game/index.html).
2. Locate `const GSHEET_URL = "";` (around line 1724) and paste your Web App URL inside the quotation marks:
   ```javascript
   const GSHEET_URL = "https://script.google.com/macros/s/AKfycb.../exec";
   ```
3. Save, commit, and push your changes to GitHub. All game play records will now stream directly to your Google Sheet in real-time!

