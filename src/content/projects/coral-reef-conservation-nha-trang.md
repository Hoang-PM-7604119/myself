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
people: [pham-minh-hoang, dinh-van-dung, pham-huy-hieu, phung-manh-duong, nguyen-ngoc-gia-ninh, nguyen-xuan-quyen]
publications: [edge-deadline-rl]
relatedProjects: [smart-marine-aquaculture, can-gio-mangrove-iot]
technologies: [Water Quality Sensing, Marine Telemetry, Underwater Imaging, Drone Remote Sensing, Linux, Docker, MQTT]
organizations: [
  "Smart Green Transformation Center (GREEN-X), VinUniversity",
  "Nha Trang Bay Management Board",
  "Nha Trang University (NTU)"
]
---

## The Conservation Challenge

Coral reef ecosystems in Nha Trang Bay—one of Vietnam's most biologically diverse marine protected areas—face severe threats from rising sea temperatures, coastal runoff pollution, and fluctuating salinity levels. Traditional reef assessments rely on periodic manual scuba surveys, which cannot detect acute episodic shocks, dissolved oxygen drops, or fine-grained diurnal variations that trigger coral bleaching. 

To overcome these constraints, the project was formulated around two synergistic components:
1. **Deploying an autonomous offshore water-quality monitoring system** for 24/7 continuous environmental observation.
2. **Collecting high-resolution underwater coral imagery and drone datasets** to map benthic habitat health and build benchmark datasets for marine conservation.

---

## Part 1: Autonomous Water Quality Monitoring System Deployment

The first core objective focuses on deploying an autonomous, ruggedized environmental telemetry station operating continuously within the Nha Trang Bay marine sanctuary:

- **Multiparameter In-Situ Water Quality Sensing:** Submerged sensing clusters continuously log critical water-chemistry variables directly at reef depths, including dissolved oxygen (DO), water temperature, pH, salinity, and turbidity.
- **Corrosion-Resistant Marine Hardware:** IP68-rated sealed telemetry housings, marine-grade cabling, and anti-biofouling enclosures engineered for long-term survival in high-salinity coastal environments.
- **Solar Energy Harvesting & Surface Telemetry:** Solar photovoltaic arrays mounted on marine navigation beacons ensure uninterrupted off-grid power, transmitting encrypted telemetry via cellular channels.
- **Continuous Environmental Sanctuary Intelligence:** Real-time data feeds allow marine scientists and park rangers to detect bleaching conditions, hypoxic dips, and runoff anomalies early.

### 1. Project Kickoff & System Architecture Formulation

The initiative began with a comprehensive technical workshop at VinUniversity, convening researchers across embedded sensing, marine IoT networking, and conservation robotics to define the offshore telemetry architecture.

<figure>
  <img src="/myself/images/projects/coral-reef/kickstart-meeting.jpg" alt="Coral reef project kickoff and architecture workshop at VinUniversity" loading="lazy" />
  <figcaption>
    <span data-i18n-en><strong>Figure 1:</strong> Project kickoff meeting at VinUniversity with Minh-Hoang Pham, Prof. Dinh Van Dung, Prof. Pham Huy Hieu, and faculty researchers formulating the coastal sensing architecture.</span>
    <span data-i18n-vi><strong>Hình 1:</strong> Buổi họp khởi động dự án tại VinUniversity cùng Phạm Minh Hoàng, PGS. Đinh Văn Dũng, TS. Phạm Huy Hiệu và nhóm nghiên cứu định hình kiến trúc quan trắc biển.</span>
  </figcaption>
</figure>

### 2. Institutional Strategic Alignment with Nha Trang Bay Management Board

Safeguarding coral reefs requires strict compliance with marine park regulations and close coordination with local authorities. The research delegation traveled to Khanh Hoa to collaborate directly with leadership and scientific officers of the **Nha Trang Bay Management Board** (*Ban Quản lý Vịnh Nha Trang*).

The discussions finalized operational protocols, designated safe deployment corridors within the marine reserve to prevent anchor damage to living coral heads, and established data-sharing agreements with conservation rangers.

<figure>
  <img src="/myself/images/projects/coral-reef/nha-trang-bay-management-meeting.jpg" alt="Meeting with Nha Trang Bay Management Board delegation" loading="lazy" />
  <figcaption>
    <span data-i18n-en><strong>Figure 2:</strong> Research and leadership delegation outside the headquarters of the Nha Trang Bay Management Board (Ban Quản lý Vịnh Nha Trang) following strategic deployment planning.</span>
    <span data-i18n-vi><strong>Hình 2:</strong> Đoàn nghiên cứu làm việc trước trụ sở Ban Quản lý Vịnh Nha Trang sau buổi thống nhất kế hoạch triển khai trạm quan trắc.</span>
  </figcaption>
</figure>

### 3. Offshore Marine Transit & Buoy Station Commissioning

The operational phase transitioned to the open waters of Nha Trang Bay. Navigating by research workboat to designated sanctuary coordinates, researchers and divers transported telemetry equipment, subsea cabling, and underwater inspection ROVs.

The autonomous monitoring station was mounted onto a marine navigational beacon. Solar photovoltaic panels and sealed telemetry enclosures were affixed above the splash zone, while certified scuba divers descended into the reef to anchor the multiparameter water quality sensor payload along the seabed—initiating continuous round-the-clock environmental data collection.

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

---

## Part 2: Underwater Coral Image & Video Dataset Collection

The second core objective focuses on building comprehensive visual benchmark datasets of living coral ecosystems across diverse microhabitats in Nha Trang Bay. 

By pairing high-altitude aerial drone surveys with underwater optical transects, the research team acquires multi-angle, multi-scale visual data:

- **Benthic Coral Optical Surveys:** Submerged camera systems and scuba inspection sweeps record high-definition video and photography of branching, massive, and encrusting coral colonies. The dataset documents coral bleaching severity, algal overgrowth, and macro-invertebrate diversity.
- **Aerial Drone Photogrammetry:** Low-altitude drone flights map shallow reef flats, water surface clarity, wave dynamics, and tidal currents across the survey coordinates.
- **Multimodal Alignment:** Benthic optical frames and drone canopy footage are georeferenced with concurrent water quality telemetry (temperature, dissolved oxygen, turbidity) to enable data-driven ecological modeling and automated coral assessment algorithms.

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
    <span data-i18n-en><strong>Video 1: Marine Data Collection & Drone Survey</strong> — Aerial footage tracking the expedition boat and underwater sensor deployment across the Nha Trang Bay coral reef conservation zone.</span>
    <span data-i18n-vi><strong>Video 1: Thu thập dữ liệu thực địa & Khảo sát drone</strong> — Video flycam theo dõi hoạt động thu thập dữ liệu môi trường và thả đầu dò ngầm trên khu bảo tồn san hô Vịnh Nha Trang.</span>
  </figcaption>
</figure>

## Impact & Environmental Value

- **Real-Time Sanctuary Vigilance:** Replaced infrequent manual dive surveys with continuous 24/7 water chemistry logging across critical coral zones.
- **Institutional Integration:** Direct collaboration with the Nha Trang Bay Management Board ensures telemetry directly informs conservation actions and bleaching prevention.
- **Ruggedized Coastal IoT:** Validated durable solar-powered telemetry nodes engineered for high-salinity tropical marine conditions.
