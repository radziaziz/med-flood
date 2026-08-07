# Planetary Health Awareness Expo 2026 Showcase

> **Interactive Web Application, Forecast Dashboard & Simulation Game for Planetary Health Awareness Expo 2026**

This directory represents the **Planetary Health Awareness Expo 2026** showcase module within the **Med-Flood** (*MedForecast*) research repository.

---

## 📌 Showcase Overview

During natural disasters such as floods, public healthcare facilities experience supply chain disruptions alongside demand surges for chronic medications—particularly cardiovascular therapies driven by displacement, stress, or lost medication supplies. 

This showcase demonstrates how AI-driven time-series forecasting (XGBoost, LSTM, TFT) and interactive simulations can improve disaster preparedness, drug stock management, and planetary health resilience in Malaysian public healthcare facilities.

### Featured Applications:
1. **Interactive Forecast Dashboard**: Compare historical drug dispensing trends against predictive models (Temporal Fusion Transformer, LSTM, XGBoost, and statistical baselines).
2. **Disaster-Resilient Pharmacy Manager Game**: A scenario-based interactive simulation where users step into the role of a hospital pharmacy manager during a 2-week flood alert to balance stock buffers, stockouts, emergency procurement markups, and patient coverage.

---

## 📂 Showcase Directory Structure

```
showcase/planetary-health-2026/
├── index.html              # Main portal entry point for the Expo showcase
├── dashboard/              # Interactive forecast evaluation dashboard
│   └── interactive_forecast_dashboard.html
├── game/                   # "Disaster-Resilient Pharmacy Manager" simulation game
│   ├── index.html
│   ├── server.py
│   └── README.md
├── poster/                 # Academic poster presented at the Expo
│   └── Poster Final.pdf
├── assets/                 # Shared logos and UI assets
├── global_smape_reverted_clean.png  # Model comparison chart
└── README.md               # Showcase documentation
```

---

## 🚀 Running the Showcase Locally

To launch the showcase locally on your machine:

```bash
# Open the main Expo showcase portal in your web browser
xdg-open index.html
```

Or start the local server for the simulation game:
```bash
cd game
python3 server.py
```

---

## 👥 Research & Supervisory Team

### Researcher / Lead Developer
- **Ts. Mohd Radzi bin Ab. Aziz**¹˒²  
  *PhD Candidate (Pharmacoinformatics), Professional Technologist (ICT)*

### Supervisory Team
- **Assoc. Prof. Dr. Hanis Hanum Zulkifly**¹ *(Co-Supervisor)*  
  Faculty of Pharmacy, Universiti Teknologi MARA (UiTM)
- **Dr. Abdul Haniff Mohamad Yahaya**² *(Co-Supervisor)*  
  Pharmacy Services Programme (PPF), Ministry of Health Malaysia (KKM)
- **Assoc. Prof. Dr. Fazlin Mohd Fauzi**¹ *(Main Supervisor)*  
  Faculty of Pharmacy, Universiti Teknologi MARA (UiTM)

### Institutional Affiliations
1. **Faculty of Pharmacy**, Universiti Teknologi MARA (UiTM), 42300 Puncak Alam, Selangor, Malaysia
2. **Pharmacy Services Programme** (*Program Perkhidmatan Farmasi - PPF*), Ministry of Health Malaysia (KKM), 46350 Petaling Jaya, Selangor, Malaysia

---

## 🔗 Related Links

- **Main Med-Flood Repository**: [med-flood Root README](../../README.md)
- **Live Project Web Portal**: [https://radziaziz.github.io/med-flood/](https://radziaziz.github.io/med-flood/)
