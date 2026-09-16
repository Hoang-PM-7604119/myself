---
title: Bee Health Monitoring AIoT System
description: An edge AI and IoT monitoring platform deployed on beehives for automated bee counting, microclimate sensing, and hive health tracking.
date: 2023-06-01
start: 2023-01
end: 2024-09
status: completed
featured: true
order: 4
cover: /images/projects/bee-monitoring-aiot-system.jpg
topics: [aiot-environmental-monitoring]
people: [pham-minh-hoang, vu-hai, pham-hong-thai]
publications: []
relatedProjects: []
technologies: [YOLOv5, Raspberry Pi 4B, Jetson Nano, IMX477 HQ Camera, Python, Flask, Flutter, MQTT, SQLite, DHT22]
organizations: [
  "Hanoi University of Science and Technology (HUST)",
  "Vietnam National University of Agriculture (VNUA)"
]
video: https://www.youtube.com/watch?v=96vREBGUFqM
---

## The Apiary Health Challenge

Honeybee colonies play an indispensable role in ecological biodiversity and global agricultural food security. In Vietnam, beekeeping is a traditional, labor-intensive livelihood that historically depends on manual inspection: opening hives to assess colony strength, brood conditions, and queen health. This manual process is time-consuming, agitates the bees, and disrupts internal hive thermoregulation.

Developed under institutional research project **B2023-BKA.10**, this project was led by student researcher **Minh-Hoang Pham** under the academic advisement of **Assoc. Prof. Dr. Vu Hai** (School of Electrical and Electronic Engineering, Hanoi University of Science and Technology – HUST) in collaboration with **Assoc. Prof. Dr. Pham Hong Thai** at the Center for Tropical Bee Research and Beekeeping (Vietnam National University of Agriculture – VNUA). The project aimed to deliver an autonomous, non-invasive AIoT system that operates reliably in outdoor field environments with unstable network and power constraints.

## System Architecture & Hardware Engineering

The appliance was engineered to mount directly onto standardized modern multi-tier beehives ("thùng kế"):

- **Embedded Edge Computing:** Deployed using Raspberry Pi 4B and NVIDIA Jetson Nano edge platforms to handle local data ingestion, device health checks, and deep learning inference.
- **Optical Entrance Monitor:** High-resolution Sony IMX477 HQ Camera module fitted with a 6mm CS-mount lens and Raspberry Pi Camera Module v2 with diffuse LED illumination to capture high-speed bee traffic across the hive entrance flight board.
- **Internal Microclimate Telemetry:** Industrial DHT22 environmental sensors positioned within hive frames to continuously track internal hive core temperature and relative humidity.
- **Resilient MQTT Telemetry Bridge:** Low-bandwidth, high-reliability MQTT messaging pipeline transferring compressed telemetry over intermittent cellular connectivity.
- **Central Relational Data Service:** SQLite-powered backend managing structured tables for hive metadata (`hives`), traffic counts (`bee`), hardware health metrics (`device_status`), and environmental logs (`temphum`).

<figure>
  <img src="/myself/images/projects/bee-monitoring/system-architecture.png" alt="Bee Health Monitoring AIoT System Architecture Diagram" loading="lazy" />
  <figcaption><strong>Figure 1:</strong> End-to-end AIoT system architecture connecting edge video processing nodes via MQTT to central database, web management platform, and cross-platform mobile application.</figcaption>
</figure>

<figure>
  <img src="/myself/images/projects/bee-monitoring/hardware-installation.png" alt="Hardware Installation on Multi-tier Beehive" loading="lazy" />
  <figcaption><strong>Figure 2:</strong> Physical hardware assembly mounted on standardized multi-tier beehives ("thùng kế"), featuring Sony IMX477 HQ camera with CS lens, edge processing unit, and diffuse lighting canopy.</figcaption>
</figure>

## Edge AI Vision: Real-Time Bee Counting with YOLOv5

To accurately monitor colony activity without disrupting natural worker bee behavior, an optimized **YOLOv5** deep learning model was trained to track and count individual bees entering and exiting the hive:

- **High Sensitivity:** Achieved a **97.0% sensitivity rate** in detecting rapidly moving worker bees under varying outdoor lighting conditions.
- **Minimal False Alarms:** Maintained an ultra-low **0.56% false alarm rate**, filtering out shadows, background flight board artifacts, and dense clustering.
- **Continuous Traffic Curves:** Provided entomologists with high-frequency activity curves distinguishing morning foraging bursts from evening return patterns.

<figure>
  <img src="/myself/images/projects/bee-monitoring/ai-yolov5-detection.png" alt="YOLOv5 Bee Counting Model Architecture and Detection Results" loading="lazy" />
  <figcaption><strong>Figure 3:</strong> YOLOv5 neural network architecture and real-time bounding box detection validating 97.0% sensitivity and 0.56% false alarm rate under intense entrance traffic.</figcaption>
</figure>

<figure>
  <img src="/myself/images/projects/bee-monitoring/live-stream-monitoring.png" alt="Real-time Stream and Bee Count Monitoring" loading="lazy" />
  <figcaption><strong>Figure 4:</strong> Real-time camera feed ingestion and automated entrance counting interface hosted on MICA Institute infrastructure.</figcaption>
</figure>

## Cloud Dashboard, Mobile App & Device Health Automation

To support field beekeepers and entomologists across distributed apiary sites, a multi-platform software ecosystem was built:

- **Central Web Management Platform:** Developed with a Python Flask backend and responsive interface (tested on MICA Institute infrastructure at `http://mica.edu.vn:50208/`) showing real-time bee traffic charts, temperature/humidity variations, and historical time-series analytics.
- **Cross-Platform Mobile Application:** Built using Google Flutter and Dart, allowing beekeepers to receive push alerts, monitor live counts, and review individual hive microclimates on Android and iOS devices.
- **Automated Hardware Watchdog:** Automated device diagnostics logging CPU core temperature, RAM usage, and camera stream status, with an automated 15-minute polling heartbeat that triggers alert notifications if a field node loses connectivity.

<figure>
  <img src="/myself/images/projects/bee-monitoring/web-dashboard.png" alt="Web Monitoring Platform Dashboard" loading="lazy" />
  <figcaption><strong>Figure 5:</strong> Central web dashboard displaying real-time bee traffic trends, temperature/humidity time-series curves, and hardware health metrics.</figcaption>
</figure>

<figure>
  <img src="/myself/images/projects/bee-monitoring/mobile-app.png" alt="Cross-Platform Flutter Mobile Application Interface" loading="lazy" />
  <figcaption><strong>Figure 6:</strong> Flutter cross-platform mobile application interface providing beekeepers with push alerts, live counting statistics, and remote hive diagnostics.</figcaption>
</figure>

## Practical Field Deployment & Long-Term Results

The system transitioned from laboratory prototypes into long-term agricultural operations across Vietnam:

- **4 Operational Field Installations:** 3 complete AIoT monitoring units deployed at commercial honeybee farms in **Đắk Lắk province**, and 1 reference unit installed at the **Center for Tropical Bee Research and Beekeeping** (VNUA, Gia Lâm, Hanoi).
- **4+ Months Continuous Operation:** Validated hardware durability, thermal stability, and sensor calibration across multi-month field operations during monsoon and peak harvest seasons.
- **Scientific & Practical Impact:** Demonstrated the feasibility of cost-effective edge computer vision and IoT telemetry in rural tropical agriculture, laying architectural foundations for subsequent environmental AIoT research.

<figure>
  <img src="/myself/images/projects/bee-monitoring/field-deployment.png" alt="Field Deployment in Dak Lak and VNUA Bee Research Center" loading="lazy" />
  <figcaption><strong>Figure 7:</strong> Long-term field trials across commercial apiaries in Đắk Lắk and the Center for Tropical Bee Research and Beekeeping (VNUA) verifying continuous 4+ months outdoor reliability.</figcaption>
</figure>

## Behind the Scenes: From Workbench Prototyping to Outdoor Apiaries

Building deployable edge AI for agricultural environments requires navigating physical constraints that cannot be simulated in software alone:

- **Benchtop Edge Synthesis:** The engineering journey began with perforated mounting plates, terminal wiring, and thermal testing on the lab workbench. The NVIDIA Jetson Nano core was integrated with active heatsink cooling to sustain continuous neural network inference, coupled with an industrial 4G/LTE cellular gateway and stabilized power conversion designed to withstand rural electrical fluctuations.
- **Non-Invasive Mechanical Co-Design:** To preserve the hive's internal microclimate and natural worker bee flight patterns, the optical sensor was retrofitted onto standard Vietnamese wooden multi-tier hives ("thùng kế") using an adjustable ball-head mount. This focused the camera directly onto the entrance flight board while protecting sensitive CSI ribbon cables along the outer perimeter.
- **Hands-On Field Realization:** Theoretical designs culminated in direct field trials at the Center for Tropical Bee Research and Beekeeping (VNUA). Working amidst active honeybee colonies and tropical weather, the system was hand-wired, optically calibrated, and stress-tested under harsh sunlight and humidity—bridging the gap between laboratory concepts and robust agricultural reality.

<figure>
  <img src="/myself/images/projects/bee-monitoring/lab-hardware-prototyping.jpg" alt="Benchtop prototyping of the edge AIoT computing board" loading="lazy" />
  <figcaption><strong>Figure 8:</strong> Benchtop integration of the NVIDIA Jetson Nano edge node, active heatsink cooling fan, 4G LTE communications gateway, CSI camera ribbon lines, and isolated power distribution.</figcaption>
</figure>

<figure>
  <img src="/myself/images/projects/bee-monitoring/hive-optical-integration.jpg" alt="Mechanical and optical integration on the wooden beehive" loading="lazy" />
  <figcaption><strong>Figure 9:</strong> Custom non-invasive optical mount attached to a standard wooden multi-tier hive ("thùng kế"), orienting the camera canopy toward the entrance flight board without altering colony traffic.</figcaption>
</figure>

<figure>
  <img src="/myself/images/projects/bee-monitoring/field-calibration-researcher.jpg" alt="Hands-on field installation and sensor calibration by the author" loading="lazy" />
  <figcaption><strong>Figure 10:</strong> Lead researcher Minh-Hoang Pham conducting hands-on sensor wiring, 4G telemetry checks, and optical alignment on hive #3 at the Tropical Bee Research Center apiary.</figcaption>
</figure>

## Project Video Demonstration

<div class="video-container" style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin: 2rem 0; border-radius: var(--radius, 8px);">
  <iframe src="https://www.youtube-nocookie.com/embed/96vREBGUFqM" title="Bee Monitoring AIoT System Demonstration" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>
