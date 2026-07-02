---
layout: default
title: Connectomics
navbar_title: Connectomics
container_class: container-xl
---

<div class="connectomics-page" markdown="1">

<header class="connectomics-hero">
<div class="connectomics-kicker">Research View</div>
<h1>My Understanding of Connectomics</h1>
<p>
Connectomics is not only a way to map neural circuits. I see it as a large-scale AI problem: how to turn noisy volume microscopy into reliable, queryable graphs of neural connectivity through computer vision, machine learning, and data systems.
</p>
<div class="connectomics-tags">
<span>AI reconstruction</span>
<span>Vision for microscopy</span>
<span>Connectome-scale systems</span>
</div>
</header>

<div class="connectomics-essay" markdown="1">

<details class="connectomics-section" open markdown="1">
<summary>
<span class="connectomics-index">01</span>
<span class="connectomics-summary-text">
<strong>Connectomics as an AI reconstruction problem</strong>
<em>From raw volume images to synapse-level circuit graphs</em>
</span>
</summary>

Connectomics seeks to reconstruct the brain as a physical communication network at synaptic resolution.[^1] Recent progress is pushing synaptic-resolution connectomics toward larger nervous systems and connectome-scale screening.[^2] From an AI perspective, the central challenge is not simply drawing a biological map after the structure is already known. It is learning to recover a structured graph from massive, noisy, distorted, incomplete, and inconsistent microscopy observations. The prediction target is multi-level: aligned 3D image volumes, segmented neurons, synapse candidates, connectivity edges, and biological annotations that make the graph interpretable.[^3][^4] This makes connectomics a demanding computer vision problem where geometric consistency, topological correctness, uncertainty estimation, and biological plausibility all matter.

</details>

<details class="connectomics-section" open markdown="1">
<summary>
<span class="connectomics-index">02</span>
<span class="connectomics-summary-text">
<strong>Learning reliable structure from imperfect observations</strong>
<em>Models that preserve geometry, topology, and connectivity</em>
</span>
</summary>

For my research interests, connectomics is especially compelling because it turns visual reconstruction into a scientific reliability problem. Volume electron microscopy can contain section deformation, missing slices or regions, anisotropic resolution, staining variation, noise, and local conflicts between adjacent observations. AI methods must therefore do more than produce visually pleasing images. They need to recover 3D alignment, repair missing or damaged structure, infer synaptic connectivity, and preserve downstream graph correctness.[^9][^10] Self-supervised, weakly supervised, and uncertainty-aware learning are important because exhaustive expert labels are expensive. Machine learning-guided imaging can also close the acquisition loop by deciding where better measurements are most valuable.[^11] The goal is reliable structure under imperfect observation, not only perceptual restoration.

</details>

<details class="connectomics-section" open markdown="1">
<summary>
<span class="connectomics-index">03</span>
<span class="connectomics-summary-text">
<strong>AI systems for connectome-scale production</strong>
<em>Inference, proofreading, versioning, and scientific queries</em>
</span>
</summary>

At connectome scale, AI is an end-to-end system rather than a single model. Dense prediction, distributed inference, human-in-the-loop proofreading, versioned graph databases, scalable image storage, and fast query engines must work together to support reliable scientific analysis.[^12] This matters because structural graphs can ground hypotheses about network organization and brain disorders,[^5] and recent functional connectomics studies show the value of linking wiring diagrams with recordings and computation in cortical circuits.[^6][^7][^8] My AI-centered view is that connectomics needs methods that reduce reconstruction and proofreading cost, estimate confidence, maintain volumetric consistency, and make large biological image datasets usable as structured neural computation data.

</details>

</div>

[^1]: Bock, D. D. ["Synaptic connectomics: status and prospects."](https://www.nature.com/articles/s41583-025-00957-8) *Nature Reviews Neuroscience* (2025).
[^2]: Helmstaedter, M. ["Synaptic-resolution connectomics: towards large brains and connectomic screening."](https://www.nature.com/articles/s41583-025-00998-z) *Nature Reviews Neuroscience* (2026).
[^3]: Seguin, C., Sporns, O. & Zalesky, A. ["Brain network communication: concepts, models and applications."](https://www.nature.com/articles/s41583-023-00718-5) *Nature Reviews Neuroscience* (2023).
[^4]: Bazinet, V., Hansen, J. Y. & Misic, B. ["Towards a biologically annotated brain connectome."](https://www.nature.com/articles/s41583-023-00752-3) *Nature Reviews Neuroscience* (2023).
[^5]: Fornito, A., Zalesky, A. & Breakspear, M. ["The connectomics of brain disorders."](https://www.nature.com/articles/nrn3901) *Nature Reviews Neuroscience* (2015).
[^6]: The MICrONS Consortium. ["Functional connectomics spanning multiple areas of mouse visual cortex."](https://www.nature.com/articles/s41586-025-08790-w) *Nature* (2025).
[^7]: Ding, Z. et al. ["Functional connectomics reveals general wiring rule in mouse visual cortex."](https://www.nature.com/articles/s41586-025-08840-3) *Nature* (2025).
[^8]: Seung, H. S. ["Predicting visual function by interpreting a neuronal wiring diagram."](https://www.nature.com/articles/s41586-024-07953-5) *Nature* (2024).
[^9]: Lichtman, J. W., Pfister, H. & Shavit, N. ["The big data challenges of connectomics."](https://www.nature.com/articles/nn.3837) *Nature Neuroscience* (2014).
[^10]: Dorkenwald, S. et al. ["Automated synaptic connectivity inference for volume electron microscopy."](https://www.nature.com/articles/nmeth.4206) *Nature Methods* (2017).
[^11]: Meirovitch, Y. et al. ["SmartEM: machine learning-guided electron microscopy."](https://www.nature.com/articles/s41592-025-02929-3) *Nature Methods* (2026).
[^12]: Dorkenwald, S. et al. ["CAVE: Connectome Annotation Versioning Engine."](https://www.nature.com/articles/s41592-024-02426-z) *Nature Methods* (2025).

</div>
