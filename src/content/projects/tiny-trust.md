---
title: Tiny Trust
description: Mapping side-channel risk in shared accelerators used by compact intelligent devices.
date: 2021-02-04
start: 2018-01
end: 2020-12
status: completed
featured: true
order: 3
cover: /images/projects/tiny-trust.svg
topics: [hardware-security, dependable-embedded-systems]
people: [elena-varga, lucas-reed]
publications: [tiny-trust-paper, field-bench]
relatedProjects: []
technologies: [FPGA, SystemVerilog, Side-channel analysis]
organizations: [Arcadia University Systems Lab]
code: https://github.com/example/tiny-trust
---

## Overview

Tiny Trust grew from an unexpected timing pattern in an accelerator benchmark. We traced it to contention between supposedly isolated workloads and asked what an observer could infer.

## Experiments and lessons

Across FPGA prototypes, we compared scheduling and partitioning defenses. Static partitioning was safest but costly; randomized scheduling offered a useful middle ground only when its entropy source was protected. The project taught us to treat anomalous measurements as questions, not merely noise to average away.
