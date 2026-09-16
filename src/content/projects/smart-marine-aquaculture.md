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
people: [pham-minh-hoang, nguyen-van-dinh, dinh-van-dung]
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

Smart marine aquaculture in coastal waters near Nha Trang presents harsh environmental constraints that disrupt traditional monitoring. High water turbidity, rapid biofouling on optical viewports, and corrosive saline conditions severely degrade optical sensors. Aquaculture operators require continuous insights into water chemistry, underwater acoustics, and fish behavior without manual intervention.

## System Architecture & Sensing Stack

To provide continuous monitoring for aquaculture operations, Minh-Hoang led technical teams building an integrated hardware and software infrastructure:

- **Submerged Acoustic & Vision Nodes:** Waterproof camera rigs record periodic high-resolution frames for fish biomass and behavior tracking, paired with hydrophone arrays sampling underwater acoustics.
- **Edge Vision & Fouling Estimation:** Embedded PyTorch models evaluate camera viewport biofouling severity in real time, filtering obscured imagery prior to transmission.
- **Data & Server Infrastructure:** Edge nodes stream lightweight MQTT payloads to localized gateways that manage data queuing, PostgreSQL time-series logging, and MinIO object storage.

## Technical Leadership & Field Deployment

Minh-Hoang coordinated multidisciplinary development teams across embedded devices, backend services, and deployment readiness:

- Directed hardware validation and waterproof enclosure design for long-term marine submersion.
- Managed technical reviews, task allocations, and server deployment preparations for pilot aquaculture testbeds in Nha Trang.
- Established the open-access **CleanCam** computer vision benchmark dataset to advance camera viewport fouling evaluation in marine aquaculture.
