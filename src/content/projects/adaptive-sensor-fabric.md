---
title: Adaptive Sensor Fabric
description: A self-tuning edge platform that keeps environmental models useful as sensors, seasons, and power budgets change.
date: 2025-04-18
start: 2023-10
status: active
featured: true
order: 1
cover: /images/projects/adaptive-sensor-fabric.svg
topics: [efficient-edge-ai, dependable-embedded-systems]
people: [elena-varga, jon-bell]
publications: [sparsewake]
relatedProjects: [federated-field-notes]
technologies: [RISC-V, TinyML, Rust, LoRaWAN]
organizations: [Northbridge Institute of Technology, City Ecology Network]
code: https://github.com/example/adaptive-sensor-fabric
dataset: https://github.com/example/adaptive-sensor-fabric-data
---

## Overview

Environmental sensor networks rarely fail dramatically. Their batteries fade, calibration drifts, radio links become seasonal, and useful signals slowly disappear into noise. Adaptive Sensor Fabric began with a deceptively simple question: **can an edge system recognize that its world has changed and re-budget itself before its predictions stop being useful?**

## Why the problem matters

Ecologists need long, continuous records, yet replacing batteries and recollecting corrupted data is expensive. Conventional benchmarks assume stable power and tidy input distributions. A forest does neither.

## How the project started

During a rainy field visit, collaborator Jon Bell noticed that one enclosure was warmer than the air it measured. That mundane packaging flaw became the project’s central insight: computation, sensing, and physical context must be optimized together.

## My role and contributions

I framed the cross-layer research question, designed the runtime policy, and coordinated our hardware, ecology, and learning experiments. I also built the first measurement harness with two graduate researchers.

## Technical approach

The system combines a RISC-V sensing node, a sparse wake-word-style event model, and a runtime controller. The controller observes energy reserve, uncertainty, sensor agreement, and recent radio quality. It then chooses a sensing rate, model width, and transmission schedule from a verified set of operating points.

### System architecture

Raw signals pass through a low-power feature extractor. A compact classifier estimates both an event label and uncertainty. Only ambiguous or novel windows are retained for later federated updates.

## Experimental setup

We evaluated 24 nodes across indoor climate chambers and an eight-week outdoor pilot. Every run records power rails, radio retries, ambient conditions, predictions, and a synchronized reference sensor.

## Failed attempts

Our first reinforcement-learning controller looked excellent in simulation and behaved erratically in the field. Its reward encouraged long sleep periods that hid rare events. We replaced it with a constrained policy whose choices can be audited before deployment. The simpler system was also easier for our ecology partners to trust.

## Results

The prototype reduced median energy use by 38% relative to a fixed schedule while retaining 96% of reference-model event recall. More importantly, it surfaced calibration drift roughly two days before a fixed-threshold monitor.

## Lessons learned

Efficiency is not a scalar. An energy saving that removes the rare observation a collaborator cares about is not an optimization. Field instrumentation and shared definitions of failure now begin before model design.

## What comes next

We are extending the controller to mixed solar and battery power, documenting a deployment checklist, and planning a winter replication with an independent field team.
