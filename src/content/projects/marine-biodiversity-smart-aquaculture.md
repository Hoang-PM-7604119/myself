---
title: Marine Biodiversity Conservation and Smart Aquaculture Platforms
description: Field-deployable AIoT platforms combining underwater imaging, bioacoustics, water-quality sensing, servers, and deployment infrastructure.
date: 2025-02-01
start: 2025-02
status: active
featured: true
order: 1
cover: /images/projects/marine-biodiversity-smart-aquaculture.svg
topics: [aiot-environmental-monitoring, intelligent-sensing-platforms, computer-vision]
people: []
publications: [clean-cam]
relatedProjects: [can-gio-mangrove-iot]
technologies: [Python, PyTorch, Computer Vision, MQTT, PostgreSQL, MinIO, Docker]
organizations: [VinUniversity, VINIF, NAFOSTED]
---

## The Field Challenge

Submerged marine environments present extreme engineering constraints that break standard IoT architectures. Underwater optical attenuation, heavy turbidity, biofouling on optical viewports, and corrosive saline environments severely limit hardware longevity. At the same time, marine conservationists and aquaculture operators require continuous telemetry across water chemistry, acoustics, and fish behavior without human intervention during adverse weather conditions.

## System Architecture & Sensing Stack

To meet these requirements outside pristine laboratory settings, the platform deploys a multi-tier sensing and edge computing pipeline:

- **Acoustic & Vision Nodes:** Submerged hydrophones capture vocalizations and feeding acoustic signatures, while waterproof camera rigs stream periodic high-resolution frames for biomass and behavior tracking.
- **Water Chemistry Array:** Calibrated probes continuously sample dissolved oxygen (DO), temperature, pH, and salinity.
- **Edge Inference Gateway:** On-site embedded compute units execute lightweight PyTorch models to filter uninformative video frames and assess biofouling severity on the camera lens before transmission.
- **Resilient Transport & Storage:** Microservices communicating over local MQTT brokers buffer data locally during cellular dropouts and synchronize with central PostgreSQL and MinIO object storage when connectivity is restored.

## Technical Leadership & Field Operations

Minh-Hoang directs the technical development team spanning embedded hardware, sensor calibration, backend microservices, and physical field deployment. The scope includes:

- Designing the hardware packaging and waterproof enclosure systems to resist pressure and biofouling.
- Architecting asynchronous ingestion pipelines handling streaming video and dense time-series telemetry.
- Conducting rigorous pre-deployment stress tests in circulating flume tanks and pilot aquaculture ponds.
- Establishing operational runbooks and automated health checks to maximize mean time between failures (MTBF).

## Research Outcomes & Benchmark Datasets

The platform bridges real-world marine operations and academic research. A key scientific outcome is **CleanCam**, an open benchmark dataset and computer-vision model evaluating optical viewport fouling severity in coastal aquaculture. The deployed system serves as a live research testbed supported by VinUniversity, VINIF, and NAFOSTED.
