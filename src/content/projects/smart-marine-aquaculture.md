---
title: Smart Marine Aquaculture – Nha Trang
description: Field-deployable embedded systems, servers, underwater imaging, bioacoustics, and water-quality sensing infrastructure for smart marine aquaculture in Nha Trang.
date: 2025-02-01
start: 2025-02
status: active
featured: true
order: 1
cover: /images/projects/smart-marine-aquaculture.jpg
topics: [aiot-environmental-monitoring]
people: [pham-minh-hoang, nguyen-van-dinh, dinh-van-dung, phan-tuan-khoi, nguyen-thanh-trung, nguyen-hong-phuc, trinh-cong-son, nguyen-xuan-quyen]
publications: [clean-cam]
relatedProjects: [coral-reef-conservation-nha-trang, can-gio-mangrove-iot]
technologies: [Python, PyTorch, Computer Vision, ESP32, MQTT, PostgreSQL, MinIO, Docker]
organizations: [
  "Smart Green Transformation Center (GREEN-X), VinUniversity",
  "Vietnam National University of Agriculture (VNUA)",
  "Research Institute for Aquaculture (RIA)"
]
---

## The Field Challenge

Smart marine aquaculture in coastal waters near Nha Trang presents harsh environmental constraints that disrupt traditional manual monitoring. High water turbidity, rapid biofouling on optical viewports, corrosive saline conditions, and remote offshore power constraints severely challenge standard equipment. Sustainable offshore farming requires continuous, automated insight into water chemistry, underwater acoustics, and fish behavior without manual diving.

## Embedded System Architecture: 3 Sensing Modalities & Integrated AI

To provide continuous, end-to-end monitoring for offshore aquaculture operations, the research team engineered an integrated embedded hardware platform combining three primary sensing modalities coupled with edge AI algorithms:

- **1. Underwater Video Sensing (Computer Vision):** Waterproof submerged camera rigs capture high-resolution imagery and video streams under challenging underwater illumination. Embedded vision models continuously observe fish biomass, school clustering, swimming trajectories, and evaluate optical viewport biofouling in real time.
- **2. Underwater Audio Sensing (Bioacoustics):** Subsea hydrophone arrays capture underwater soundscapes and frequency dynamics. Bioacoustic AI models analyze fish chewing, pellet collision, and swimming acoustic signatures to quantify feeding intensity and appetite in real time.
- **3. Five Key Water-Quality Parameters:** An industrial-grade sensor manifold continuously monitors 5 critical physicochemical indicators: **Dissolved Oxygen (DO)**, **pH**, **Water Temperature**, **Salinity**, and **Turbidity**, safeguarding against sudden hypoxia, temperature shocks, or salinity shifts.
- **Applied Artificial Intelligence (AI):** Edge AI models (PyTorch, YOLO) and signal processing algorithms analyze video and acoustic streams on-site, converting raw high-bandwidth sensor feeds into actionable operational insights, feeding schedule optimizations, and early disease/stress warnings.
- **Robust Telemetry & Server Infrastructure:** Encrypted MQTT pipelines stream metadata and filtered frames to edge servers, backed by PostgreSQL time-series storage, MinIO media buckets, and live operational dashboards.

## Evolution of Field Deployments: From Laboratory to Open Ocean

The system underwent an iterative four-phase engineering trajectory, validating hardware resilience, fluidics, and telemetry across diverse aquaculture environments:

### Phase 1: Laboratory Benchmarking & Multiplexed Fluidics at VNUA (Hanoi)

Development began at the Vietnam National University of Agriculture (VNUA), where controlled multi-tank environments allowed precise calibration of optical sensors and water quality instrumentation. 

To overcome the high cost of duplicating industrial probes across multiple tanks, the team engineered a custom fluidic manifold box. Using automated solenoid valve cycling, a single high-precision sensing chamber could cyclically sample distinct water tanks in sequence, with automated freshwater flush cycles to prevent cross-contamination.

<div class="figure-grid">
  <figure>
    <img src="/myself/images/projects/smart-aquaculture/stage1-vnua-lab-testing.jpg" alt="Controlled laboratory multi-tank testing at VNUA" loading="lazy" />
    <figcaption>
      <span data-i18n-en><strong>Figure 1:</strong> Multi-tank experimental test bench at VNUA during overnight calibration of automated water circulation and optical tracking rigs.</span>
      <span data-i18n-vi><strong>Hình 1:</strong> Dàn bể thử nghiệm tại VNUA trong quá trình hiệu chuẩn đêm hệ thống tuần hoàn nước và camera theo dõi.</span>
    </figcaption>
  </figure>
  <figure>
    <img src="/myself/images/projects/smart-aquaculture/stage1-vnua-sensor-manifold.jpg" alt="Automated solenoid valve water manifold box" loading="lazy" />
    <figcaption>
      <span data-i18n-en><strong>Figure 2:</strong> Solenoid valve manifold assembly multiplexing fluid intake lines from distinct aquaculture tanks into a single sensor chamber.</span>
      <span data-i18n-vi><strong>Hình 2:</strong> Hộp van điện từ đa kênh tự động phân luồng dòng nước từ nhiều bể nuôi vào một buồng đo cảm biến duy nhất.</span>
    </figcaption>
  </figure>
</div>

### Phase 2: Pilot Raceway Hardening at RIA 1 (Hai Phong)

Moving beyond benchtop testing, the prototype was deployed at the Research Institute for Aquaculture No. 1 (RIA 1) in Hai Phong. This phase tested the system inside operational concrete raceways and indoor breeding pools under high-humidity, saline aerosol conditions.

The team validated continuous underwater camera telemetry, watertight cable pass-throughs, and real-time data streaming to the central GREEN-X cloud dashboard, isolating and resolving ground-loop electrical noise caused by high-power water aerators.

<figure>
  <img src="/myself/images/projects/smart-aquaculture/stage2-ria1-indoor-aquaculture.jpg" alt="Indoor concrete raceway at RIA 1 Hai Phong" loading="lazy" />
  <figcaption>
    <span data-i18n-en><strong>Figure 3:</strong> High-density indoor aquaculture raceway at RIA 1 Hai Phong instrumented with submerged water-quality probes and an overhead camera rig.</span>
    <span data-i18n-vi><strong>Hình 3:</strong> Hệ thống bể xi măng nuôi trong nhà tại RIA 1 Hải Phòng tích hợp chùm đầu dò ngầm và camera quan sát trên cao.</span>
  </figcaption>
</figure>

<div class="figure-grid">
  <figure>
    <img src="/myself/images/projects/smart-aquaculture/stage2-ria1-field-team.jpg" alt="Field team conducting telemetry verification at RIA 1" loading="lazy" />
    <figcaption>
      <span data-i18n-en><strong>Figure 4:</strong> Research team conducting real-time data ingestion checks and telemetry validation on the VinUniversity GREEN-X monitoring station.</span>
      <span data-i18n-vi><strong>Hình 4:</strong> Nhóm nghiên cứu kiểm tra luồng dữ liệu thời gian thực và độ ổn định viễn thông trên trạm quan trắc GREEN-X.</span>
    </figcaption>
  </figure>
  <figure>
    <img src="/myself/images/projects/smart-aquaculture/stage2-ria1-circuit-inspection.jpg" alt="Inspection of internal controller circuitry and waterproof glands" loading="lazy" />
    <figcaption>
      <span data-i18n-en><strong>Figure 5:</strong> Technical inspection of power management circuitry, signal conditioning boards, and IP-rated marine enclosure cable glands.</span>
      <span data-i18n-vi><strong>Hình 5:</strong> Kiểm tra kỹ thuật mạch nguồn, bo mạch điều chế tín hiệu cảm biến và ốc siết cáp chống nước chuẩn hàng hải.</span>
    </figcaption>
  </figure>
</div>

### Phase 3: Offshore Floating Sea-Cage Deployment at Nha Phu Bay (Nha Trang)

The true test of marine resilience took place in the open waters of Nha Phu Bay, Khanh Hoa province. Here, commercial fish cages float kilometers offshore, subjected to tidal currents, heavy wave swells, salt spray, and tropical sunlight.

To ensure total self-sufficiency, the team engineered a dual-solar-powered station equipped with high-capacity lithium iron phosphate (LiFePO4) battery buffering and high-gain 4G/LTE cellular communications. The installation operated autonomously on the floating wooden platform, continuously beaming environmental parameters to mainland servers.

<figure>
  <img src="/myself/images/projects/smart-aquaculture/stage3-nhaphu-floating-cages.jpg" alt="Offshore floating sea cages in Nha Phu Bay with solar station" loading="lazy" />
  <figcaption>
    <span data-i18n-en><strong>Figure 6:</strong> Autonomous dual-solar telemetry station mounted atop offshore floating sea cages in Nha Phu Bay, Nha Trang.</span>
    <span data-i18n-vi><strong>Hình 6:</strong> Trạm quan trắc tự hành 2 tấm pin mặt trời lắp đặt trên hệ thống lồng bè nuôi cá biển ngoài khơi Vịnh Nha Phu.</span>
  </figcaption>
</figure>

<figure>
  <img src="/myself/images/projects/smart-aquaculture/stage3-nhaphu-team-deployment.jpg" alt="Minh-Hoang Pham and Phan Tuan Khoi at Nha Phu Bay floating platform" loading="lazy" />
  <figcaption>
    <span data-i18n-en><strong>Figure 7:</strong> Lead researcher Minh-Hoang Pham, co-researcher Phan Tuan Khoi, and team collaborator on the floating raft platform celebrating successful offshore commissioning.</span>
    <span data-i18n-vi><strong>Hình 7:</strong> Trưởng nhóm kỹ thuật Phạm Minh Hoàng, cộng sự Phan Tuấn Khởi cùng thành viên nhóm trên bè nổi sau khi hoàn thành chạy thử nghiệm.</span>
  </figcaption>
</figure>

<figure>
  <video controls playsinline preload="metadata" poster="/myself/images/projects/smart-aquaculture/setup-nha-phu-bay-poster.jpg">
    <source src="/myself/videos/projects/smart-aquaculture/setup-nha-phu-bay.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <figcaption>
    <span data-i18n-en><strong>Video 1: System Setup at Nha Phu Bay</strong> — Aerial drone survey of the autonomous solar-powered telemetry station deployed on offshore floating aquaculture cages in Nha Phu Bay.</span>
    <span data-i18n-vi><strong>Video 1: Setup hệ thống tại Vịnh Nha Phu</strong> — Toàn cảnh hệ thống trạm quan trắc năng lượng mặt trời trên lồng bè nuôi biển ngoài khơi Vịnh Nha Phu nhìn từ drone.</span>
  </figcaption>
</figure>

### Phase 4: Circular Outdoor Tanks & Bioacoustics at RIA 3 (Nha Trang)

In the final operational stage, the infrastructure was installed at the Research Institute for Aquaculture No. 3 (RIA 3) in Nha Trang across large outdoor circular aquaculture pools. 

This installation unified environmental telemetry with underwater bioacoustic monitoring. An industrial embedded processing unit and dedicated multi-channel audio interface were integrated into the outdoor weatherproof enclosure, enabling real-time hydrophone signal capture to study fish feeding sounds and swimming dynamics in correlation with water quality fluctuations.

<div class="figure-grid">
  <figure>
    <img src="/myself/images/projects/smart-aquaculture/stage4-ria3-system-assembly.jpg" alt="System assembly and wiring at RIA 3 by Phan Tuan Khoi" loading="lazy" />
    <figcaption>
      <span data-i18n-en><strong>Figure 8:</strong> Co-researcher Phan Tuan Khoi assembling the outdoor telemetry enclosure, integrating 4G LTE communications, hydrophone audio interface, and embedded processor.</span>
      <span data-i18n-vi><strong>Hình 8:</strong> Cộng sự Phan Tuấn Khởi hoàn thiện lắp ráp tủ trạm ngoài trời, tích hợp kết nối 4G LTE, soundcard thu âm thủy âm và máy tính nhúng.</span>
    </figcaption>
  </figure>
  <figure>
    <img src="/myself/images/projects/smart-aquaculture/stage4-ria3-tank-overview.jpg" alt="Panoramic view of RIA 3 outdoor aquaculture tanks" loading="lazy" />
    <figcaption>
      <span data-i18n-en><strong>Figure 9:</strong> Elevated view of RIA 3 outdoor circular aquaculture tanks under continuous surveillance by the installed VinUniversity solar AIoT telemetry station.</span>
      <span data-i18n-vi><strong>Hình 9:</strong> Góc nhìn trên cao cụm bể nuôi tròn ngoài trời tại RIA 3 dưới sự giám sát liên tục của trạm AIoT VinUniversity.</span>
    </figcaption>
  </figure>
</div>

<figure>
  <video controls playsinline preload="metadata" poster="/myself/images/projects/smart-aquaculture/setup-ria3-nha-trang-poster.jpg">
    <source src="/myself/videos/projects/smart-aquaculture/setup-ria3-nha-trang.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <figcaption>
    <span data-i18n-en><strong>Video 2: System Setup at RIA 3 Nha Trang</strong> — VinUniversity outdoor telemetry enclosure, power distribution, and monitoring cameras mounted under the aquaculture tank roof.</span>
    <span data-i18n-vi><strong>Video 2: Setup hệ thống tại RIA 3 Nha Trang</strong> — Tủ trạm quan trắc VinUniversity, hệ thống cấp nguồn và camera giám sát gắn dưới mái che bể nuôi tại RIA 3.</span>
  </figcaption>
</figure>

## Technical Contributions & Open Science

- **Field-Tested Marine AIoT:** Demonstrated sustained autonomous operation across indoor raceways, land-based tank farms, and offshore floating sea cages.
- **Biofouling-Aware Vision:** Designed camera viewport cleanliness assessment algorithms, forming the basis of the published **CleanCam** benchmark dataset.
- **Multimodal Environmental & Acoustic Sensing:** Fused water-quality time-series with submerged bioacoustic telemetry for proactive aquaculture management.
