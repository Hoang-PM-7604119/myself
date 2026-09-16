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

Coral reef ecosystems in Nha Trang Bay—one of Vietnam's most biologically diverse marine protected areas—face severe threats from rising sea temperatures, coastal runoff pollution, and fluctuating salinity levels. Traditional reef assessments rely on periodic manual scuba surveys, which cannot detect acute episodic shocks, dissolved oxygen drops, or fine-grained diurnal variations that trigger coral bleaching. Continuous, autonomous environmental monitoring is vital to safeguard these vulnerable marine habitats.

## Underwater Sensing Architecture

To provide real-time ecological intelligence without disturbing sensitive benthic habitats, the research team engineered an autonomous coastal marine monitoring system:

- **Multiparameter Submerged Sensing:** Custom ESP32-based submerged nodes continuously record dissolved oxygen (DO), water temperature, pH, salinity, and turbidity directly at reef depths.
- **Corrosion-Resistant Marine Hardware:** IP68-rated enclosures, marine-grade cable penetrations, and anti-biofouling coatings engineered to withstand long-term seawater submersion.
- **Surface Telemetry & Energy Harvesting:** Solar-powered surface stations mounted on marine navigation markers harvest energy and beam encrypted telemetry back to terrestrial servers via 4G/cellular channels.
- **Centralized Data Ingestion:** Real-time dashboards process incoming time-series streams, providing marine biologists and conservation rangers with immediate alerts upon threshold anomalies.

## Collaborative Journey: From Architecture Kickoff to Open-Water Deployment

Realizing long-term conservation monitoring in a protected marine park requires a coordinated effort spanning architectural formulation, institutional governance, and offshore nautical logistics:

### 1. Project Kickoff & BCS Architectural Formulation

The initiative began with a comprehensive technical workshop at VinUniversity, convening researchers across embedded systems, IoT networking, and marine robotics. 

The team established the Broadband Coastal Sensing (BCS) architecture—defining power budgets, sensor communication protocols, and edge buffering strategies to guarantee zero data loss during adverse weather conditions.

<figure>
  <img src="/myself/images/projects/coral-reef/kickstart-meeting.jpg" alt="Coral reef project kickoff and architecture workshop at VinUniversity" loading="lazy" />
  <figcaption><strong>Figure 1:</strong> Project kickoff meeting at VinUniversity with Minh-Hoang Pham, Prof. Dinh Van Dung, Prof. Pham Huy Hieu, and faculty researchers formulating the BCS marine sensing architecture.</figcaption>
</figure>

### 2. Institutional Strategic Alignment with Nha Trang Bay Management Board

Safeguarding coral reefs requires strict compliance with marine park regulations and close coordination with local authorities. The research delegation traveled to Khanh Hoa to meet with leadership and scientific officers of the **Nha Trang Bay Management Board** (*Ban Quản lý Vịnh Nha Trang*).

The discussions finalized operational protocols, designated safe deployment corridors within the marine reserve to prevent anchor damage to living coral heads, and established data-sharing agreements with marine conservation rangers.

<figure>
  <img src="/myself/images/projects/coral-reef/nha-trang-bay-management-meeting.jpg" alt="Meeting with Nha Trang Bay Management Board delegation" loading="lazy" />
  <figcaption><strong>Figure 2:</strong> Research and leadership delegation outside the headquarters of the Nha Trang Bay Management Board (Ban Quản lý Vịnh Nha Trang) following strategic deployment planning.</figcaption>
</figure>

### 3. Offshore Marine Transit & Buoy Station Commissioning

The operational phase transitioned to the waters of Nha Trang Bay. Navigating by workboat to designated sanctuary coordinates, researchers and divers transported telemetry equipment, subsea cabling, and underwater inspection ROVs.

The autonomous monitoring station was securely mounted onto a prominent yellow marine navigational beacon. Solar photovoltaic panels and a sealed telemetry housing were affixed above the high-water splash zone, while certified scuba divers descended into the reef to carefully anchor the multiparameter sensor payload along the seabed—initiating continuous, round-the-clock environmental data collection.

<div class="figure-grid">
  <figure>
    <img src="/myself/images/projects/coral-reef/ocean-deployment-transit.jpg" alt="Marine transit and ROV staging on research boat in Nha Trang Bay" loading="lazy" />
    <figcaption><strong>Figure 3:</strong> Research team navigating Nha Trang Bay aboard an expedition vessel, staging underwater ROVs, cabling, and calibration tools for sanctuary installation.</figcaption>
  </figure>
  <figure>
    <img src="/myself/images/projects/coral-reef/marine-buoy-monitoring-station.jpg" alt="Deployed solar telemetry station on marine beacon with diver" loading="lazy" />
    <figcaption><strong>Figure 4:</strong> Commissioned solar-powered monitoring station installed atop a marine navigational beacon in Nha Trang Bay, with diver securing submerged sensor nodes in the coral reef zone.</figcaption>
  </figure>
</div>

<figure>
  <video controls playsinline preload="metadata" poster="/myself/images/projects/coral-reef/setup-coral-reef-buoy-poster.jpg">
    <source src="/myself/videos/projects/coral-reef/setup-coral-reef-buoy-nha-trang.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <figcaption><strong>Video 1: Setup của hệ thống tại Vịnh Nha Trang</strong> — Trạm quan trắc rạn san hô tự hành gắn trên phao báo hiệu hàng hải vận hành giữa vùng bảo tồn biển Vịnh Nha Trang.</figcaption>
</figure>

## Impact & Environmental Value

- **Real-Time Sanctuary Vigilance:** Replaced infrequent manual dive surveys with continuous 24/7 water chemistry logging across critical coral zones.
- **Institutional Integration:** Direct collaboration with the Nha Trang Bay Management Board ensures telemetry directly informs conservation actions and bleaching prevention.
- **Ruggedized Coastal IoT:** Validated durable solar-powered telemetry nodes engineered for high-salinity tropical marine conditions.
