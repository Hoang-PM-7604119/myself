# Homepage Skeleton

Use this file as a plain-language draft of the homepage. After editing the text here, copy the final content into the matching YAML, Astro, or Markdown files noted under each section.

## 1. Hero

Source files:
- `src/data/profile.yaml`
- `src/components/Hero.astro`

Name:
Minh-Hoang Pham

Role:
Research Assistant and Technical Lead

Institution:
VinUniversity

Location:
Hanoi, Vietnam

Main headline:
Field AIoT systems, from sensors to intelligence.

Short statement:
I build deployable AIoT systems for environmental monitoring, computer vision, and intelligent sensing in real field conditions.

Core stack labels:
- Embedded nodes
- Computer vision
- Edge AI
- Cloud infrastructure

Primary links:
- View systems
- Publications
- Academic CV

Social links:
- Email
- GitHub
- Google Scholar
- LinkedIn

## 2. Research And Engineering Focus

Source file:
- `src/data/research.yaml`

Section intro:
My work sits where academic questions become deployed systems: sensing hardware, AI models, backend infrastructure, and field operations have to be designed together.

Research themes:

### AIoT Environmental Monitoring

Summary:
Designing sensing platforms that connect edge devices, communications, backend services, and deployment workflows for long-running field research.

### Computer Vision Systems

Summary:
Building inspection and monitoring pipelines for OLED defect detection, underwater imagery, bee counting, and camera-fouling analysis.

### Edge AI And Embedded Systems

Summary:
Bringing PyTorch models, ESP32 and Raspberry Pi devices, MQTT pipelines, and field-ready system architecture into one deployable stack.

### Intelligent Sensing Platforms

Summary:
Combining water-quality sensing, bioacoustics, underwater imaging, and cloud data infrastructure for biodiversity and aquaculture research.

## 3. Featured Projects

Source folder:
- `src/content/projects/`

### Project 1

Title:
Marine Biodiversity Conservation and Smart Aquaculture Platforms

Description:
Field-deployable AIoT platforms combining underwater imaging, bioacoustics, water-quality sensing, servers, and deployment infrastructure.

Timeline:
2025-02 to present

Status:
active

Technologies:
- Python
- PyTorch
- Computer Vision
- MQTT
- PostgreSQL
- MinIO
- Docker

Organizations:
- VinUniversity
- VINIF

### Project 2

Title:
Can Gio Mangrove Forest Conservation IoT System

Description:
Remote sensing infrastructure for long-term mangrove monitoring in harsh environmental conditions.

Timeline:
2026-01 to present

Status:
active

Technologies:
- ESP32
- Raspberry Pi
- MQTT
- Linux
- Docker
- VPN Systems

### Project 3

Title:
Bee Monitoring AIoT System

Description:
An AIoT platform for hive monitoring, bee counting, environmental sensing, and research data workflows.

Timeline:
2023-01 to 2024-09

Status:
completed

Technologies:
- Python
- Computer Vision
- ESP32
- MQTT
- Backend Services

## 4. Selected Publications

Source folder:
- `src/content/publications/`

### Publication 1

Title:
Secure Multiuser Communications with Stacked Intelligent Metasurfaces using Quantum Reinforcement Learning

Authors:
L.H. Hoang, M.H. Pham, Q.T. Luu, V.D. Nguyen

Venue:
ATC 2025

Year:
2025

Status:
published

Summary:
Applying reinforcement-learning methods to secure communications with intelligent metasurface systems.

### Publication 2

Title:
Adaptive Task Scheduling under Hard Deadlines in Edge Environments Using Deep Reinforcement Learning

Authors:
N.H. Nguyen, N. Van Thieu, M.H. Pham, V.D. Nguyen

Venue:
ITC-CSCC 2025

Year:
2025

Status:
published

Summary:
Scheduling edge workloads with reinforcement learning while respecting hard deadline constraints.

### Publication 3

Title:
CleanCam: A Benchmark Dataset for Underwater Camera Viewport Fouling Severity in Aquaculture

Authors:
K. Nguyen, M.H. Pham

Venue:
SSRN Preprint

Year:
2025

Status:
preprint

Summary:
A computer-vision benchmark for evaluating underwater camera fouling in aquaculture monitoring.

## 5. Academic And Technical Journey

Source file:
- `src/data/experience.yaml`

### Current Role

Role:
Research Assistant and Technical Lead

Organization:
VinUniversity

Dates:
2025-02 to present

Summary:
Coordinates environmental-monitoring AIoT projects funded by VINIF, leading student and RA teams across embedded devices, backend services, sensing infrastructure, and deployment systems.

### Industry Role

Role:
Engineer I

Organization:
Samsung Display Vietnam

Dates:
2024-07 to 2025-02

Summary:
Developed computer-vision solutions for OLED defect inspection and integrated deep-learning models into real-time manufacturing pipelines.

### Education And Early Research

Role:
Student Researcher

Organization:
Hanoi University of Science and Technology

Dates:
2020-07 to 2024-09

Summary:
Studied electronic and telecommunication engineering with research affiliations at AICS Laboratory and MICA Institute, contributing to AIoT and intelligent sensing work.

## 6. Contact Call To Action

Source files:
- `src/components/ContactCTA.astro`
- `src/pages/contact.astro`

CTA text:
Open to research collaboration on AIoT, sensing platforms, and edge intelligence.

Primary contact:
hoangpmh2406@email.com

Other links:
- GitHub
- Google Scholar
- LinkedIn

## 7. Notes For Future Edits

When changing short profile facts, edit:
- `src/data/profile.yaml`
- `src/data/social.yaml`

When changing research themes, edit:
- `src/data/research.yaml`

When adding or changing projects, edit:
- `src/content/projects/`

When adding or changing publications, edit:
- `src/content/publications/`

When changing jobs, education, or research experience, edit:
- `src/data/experience.yaml`
- `src/data/education.yaml`

When changing the homepage layout or wording around sections, edit:
- `src/components/Hero.astro`
- `src/components/Research.astro`
- `src/components/FeaturedProjects.astro`
- `src/components/SelectedPublications.astro`
- `src/components/Timeline.astro`
- `src/components/ContactCTA.astro`
