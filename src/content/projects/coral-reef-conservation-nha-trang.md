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
people: [pham-minh-hoang, dinh-van-dung, pham-huy-hieu, phung-manh-duong, nguyen-ngoc-gia-ninh]
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
  <figcaption>
    <span data-i18n-en><strong>Figure 1:</strong> Project kickoff meeting at VinUniversity with Minh-Hoang Pham, Prof. Dinh Van Dung, Prof. Pham Huy Hieu, and faculty researchers formulating the BCS marine sensing architecture.</span>
    <span data-i18n-vi><strong>Hình 1:</strong> Buổi họp khởi động dự án tại VinUniversity cùng Phạm Minh Hoàng, PGS. Đinh Văn Dũng, TS. Phạm Huy Hiệu và nhóm nghiên cứu định hình kiến trúc quan trắc biển BCS.</span>
  </figcaption>
</figure>

### 2. Institutional Strategic Alignment with Nha Trang Bay Management Board

Safeguarding coral reefs requires strict compliance with marine park regulations and close coordination with local authorities. The research delegation traveled to Khanh Hoa to meet with leadership and scientific officers of the **Nha Trang Bay Management Board** (*Ban Quản lý Vịnh Nha Trang*).

The discussions finalized operational protocols, designated safe deployment corridors within the marine reserve to prevent anchor damage to living coral heads, and established data-sharing agreements with marine conservation rangers.

<figure>
  <img src="/myself/images/projects/coral-reef/nha-trang-bay-management-meeting.jpg" alt="Meeting with Nha Trang Bay Management Board delegation" loading="lazy" />
  <figcaption>
    <span data-i18n-en><strong>Figure 2:</strong> Research and leadership delegation outside the headquarters of the Nha Trang Bay Management Board (Ban Quản lý Vịnh Nha Trang) following strategic deployment planning.</span>
    <span data-i18n-vi><strong>Hình 2:</strong> Đoàn nghiên cứu làm việc trước trụ sở Ban Quản lý Vịnh Nha Trang sau buổi thống nhất kế hoạch triển khai trạm quan trắc.</span>
  </figcaption>
</figure>

### 3. Offshore Marine Transit & Buoy Station Commissioning

The operational phase transitioned to the waters of Nha Trang Bay. Navigating by workboat to designated sanctuary coordinates, researchers and divers transported telemetry equipment, subsea cabling, and underwater inspection ROVs.

The autonomous monitoring station was securely mounted onto a prominent yellow marine navigational beacon. Solar photovoltaic panels and a sealed telemetry housing were affixed above the high-water splash zone, while certified scuba divers descended into the reef to carefully anchor the multiparameter sensor payload along the seabed—initiating continuous, round-the-clock environmental data collection.

<div class="figure-grid">
  <figure>
    <img src="/myself/images/projects/coral-reef/ocean-deployment-transit.jpg" alt="Marine transit and ROV staging on research boat in Nha Trang Bay" loading="lazy" />
    <figcaption>
      <span data-i18n-en><strong>Figure 3:</strong> Research team navigating Nha Trang Bay aboard an expedition vessel, staging underwater ROVs, cabling, and calibration tools for sanctuary installation.</span>
      <span data-i18n-vi><strong>Hình 3:</strong> Tàu nghiên cứu di chuyển trên Vịnh Nha Trang mang theo thiết bị ROV, dây cáp cảm biến ngầm và dụng cụ hiệu chuẩn.</span>
    </figcaption>
  </figure>
  <figure>
    <img src="/myself/images/projects/coral-reef/marine-buoy-monitoring-station.jpg" alt="Deployed solar telemetry station on marine beacon with diver" loading="lazy" />
    <figcaption>
      <span data-i18n-en><strong>Figure 4:</strong> Commissioned solar-powered monitoring station installed atop a marine navigational beacon in Nha Trang Bay, with diver securing submerged sensor nodes in the coral reef zone.</span>
      <span data-i18n-vi><strong>Hình 4:</strong> Trạm giám sát năng lượng mặt trời hoàn thiện trên phao tiêu hàng hải Vịnh Nha Trang, thợ lặn cố định chùm cảm biến đáy san hô.</span>
    </figcaption>
  </figure>
</div>

<figure>
  <video controls playsinline preload="metadata" poster="/myself/images/projects/coral-reef/setup-coral-reef-buoy-poster.jpg">
    <source src="/myself/videos/projects/coral-reef/setup-coral-reef-buoy-nha-trang.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <figcaption>
    <span data-i18n-en><strong>Video 1: System Setup at Nha Trang Bay Marine Sanctuary</strong> — Autonomous solar telemetry station mounted on the marine navigation beacon operating inside the Nha Trang Bay marine protected area.</span>
    <span data-i18n-vi><strong>Video 1: Setup hệ thống tại Vịnh Nha Trang</strong> — Trạm quan trắc rạn san hô tự hành gắn trên phao báo hiệu hàng hải vận hành giữa vùng bảo tồn biển Vịnh Nha Trang.</span>
  </figcaption>
</figure>

### 4. Marine Data Acquisition & Aerial Drone Survey

To monitor reef microhabitats and correlate benthic sensor logs with surface environmental indicators, the team conducts aerial drone mapping and underwater optical data acquisition across designated coral conservation transects.

Aerial imaging provides broad-scale reef canopy visualization, mapping spatial coral distribution, water clarity, and tidal currents around the expedition vessel. In parallel, submerged sensor arrays stream continuous depth profiles, dissolved oxygen, and salinity readings to validate real-time ecological models.

<figure>
  <img src="/myself/images/projects/coral-reef/usingdrone-to-collect-data.jpg" alt="Aerial drone view of research boat conducting coral reef data collection" loading="lazy" />
  <figcaption>
    <span data-i18n-en><strong>Figure 5:</strong> Aerial drone survey of the expedition vessel conducting data acquisition over shallow coral reef beds in Nha Trang Bay, with submerged sensor cables deployed into the water column.</span>
    <span data-i18n-vi><strong>Hình 5:</strong> Khảo sát bằng drone từ trên không ghi nhận tàu nghiên cứu thu thập dữ liệu trên rạn san hô nông Vịnh Nha Trang với đường cáp cảm biến thả ngầm.</span>
  </figcaption>
</figure>

<figure>
  <video controls playsinline preload="metadata" poster="/myself/images/projects/coral-reef/data-collecting-poster.jpg">
    <source src="/myself/videos/projects/coral-reef/data-collecting.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <figcaption>
    <span data-i18n-en><strong>Video 2: Marine Data Collection & Drone Survey</strong> — Aerial footage tracking the expedition boat and underwater sensor deployment across the Nha Trang Bay coral reef conservation zone.</span>
    <span data-i18n-vi><strong>Video 2: Thu thập dữ liệu thực địa & Khảo sát drone</strong> — Video flycam theo dõi hoạt động thu thập dữ liệu môi trường và thả đầu dò ngầm trên khu bảo tồn san hô Vịnh Nha Trang.</span>
  </figcaption>
</figure>

## Impact & Environmental Value

- **Real-Time Sanctuary Vigilance:** Replaced infrequent manual dive surveys with continuous 24/7 water chemistry logging across critical coral zones.
- **Institutional Integration:** Direct collaboration with the Nha Trang Bay Management Board ensures telemetry directly informs conservation actions and bleaching prevention.
- **Ruggedized Coastal IoT:** Validated durable solar-powered telemetry nodes engineered for high-salinity tropical marine conditions.
