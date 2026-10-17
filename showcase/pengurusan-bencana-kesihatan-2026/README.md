# Persidangan Pengurusan Bencana Kesihatan 2026 Showcase

> **Conference Presentation & E-Poster Showcase for Persidangan Pengurusan Bencana Kesihatan 2026**  
> *Sempena Bulan Kesiapsiagaan Bencana Peringkat Kementerian Kesihatan Malaysia*

This showcase directory contains the presentation materials, e-poster, abstract, and official event information for the research presented at **Persidangan Pengurusan Bencana Kesihatan 2026**.

---

## 📅 Event Overview

- **Conference**: Persidangan Pengurusan Bencana Kesihatan 2026
- **Organiser**: Kementerian Kesihatan Malaysia (KKM)
- **Occasion**: Sempena Bulan Kesiapsiagaan Bencana Peringkat Kementerian Kesihatan Malaysia
- **Theme**: *"Sentiasa Siap Siaga Bencana, Kesihatan Terjaga"*
- **Date**: 22 Oct 2026 (Khamis / Thursday)
- **Time**: 8.00 pagi – 5.00 petang (8:00 AM – 5:00 PM)
- **Venue**: Hotel Crystal Crown, Kuala Lumpur
- **Format**: E-Poster Presentation
- **Submission Secretariat**: persidanganbencana@gmail.com

---

## 📝 Presentation Details

### Title
**MULTI-HORIZON FORECASTING OF CARDIOVASCULAR MEDICATION UTILISATION DURING FLOOD DISASTERS: A COMPARISON OF XGBOOST, LSTM AND TEMPORAL FUSION TRANSFORMER**

### Authors & Affiliations
- **Ts. Mohd Radzi bin Ab. Aziz**¹˒² *(Presenter / Lead Author)*
- **Assoc. Prof. Dr. Hanis Hanum Zulkifly**² *(Co-Supervisor)*
- **Dr. Abdul Haniff Mohamad Yahaya**¹ *(Co-Supervisor)*
- **Assoc. Prof. Dr. Fazlin Mohd Fauzi**² *(Main Supervisor)*

1. **Pharmacy Policy & Strategic Planning Division**, Pharmacy Services Programme (*Program Perkhidmatan Farmasi - PPF*), Ministry of Health Malaysia (KKM), 46350 Petaling Jaya, Selangor, Malaysia  
2. **Faculty of Pharmacy**, Universiti Teknologi MARA (UiTM), 42300 Puncak Alam, Selangor, Malaysia  

**Corresponding Author:** radziaziz@moh.gov.my

---

## 📑 Research Abstract

### Introduction
Flood disasters can disrupt healthcare services and pharmaceutical supply, threatening continuity of care for chronic conditions such as hypertension and hypercholesterolaemia. Forecasting medication utilisation across different horizons may therefore support medication planning and preparedness during disaster periods. This study aimed to compare three forecasting models for cardiovascular medication utilisation during flood disasters in Malaysian public healthcare facilities.

### Methodology
Daily dispensing data for amlodipine, perindopril, and simvastatin from 24 public healthcare facilities in flood-prone districts of Malaysia (2017–2022) were integrated with hydrological, meteorological, and flood-related variables. XGBoost, Long Short-Term Memory (LSTM), and Temporal Fusion Transformer (TFT) models were developed to forecast 7-, 14-, 21-, and 28-day utilisation. Models were evaluated using an out-of-sample 2023 test set across overall, flood, and non-flood observations using Symmetric Mean Absolute Percentage Error (sMAPE) and Mean Absolute Scaled Error (MASE).

### Results
All models outperformed the naïve forecasting baseline (MASE < 1), indicating that cardiovascular medication utilisation could be forecast across all tested horizons. Among the three models, LSTM and TFT consistently achieved lower forecasting errors than XGBoost, with predictive accuracy improving as the forecast horizon increased. TFT achieved the best overall performance across the 14- to 28-day horizons, with the lowest error at the 28-day horizon (**sMAPE 2.09%**; **MASE 0.1265**). Similar performance rankings were observed during flood periods, with TFT maintaining the highest forecasting accuracy.

### Conclusion
Cardiovascular medication utilisation could be forecast up to 28 days during flood periods, with LSTM and TFT showing stronger performance than XGBoost.

### Impact
The proposed forecasting framework provides quantitative information across multiple forecast horizons to support advance medication planning and resource preparedness for flood-related healthcare disruptions.

### Keywords
`medication utilisation` · `demand forecasting` · `flood disaster preparedness` · `machine learning` · `cardiovascular medication`

---

## 📁 Showcase Files

- [**`pengurusan-bencana-kesihatan-2026-poster.pdf`**](pengurusan-bencana-kesihatan-2026-poster.pdf) (or [`PBK poster v1.pdf`](PBK%20poster%20v1.pdf)) — Official academic conference E-Poster (A2 format).
- [**`pbk-2026-poster-preview.png`**](pbk-2026-poster-preview.png) — High-resolution preview image of the research poster.
- [**`pbk-2026-flyer.jpg`**](pbk-2026-flyer.jpg) — Official Call for Abstracts announcement flyer.
- [**`pbk abstract v1.1.docx`**](pbk%20abstract%20v1.1.docx) — Structured abstract submission document.
- [**`README.md`**](README.md) — Showcase documentation.

---

## 🔗 Related Resources

- **Main Med-Flood Repository**: [med-flood Root README](../../README.md)
- **Live Project Web Portal**: [https://radziaziz.github.io/med-flood/](https://radziaziz.github.io/med-flood/)
- **Research Posters Collection**: [posters/](../../posters/)
