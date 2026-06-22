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
