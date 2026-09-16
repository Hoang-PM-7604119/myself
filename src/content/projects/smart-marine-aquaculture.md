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
people: [pham-minh-hoang, nguyen-van-dinh, dinh-van-dung, phan-tuan-khoi]
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

Smart marine aquaculture in coastal waters near Nha Trang presents harsh environmental constraints that disrupt traditional monitoring. High water turbidity, rapid biofouling on optical viewports, corrosive saline conditions, and remote offshore power constraints severely challenge standard sensing equipment. Aquaculture operators require continuous insights into water chemistry, underwater acoustics, and fish behavior without manual intervention.

## System Architecture & Sensing Stack

To provide continuous monitoring for aquaculture operations, the research team developed an integrated hardware and software infrastructure:

- **Submerged Acoustic & Vision Nodes:** Waterproof camera rigs record periodic high-resolution frames for fish biomass and behavior tracking, paired with hydrophone arrays sampling underwater acoustics to evaluate feeding activity.
- **Edge Vision & Fouling Estimation:** Embedded PyTorch models evaluate camera viewport biofouling severity in real time, filtering obscured imagery prior to transmission.
- **Multiparameter Water Quality Logging:** Continuous sampling of dissolved oxygen (DO), temperature, pH, salinity, and turbidity via industrial-grade marine probes.
- **Data & Server Infrastructure:** Edge nodes stream lightweight MQTT payloads to localized gateways that manage data queuing, PostgreSQL time-series logging, and MinIO object storage.

## Evolution of Field Deployments: From Laboratory to Open Ocean

The system underwent an iterative four-phase engineering trajectory, validating hardware resilience, fluidics, and telemetry across diverse aquaculture environments:

### Phase 1: Laboratory Benchmarking & Multiplexed Fluidics at VNUA (Hanoi)

Development began at the Vietnam National University of Agriculture (VNUA), where controlled multi-tank environments allowed precise calibration of optical sensors and water quality instrumentation. 

To overcome the high cost of duplicating industrial probes across multiple tanks, the team engineered a custom fluidic manifold box. Using automated solenoid valve cycling, a single high-precision sensing chamber could cyclically sample distinct water tanks in sequence, with automated freshwater flush cycles to prevent cross-contamination.

<div class="figure-grid">
  <figure>
    <img src="/myself/images/projects/smart-aquaculture/stage1-vnua-lab-testing.jpg" alt="Controlled laboratory multi-tank testing at VNUA" loading="lazy" />
    <figcaption><strong>Figure 1:</strong> Multi-tank experimental test bench at VNUA during overnight calibration of automated water circulation and optical tracking rigs.</figcaption>
  </figure>
  <figure>
    <img src="/myself/images/projects/smart-aquaculture/stage1-vnua-sensor-manifold.jpg" alt="Automated solenoid valve water manifold box" loading="lazy" />
    <figcaption><strong>Figure 2:</strong> Solenoid valve manifold assembly multiplexing fluid intake lines from distinct aquaculture tanks into a single sensor chamber.</figcaption>
  </figure>
</div>

### Phase 2: Pilot Raceway Hardening at RIA 1 (Hai Phong)

Moving beyond benchtop testing, the prototype was deployed at the Research Institute for Aquaculture No. 1 (RIA 1) in Hai Phong. This phase tested the system inside operational concrete raceways and indoor breeding pools under high-humidity, saline aerosol conditions.

The team validated continuous underwater camera telemetry, watertight cable pass-throughs, and real-time data streaming to the central GREEN-X cloud dashboard, isolating and resolving ground-loop electrical noise caused by high-power water aerators.

<figure>
  <img src="/myself/images/projects/smart-aquaculture/stage2-ria1-indoor-aquaculture.jpg" alt="Indoor concrete raceway at RIA 1 Hai Phong" loading="lazy" />
  <figcaption><strong>Figure 3:</strong> High-density indoor aquaculture raceway at RIA 1 Hai Phong instrumented with submerged water-quality probes and an overhead camera rig.</figcaption>
</figure>

<div class="figure-grid">
  <figure>
    <img src="/myself/images/projects/smart-aquaculture/stage2-ria1-field-team.jpg" alt="Field team conducting telemetry verification at RIA 1" loading="lazy" />
    <figcaption><strong>Figure 4:</strong> Research team conducting real-time data ingestion checks and telemetry validation on the VinUniversity GREEN-X monitoring station.</figcaption>
  </figure>
  <figure>
    <img src="/myself/images/projects/smart-aquaculture/stage2-ria1-circuit-inspection.jpg" alt="Inspection of internal controller circuitry and waterproof glands" loading="lazy" />
    <figcaption><strong>Figure 5:</strong> Technical inspection of power management circuitry, signal conditioning boards, and IP-rated marine enclosure cable glands.</figcaption>
  </figure>
</div>

### Phase 3: Offshore Floating Sea-Cage Deployment at Nha Phu Bay (Nha Trang)

The true test of marine resilience took place in the open waters of Nha Phu Bay, Khanh Hoa province. Here, commercial fish cages float kilometers offshore, subjected to tidal currents, heavy wave swells, salt spray, and tropical sunlight.

To ensure total self-sufficiency, the team engineered a dual-solar-powered station equipped with high-capacity lithium iron phosphate (LiFePO4) battery buffering and high-gain 4G/LTE cellular communications. The installation operated autonomously on the floating wooden platform, continuously beaming environmental parameters to mainland servers.

<figure>
  <img src="/myself/images/projects/smart-aquaculture/stage3-nhaphu-floating-cages.jpg" alt="Offshore floating sea cages in Nha Phu Bay with solar station" loading="lazy" />
  <figcaption><strong>Figure 6:</strong> Autonomous dual-solar telemetry station mounted atop offshore floating sea cages in Nha Phu Bay, Nha Trang.</figcaption>
</figure>

<figure>
  <img src="/myself/images/projects/smart-aquaculture/stage3-nhaphu-team-deployment.jpg" alt="Minh-Hoang Pham and Phan Tuan Khoi at Nha Phu Bay floating platform" loading="lazy" />
  <figcaption><strong>Figure 7:</strong> Lead researcher Minh-Hoang Pham, co-researcher Phan Tuan Khoi, and team collaborator on the floating raft platform celebrating successful offshore commissioning.</figcaption>
</figure>

<figure>
  <video controls playsinline preload="metadata" poster="/myself/images/projects/smart-aquaculture/setup-nha-phu-bay-poster.jpg">
    <source src="/myself/videos/projects/smart-aquaculture/setup-nha-phu-bay.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <figcaption><strong>Video 1: Setup của hệ thống tại Vịnh Nha Phu</strong> — Toàn cảnh hệ thống trạm quan trắc năng lượng mặt trời trên lồng bè nuôi biển ngoài khơi vịnh Nha Phu nhìn từ drone trên không.</figcaption>
</figure>

### Phase 4: Circular Outdoor Tanks & Bioacoustics at RIA 3 (Nha Trang)

In the final operational stage, the infrastructure was installed at the Research Institute for Aquaculture No. 3 (RIA 3) in Nha Trang across large outdoor circular aquaculture pools. 

This installation unified environmental telemetry with underwater bioacoustic monitoring. An industrial embedded processing unit and dedicated multi-channel audio interface were integrated into the outdoor weatherproof enclosure, enabling real-time hydrophone signal capture to study fish feeding sounds and swimming dynamics in correlation with water quality fluctuations.

<div class="figure-grid">
  <figure>
    <img src="/myself/images/projects/smart-aquaculture/stage4-ria3-system-assembly.jpg" alt="System assembly and wiring at RIA 3 by Phan Tuan Khoi" loading="lazy" />
    <figcaption><strong>Figure 8:</strong> Co-researcher Phan Tuan Khoi assembling the outdoor telemetry enclosure, integrating 4G LTE communications, hydrophone audio interface, and embedded processor.</figcaption>
  </figure>
  <figure>
    <img src="/myself/images/projects/smart-aquaculture/stage4-ria3-tank-overview.jpg" alt="Panoramic view of RIA 3 outdoor aquaculture tanks" loading="lazy" />
    <figcaption><strong>Figure 9:</strong> Elevated view of RIA 3 outdoor circular aquaculture tanks under continuous surveillance by the installed VinUniversity solar AIoT telemetry station.</figcaption>
  </figure>
</div>

<figure>
  <video controls playsinline preload="metadata" poster="/myself/images/projects/smart-aquaculture/setup-ria3-nha-trang-poster.jpg">
    <source src="/myself/videos/projects/smart-aquaculture/setup-ria3-nha-trang.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <figcaption><strong>Video 2: Setup của hệ thống tại RIA 3 Nha Trang</strong> — Trạm quan trắc viễn thông VinUniversity, hệ thống cấp nguồn và camera giám sát mái che bể nuôi tại Viện Nghiên cứu Nuôi trồng Thủy sản III.</figcaption>
</figure>

## Technical Contributions & Open Science

- **Field-Tested Marine AIoT:** Demonstrated sustained autonomous operation across indoor raceways, land-based tank farms, and offshore floating sea cages.
- **Biofouling-Aware Vision:** Designed camera viewport cleanliness assessment algorithms, forming the basis of the published **CleanCam** benchmark dataset.
- **Multimodal Environmental & Acoustic Sensing:** Fused water-quality time-series with submerged bioacoustic telemetry for proactive aquaculture management.
