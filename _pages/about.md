---
permalink: /
title: "Zhenbang Zhang"
description: "Zhenbang Zhang (Zhang Zhenbang, 张振邦) is an M.Sc. student in Machine Learning at MBZUAI working on computational connectomics and volume electron microscopy."
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

I am Zhenbang Zhang, a first-year M.Sc. student in Machine Learning at [Mohamed bin Zayed University of Artificial Intelligence (MBZUAI)](https://www.mbzuai.ac.ae/), advised by Prof. [Zhiqiang Xu](https://scholar.google.com/citations?user=0R20iBMAAAAJ&hl=en). My research lies at the intersection of connectomics, computational neuroscience, and machine learning. I am currently working on 3D reconstruction, restoration, and dense neuron segmentation and tracking from large-scale volume electron microscopy data, with the goal of enabling synaptic-resolution connectome reconstruction and neuronal circuit analysis.

## Research Interests

Computational connectomics, Synaptic-resolution connectome reconstruction, Dense neuron segmentation and tracking, Machine learning for multimodal connectomics

## News

- **May 2026** -- Paper *"3D Registration-Guided Deformable Residual Inpainting for ssEM Restoration"* accepted by ***Bioinformatics*** (First author)
- **May 2026** -- Paper *"Motion-Residual Conflict-Aware Time Reversal for Generative Inbetweening"* accepted by ***ICML 2026*** (First author)
- **Feb. 2026** — Paper *"vEMRec: High-Resolution Volume Electron Microscopy Reconstruction Based on Structure-Preserving and High-Fidelity 3D Alignment"* accepted by ***Advanced Science*** (First author)
- **Sep. 2025** — Paper *"Unsupervised Trajectory Optimization for 3D Registration in Serial Section Electron Microscopy using Neural ODEs"* accepted by ***NeurIPS 2025*** (First author)
- **Aug. 2025** — Started M.Sc. in Machine Learning at MBZUAI
- **Jun. 2025** — Graduated with a B.S. in Computer Science from Shandong University
- **Dec. 2024** — Paper *"A Gaussian Filter-Based 3D Registration Method for Series Section Electron Microscopy"* accepted by ***AAAI 2025*** (First author)
- **Oct. 2024** — Paper *"vEMstitch: an algorithm for fully automatic image stitching of volume electron microscopy"* published in ***GigaScience*** (Co-first, 3rd)

## Why connectomics?

<div class="connectomics-essay" markdown="1">

<details class="connectomics-section" open markdown="1">
<summary>Synapse-level maps of neural circuits</summary>

Connectomics aims to reconstruct the brain as a physical communication network at synaptic resolution.[^1] Recent reviews now frame synaptic-resolution connectomics as a route to larger brains and connectomic screening.[^2] Instead of treating neurons only as isolated cells or activity traces, it asks how individual neurons are wired together, which synapses transmit information between them, and how local circuits are embedded within larger brain-wide networks.[^3] In this view, the brain is not only a collection of cells, molecular states, or activity patterns, but a densely connected circuit whose function can be interpreted through biologically annotated structural graphs.[^4] Advances in high-throughput volume electron microscopy, automated reconstruction, and segmentation-guided representation learning have made synapse-level circuit mapping increasingly feasible, while also revealing major remaining challenges in reconstruction, annotation, and interpretation.[^6][^7] Community-scale efforts such as FlyWire and recent whole-brain Drosophila maps show that dense connectomes can become shared, analyzable resources rather than static images.[^8][^9][^10][^11]

</details>

<details class="connectomics-section" open markdown="1">
<summary>Circuit-level ground truth for neuroscience</summary>

For neuroscience, connectomics matters because it makes explanations of brain function structurally grounded, including in studies of how altered network organization may relate to brain disorders.[^5] Neural activity, cell types, gene expression, and behavior become more interpretable when structural graphs can be linked to functional recordings across cortical areas.[^12] A synapse-level connectome can turn biological observations into testable circuit mechanisms: how information flows through a network, how different cell types interact, and how wiring rules constrain computation.[^13] In this sense, connectomics is not simply about producing detailed maps; it is about providing circuit-level ground truth for understanding how neural computation is physically implemented, as recent Nature studies have begun to show by interpreting wiring diagrams to predict function.[^14]

</details>

<details class="connectomics-section" open markdown="1">
<summary>AI systems for scalable reconstruction</summary>

For AI and computing, connectomics sits at the intersection of large-scale machine learning, computer vision, distributed systems, databases, and collaborative scientific infrastructure. Nanometer-resolution imaging can generate petascale data, creating a fundamental big-data challenge for connectomics.[^16] Turning raw images into reliable circuit maps requires many computational areas to work together: **computer vision** for dense reconstruction and automated synaptic connectivity inference,[^17] **self-supervised representation learning** for data-efficient annotation, **machine learning-guided imaging** for efficient data acquisition,[^18] **distributed inference** for processing massive volumes, **human-in-the-loop proofreading** for correcting biological graphs, **scalable storage** for managing image and graph data, **versioned databases** for tracking evolving reconstructions, **fast query systems** for scientific analysis, and **collaborative infrastructure** for shared work across teams.[^15] This is the frontier that motivates my work: building AI methods and computational systems that reduce reconstruction and proofreading costs, improve the reliability of connectomic data, and help transform raw biological images into maps of neural computation.

</details>

</div>

[^1]: Bock, D. D. "Synaptic connectomics: status and prospects." *Nature Reviews Neuroscience* (2025). https://www.nature.com/articles/s41583-025-00957-8
[^2]: Helmstaedter, M. "Synaptic-resolution connectomics: towards large brains and connectomic screening." *Nature Reviews Neuroscience* (2026). https://www.nature.com/articles/s41583-025-00998-z
[^3]: Seguin, C., Sporns, O. & Zalesky, A. "Brain network communication: concepts, models and applications." *Nature Reviews Neuroscience* (2023). https://www.nature.com/articles/s41583-023-00718-5
[^4]: Bazinet, V., Hansen, J. Y. & Misic, B. "Towards a biologically annotated brain connectome." *Nature Reviews Neuroscience* (2023). https://www.nature.com/articles/s41583-023-00752-3
[^5]: Fornito, A., Zalesky, A. & Breakspear, M. "The connectomics of brain disorders." *Nature Reviews Neuroscience* (2015). https://www.nature.com/articles/nrn3901
[^6]: Dorkenwald, S. et al. "Multi-layered maps of neuropil with segmentation-guided contrastive learning." *Nature Methods* (2023). https://www.nature.com/articles/s41592-023-02059-8
[^7]: Januszewski, M. et al. "High-precision automated reconstruction of neurons with flood-filling networks." *Nature Methods* (2018). https://www.nature.com/articles/s41592-018-0049-4
[^8]: Dorkenwald, S. et al. "FlyWire: online community for whole-brain connectomics." *Nature Methods* (2022). https://www.nature.com/articles/s41592-021-01330-0
[^9]: Dorkenwald, S. et al. "Neuronal wiring diagram of an adult brain." *Nature* (2024). https://www.nature.com/articles/s41586-024-07558-y
[^10]: Schlegel, P. et al. "Whole-brain annotation and multi-connectome cell typing of Drosophila." *Nature* (2024). https://www.nature.com/articles/s41586-024-07686-5
[^11]: Lin, A. et al. "Network statistics of the whole-brain connectome of Drosophila." *Nature* (2024). https://www.nature.com/articles/s41586-024-07968-y
[^12]: The MICrONS Consortium. "Functional connectomics spanning multiple areas of mouse visual cortex." *Nature* (2025). https://www.nature.com/articles/s41586-025-08790-w
[^13]: Ding, Z. et al. "Functional connectomics reveals general wiring rule in mouse visual cortex." *Nature* (2025). https://www.nature.com/articles/s41586-025-08840-3
[^14]: Seung, H. S. "Predicting visual function by interpreting a neuronal wiring diagram." *Nature* (2024). https://www.nature.com/articles/s41586-024-07953-5
[^15]: Dorkenwald, S. et al. "CAVE: Connectome Annotation Versioning Engine." *Nature Methods* (2025). https://www.nature.com/articles/s41592-024-02426-z
[^16]: Lichtman, J. W., Pfister, H. & Shavit, N. "The big data challenges of connectomics." *Nature Neuroscience* (2014). https://www.nature.com/articles/nn.3837
[^17]: Dorkenwald, S. et al. "Automated synaptic connectivity inference for volume electron microscopy." *Nature Methods* (2017). https://www.nature.com/articles/nmeth.4206
[^18]: Meirovitch, Y. et al. "SmartEM: machine learning-guided electron microscopy." *Nature Methods* (2026). https://www.nature.com/articles/s41592-025-02929-3
