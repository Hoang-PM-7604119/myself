---
title: Coral Reef Conservation Monitoring – Nha Trang
description: Underwater sensing stations, water-quality monitoring systems, and environmental data infrastructure for coral reef conservation in Nha Trang.
date: 2025-02-01
start: 2025-02
status: active
featured: true
order: 2
cover: /images/projects/coral-reef-conservation-nha-trang.jpg
topics: [aiot-environmental-monitoring]
people: [pham-minh-hoang, dinh-van-dung, pham-huy-hieu, phung-manh-duong]
publications: [edge-deadline-rl]
relatedProjects: [smart-marine-aquaculture, can-gio-mangrove-iot]
technologies: [ESP32, Water Quality Sensing, MQTT, Linux, Docker, Microclimate Sensors]
organizations: [
  "Smart Green Transformation Center (GREEN-X), VinUniversity",
  "Nha Trang Bay Management Board",
  "Nha Trang University (NTU)"
]
---

## The Conservation Challenge

Coral reef ecosystems in the marine waters around Nha Trang face mounting pressure from ocean temperature shifts, runoff pollution, and salinity changes. Traditional marine biodiversity monitoring relies on periodic dive inspections, which miss sudden water quality shifts, episodic surges, and long-term chemical microtrends critical for marine habitat protection.

## Underwater Sensing Architecture

To support continuous ecological protection for coral reefs, the project deploys a network of autonomous underwater sensing stations:

- **Multiparameter Water Quality Stations:** Custom ESP32-based submerged nodes continuously sample dissolved oxygen (DO), pH, temperature, turbidity, and salinity at key reef locations.
- **Resilient Underwater Hardware:** IP68-rated corrosion-resistant enclosures engineered for prolonged immersion in high-salinity marine environments.
- **Edge Data Management & Telemetry:** Low-power telemetry pipelines aggregate environmental time-series, buffering readings locally and transmitting encrypted telemetry payloads to central research servers.

## Systems Engineering & Deployment Operations

Minh-Hoang served as technical lead for the development of water-quality monitoring systems and data infrastructure:

- Led technical development of underwater sensing stations and telemetry hardware tailored for coral reef environments.
- Designed end-to-end data pipelines connecting submerged edge sensors with cloud storage and analysis dashboards.
- Coordinated multidisciplinary system integration, laboratory validation, and field deployment preparations off the coast of Nha Trang.
