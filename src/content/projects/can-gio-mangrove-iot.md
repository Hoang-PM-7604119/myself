---
title: Can Gio Mangrove Forest Conservation & Remote Sensing System
description: Satellite-based canopy green cover analysis dashboard and in-development hardware IoT sensing infrastructure for the Can Gio Mangrove Biosphere Reserve.
date: 2026-01-15
start: 2026-01
status: active
featured: true
order: 3
cover: /images/projects/can-gio-mangrove-iot.jpg
topics: [aiot-environmental-monitoring]
people: [pham-minh-hoang, dinh-van-dung, nguyen-ngoc-gia-ninh, nguyen-xuan-quyen]
publications: []
relatedProjects: [smart-marine-aquaculture, coral-reef-conservation-nha-trang]
technologies: [Satellite Remote Sensing, GIS Dashboard, Multispectral Analysis, IoT Hardware Engineering, Embedded Firmware, LoRaWAN]
organizations: [
  "Smart Green Transformation Center (GREEN-X), VinUniversity",
  "Ho Chi Minh City Management Board for Protection and Special-Use Forests"
]
---

## The Biosphere Challenge

The Can Gio Biosphere Reserve represents one of the most critical coastal defense ecosystems in Southeast Asia, acting as a vital carbon sink and storm surge shield for southern Vietnam. However, tracking ecological dynamics across extensive, waterlogged mangrove terrain poses severe operational hurdles: semidiurnal tidal inundation up to 4 meters, dense root architectures, high saline humidity, and rapid canopy shifts. Traditional forestry surveys rely on infrequent manual sample plots that cannot detect rapid canopy thinning or fine-scale vegetation stress in time.

To address these hurdles, our project adopts a phased, two-tiered ecological monitoring framework:
1. **Active Phase:** Deployment of a high-resolution satellite remote sensing dashboard to analyze canopy green cover, vegetation health indices, and spatial trends over time.
2. **Upcoming Phase:** Laboratory prototyping and preparation of ruggedized in-situ IoT telemetry hardware engineered for forthcoming deployment in the tidal mangrove mudflats.

---

## Active Phase: Satellite Remote Sensing & Green Cover Analytics Dashboard

In the initial operational phase, the team developed and deployed an interactive satellite analytics dashboard tailored to the Can Gio biosphere:

- **Multispectral Orbital Ingestion:** Ingests high-frequency multispectral satellite imagery (Sentinel-2 and Landsat missions) covering the entire mangrove reserve area.
- **Vegetation Index Calculation:** Automated processing pipelines compute key vegetation and moisture indices—including **NDVI** (Normalized Difference Vegetation Index), **NDRE**, and **EVI**—to evaluate photosynthetic vigor and canopy biomass across seasons.
- **Spatial Coverage & Defoliation Detection:** The dashboard visually maps canopy density gradients, tracks year-over-year afforestation and natural regeneration, and automatically highlights localized anomalies or canopy dieback hotspots for forestry rangers.
- **Interactive Geospatial Interface:** Provides intuitive GIS layers allowing researchers and reserve authorities to isolate specific forest compartments, examine historical greenness curves, and correlate climate variations with mangrove health.

---

## Upcoming Phase: In-Situ Hardware Prototyping & Field Deployment Preparation

While the satellite dashboard provides macro-scale temporal oversight, micro-scale ecological ground truth requires direct in-situ hydrological and microclimate logging. Hardware development is actively underway:

- **Custom Low-Power Sensor Nodes:** Engineering ultra-low-power embedded telemetry nodes designed to sample water level fluctuations, soil porewater salinity, ambient humidity, and temperature along tidal transects.
- **Rugged Marine Enclosures:** Prototyping IP68 corrosion-resistant housings and specialized mounting fixtures to endure prolonged seawater immersion, mud accretion, and high hydrodynamic forces on mangrove stilt roots.
- **Solar Energy Harvesting:** Bench-testing conformal-coated solar harvesting modules paired with LiFePO4 battery management circuits to guarantee autonomous survival under dense forest canopy and prolonged monsoon overcast.
- **Sub-GHz & Cellular Gateways:** Designing canopy-level gateway relays utilizing long-range sub-GHz / LoRa links to collect telemetry from intertidal nodes and backhaul consolidated data to the central cloud platform.

Field deployment of the physical hardware nodes is scheduled following laboratory calibration and tidal-cycle stress testing, bridging orbital remote sensing with continuous physical measurements on the ground.
