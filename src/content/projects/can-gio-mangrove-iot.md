---
title: Can Gio Mangrove Forest Conservation IoT System
description: Remote sensing infrastructure for long-term mangrove monitoring in harsh environmental conditions.
date: 2026-01-15
start: 2026-01
status: active
featured: true
order: 3
cover: /images/projects/can-gio-mangrove-iot.svg
topics: [aiot-environmental-monitoring, edge-ai-embedded-systems]
people: []
publications: []
relatedProjects: [smart-marine-aquaculture, coral-reef-conservation-nha-trang]
technologies: [ESP32, Raspberry Pi, MQTT, Linux, Docker, VPN Systems]
organizations: [VinUniversity]
---

## The Biosphere Challenge

The Can Gio Biosphere Reserve represents one of the most critical coastal defense ecosystems in Southeast Asia, but its environmental dynamics are notoriously difficult to measure. The field conditions present severe operational hurdles: semidiurnal tidal flooding of up to 4 meters, dense mangrove canopy that attenuates RF and GPS signals, high humidity, aggressive mud accretion, and complete absence of grid electrical power. Previous research relied on intermittent manual grab-sampling, missing critical episodic flood surges and salinity fluctuations.

## Autonomous Telemetry Architecture

To enable continuous, unattended ecological monitoring, we engineered a distributed, low-power sensing network designed for autonomous survival in tidal marshlands:

- **Ultra-Low-Power Sensing Nodes:** Custom ESP32-based node clusters placed along the intertidal gradient sample hydrological variables, water height, ambient humidity, and soil salinity. Nodes operate in deep sleep, waking periodically to log data and burst telemetry.
- **Solar Energy Harvesting & Buffering:** Nodes incorporate solar harvesting circuits coupled with conformal-coated lithium iron phosphate (LiFePO4) storage, engineered to endure consecutive monsoon overcast days.
- **Canopy Gateway & Mesh Relay:** Strategically elevated gateway nodes positioned above the mangrove canopy aggregate telemetry over low-power sub-GHz links and backhaul compressed time-series data over cellular networks.
- **Encrypted Remote Management:** A hardened Linux gateway running WireGuard VPN and containerized MQTT brokers allows secure remote over-the-air updates, debugging, and configuration without requiring hazardous boat expeditions into the mudflats.

## Field Operations & Systems Engineering

Minh-Hoang leads the end-to-end systems lifecycle for the Can Gio deployment, coordinating multidisciplinary student engineers and collaborating with forestry researchers:

- Engineered IP68 corrosion-resistant mounting rigs attached to mangrove stilt roots to withstand high hydrodynamic drag during flood tides.
- Formulated deployment timelines constrained by lunar tidal tables and monsoon weather patterns.
- Authored automated anomaly detection scripts that flag sensor fouling or telemetry dropouts in real time.

## Long-Term Ecological Impact

The platform provides conservation biologists with unprecedented temporal resolution into carbon flux indicators, tidal inundation frequencies, and salinity gradients. By automating environmental observation in a fragile biosphere, the system proves that resilient edge engineering can transform conservation science in the most inaccessible habitats.
