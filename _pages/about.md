---
permalink: /
title: "About Me"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

I am a first-year M.Sc. student in Machine Learning at [Mohamed bin Zayed University of Artificial Intelligence (MBZUAI)](https://www.mbzuai.ac.ae/), advised by Prof. [Zhiqiang Xu](https://scholar.google.com/citations?user=0R20iBMAAAAJ&hl=en). My research lies at the intersection of connectomics, computational neuroscience, and machine learning. I am currently working on 3D reconstruction, restoration, and dense neuron segmentation and tracking from large-scale volume electron microscopy data, with the goal of enabling synaptic-resolution connectome reconstruction and neuronal circuit analysis.

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

Connectomics aims to reconstruct the brain as a physical communication network at synaptic resolution.[^1][^2] Instead of treating neurons only as isolated cells or activity traces, it asks how individual neurons are wired together, which synapses transmit information between them, and how local circuits are embedded within larger brain-wide networks.[^2][^3] In this view, the brain is not only a collection of cells, molecular states, or activity patterns, but a densely connected circuit whose function is constrained by its physical wiring.[^3][^4] Advances in high-throughput volume electron microscopy and deep learning-based segmentation have made synapse-level circuit mapping increasingly feasible, while also revealing major remaining challenges in reconstruction, annotation, and interpretation.[^1][^5]

For neuroscience, connectomics matters because it makes explanations of brain function structurally grounded.[^2][^3] Neural activity, cell types, gene expression, and behavior become more interpretable when anchored to the question of **who connects to whom**.[^4][^6] A synapse-level connectome can turn biological observations into testable circuit mechanisms: how information flows through a network, which motifs support local computation, how different cell types interact, and how structural changes may contribute to disease.[^3][^6][^7] In this sense, connectomics is not simply about producing detailed maps; it is about providing circuit-level ground truth for understanding how neural computation is physically implemented.[^2][^8]

For AI and computing, connectomics sits at the intersection of large-scale machine learning, computer vision, distributed systems, databases, and collaborative scientific infrastructure.[^5][^9] Nanometer-resolution imaging can generate petascale data, but turning raw images into reliable circuit maps requires many computational areas to work together: **computer vision** for dense reconstruction, **self-supervised representation learning** for data-efficient annotation, **distributed inference** for processing massive volumes, **human-in-the-loop proofreading** for correcting biological graphs, **scalable storage** for managing image and graph data, **versioned databases** for tracking evolving reconstructions, **fast query systems** for scientific analysis, and **collaborative infrastructure** for shared work across teams.[^5][^9][^10] This is the interface I want to work on: building AI methods and computational systems that reduce reconstruction and proofreading costs, improve the reliability of connectomic data, and help transform raw biological images into maps of neural computation.[^5][^9]

</div>

[^1]: Bock, D. D. et al. "Synaptic connectomics: status and prospects." *Nature Reviews Neuroscience* (2025). https://www.nature.com/articles/s41583-025-00957-8
[^2]: Helmstaedter, M. "Synaptic-resolution connectomics: towards large brains and behaviour." *Nature Reviews Neuroscience* (2025). https://www.nature.com/articles/s41583-025-00998-z
[^3]: Seguin, C., Sporns, O. et al. "Brain network communication: concepts, models and applications." *Nature Reviews Neuroscience* (2023). https://www.nature.com/articles/s41583-023-00718-5
[^4]: Markello, R. D. et al. "Towards a biologically annotated brain connectome." *Nature Reviews Neuroscience* (2023). https://www.nature.com/articles/s41583-023-00752-3
[^5]: Dorkenwald, S. et al. "Multi-layered maps of neuropil with segmentation-guided contrastive learning." *Nature Methods* (2023). https://www.nature.com/articles/s41592-023-02059-8
[^6]: Fornito, A., Zalesky, A. & Breakspear, M. "The connectomics of brain disorders." *Nature Reviews Neuroscience* (2015). https://www.nature.com/articles/nrn3901
[^7]: Sporns, O. & Kötter, R. "Motifs in brain networks." *PLoS Biology* (2004). https://journals.plos.org/plosbiology/article?id=10.1371/journal.pbio.0020369
[^8]: Abbott, L. F. et al. "The Mind of a Mouse." *Cell* (2020). https://www.cell.com/cell/fulltext/S0092-8674(20)30789-X
[^9]: Dorkenwald, S. et al. "CAVE: Connectome Annotation Versioning Engine." *Nature Methods* (2024). https://www.nature.com/articles/s41592-024-02426-z
[^10]: Plaza, S. M. "Collaborative large-scale neuroscience." *Nature Methods* (2014). https://www.nature.com/articles/nmeth.3044
