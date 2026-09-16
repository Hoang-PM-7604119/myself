---
title: Bee Monitoring AIoT System
description: An AIoT platform for hive monitoring, bee counting, environmental sensing, and research data workflows.
date: 2023-06-01
start: 2023-01
end: 2024-09
status: completed
featured: true
order: 4
cover: /images/projects/bee-monitoring-aiot-system.svg
topics: [aiot-environmental-monitoring, computer-vision, edge-ai-embedded-systems]
people: [pham-minh-hoang]
publications: []
relatedProjects: []
technologies: [Python, Computer Vision, ESP32, MQTT, Backend Services]
organizations: [Ministry of Agriculture and Rural Development of Vietnam]
---

## The Apiary Health Challenge

Honeybee colonies play an indispensable role in ecological biodiversity and global agricultural food security, yet colonies are increasingly vulnerable to sudden collapse, colony stressors, and environmental volatility. Traditional beekeeping relies on physical hive inspections: opening the hive boxes, disrupting internal hive temperature and humidity regulation, and agitating the colony. Beekeepers and entomologists lacked an automated, non-invasive method to measure worker bee traffic patterns, forager return rates, and colony health trends over seasonal cycles.

## Edge Vision & Acoustic Sensing Pipeline

The Bee Monitoring AIoT platform was designed as an unobtrusive, field-ready appliance mounted directly at the hive entrance:

- **Non-Invasive Optical Entrance Monitor:** A low-power optical stage with controlled diffuse LED illumination records high-speed worker bee movements across hive flight boards.
- **Edge Vision Counting & Trajectory Tracking:** Embedded Python and OpenCV pipelines analyze optical flow and trajectory vectors, accurately counting departing foragers and returning nectar gatherers even under dense bee clustering.
- **Microclimate & Bioacoustic Telemetry:** Internal temperature, relative humidity, and acoustic vibration sensors sample hive core acoustics, providing early warning signatures of swarming behavior or queen loss.
- **Asynchronous Telemetry Bridge:** ESP32 and edge microcontrollers aggregate multi-sensor readings, dispatching encrypted lightweight MQTT payloads to backend research servers.

## Multidisciplinary Team Leadership

Minh-Hoang coordinated the technical execution of a multidisciplinary engineering team funded by Vietnam's Ministry of Agriculture and Rural Development:

- Managed cross-functional development across embedded firmware, edge computer vision algorithms, and backend time-series database design.
- Directed field deployment and mounting experiments across pilot apiary farms in Northern Vietnam, validating camera exposure robustness under fluctuating natural sunlight.
- Standardized data collection protocols and automated ingestion workflows for agricultural research scientists.

## Agricultural Research Outcomes

The project delivered an operational, end-to-end AIoT appliance that proved computer vision can operate continuously in rural agricultural settings without specialized maintenance. The resulting telemetry provided entomologists with fine-grained activity curves, establishing foundational architectures for Minh-Hoang's subsequent environmental sensing platforms.
