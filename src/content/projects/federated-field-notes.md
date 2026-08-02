---
title: Federated Field Notes
description: Learning across unequal field devices without pretending their data, batteries, or network access are identical.
date: 2024-09-10
start: 2021-03
end: 2024-08
status: completed
featured: true
order: 2
cover: /images/projects/federated-field-notes.svg
topics: [privacy-federated-learning, efficient-edge-ai]
people: [amina-okafor, jon-bell]
publications: [fedtempo]
relatedProjects: [adaptive-sensor-fabric]
technologies: [Federated Learning, PyTorch, Zephyr]
organizations: [Lumen Research Labs]
code: https://github.com/example/fedtempo
dataset: https://github.com/example/fedtempo-benchmark
---

## Overview

Federated Field Notes studies what happens when collaborative learning leaves the data center. It replaces the convenient fiction of identical clients with measured device constraints and intermittent participation.

## The people behind the benchmark

Amina Okafor helped us turn frustrating deployment logs into a workload model. Jon Bell challenged our assumption that every missing update was a network failure; sometimes a device was correctly prioritizing its sensing mission.

## Approach and outcome

We created a deadline-aware aggregation method and an open trace suite derived from a twelve-device deployment. FedTempo improved worst-site accuracy while reducing forced device wakeups. The lasting outcome was a vocabulary for discussing fairness to both people and hardware.

## What we would change

We would involve domain partners earlier when defining acceptable staleness. The mathematically clean window was not always the scientifically meaningful one.
