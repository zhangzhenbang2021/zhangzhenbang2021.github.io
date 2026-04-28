---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

**[Download CV as PDF]({{ site.baseurl }}/CV.pdf)**

Education
======
* **M.Sc. in Machine Learning**, Mohamed bin Zayed University of Artificial Intelligence (MBZUAI), Sept 2025 -- Present
  * GPA: 92/100

* **B.S. in Computer Science**, Shandong University, Sept 2021 -- June 2025
  * GPA: 86/100

Research Interests
======
Computational connectomics, Synaptic-resolution connectome reconstruction, Dense neuron segmentation and tracking, Machine learning for multimodal connectomics

Research Experience
======
* **Research Assistant**, MBZUAI and Shandong University, Oct. 2025 -- Present
  * Advisors: Prof. Renmin Han and Prof. Zhiqiang Xu
  * Location: Abu Dhabi, UAE / Qingdao, China
  * Conduct research on computational foundations for connectomics using volume electron microscopy, with a focus on 3D volumetric restoration, isotropic reconstruction, and large-scale circuit mapping.
  * Develop methods to recover high-fidelity 3D ultrastructure from anisotropic volume electron microscopy data, improving structural continuity and reconstruction quality for downstream neuron tracing and connectome analysis.
  * Investigate scalable neuron segmentation and tracking methods for dense connectome reconstruction and downstream neuronal circuit analysis.

* **Research Intern**, Mathematics and Interdisciplinary Science Center, Shandong University, Jul. 2023 -- Oct. 2025
  * Advisor: Prof. Renmin Han
  * Location: Qingdao, China
  * Conducted research on computational pipelines for serial-section volume electron microscopy, with emphasis on 3D registration, reconstruction fidelity, and scalability for connectomics datasets.
  * Developed a Gaussian filter-based 3D registration method for serial section electron microscopy, improving section alignment for downstream neuronal reconstruction; accepted by *AAAI 2025*.
  * Proposed an unsupervised trajectory-optimization framework based on Neural ODEs for 3D registration in serial section electron microscopy, improving structural consistency across sections; accepted by *NeurIPS 2025*.
  * Developed *vEMRec*, an end-to-end 3D reconstruction pipeline for volume electron microscopy, validated on three real-world datasets exceeding 1 TB, demonstrating improved ultrastructural recovery and processing efficiency for connectome-scale analysis; accepted by *Advanced Science*.

* **Research Intern**, Mathematics and Interdisciplinary Science Center, Shandong University, Jun. 2022 -- Jul. 2023
  * Advisor: Prof. Renmin Han
  * Location: Qingdao, China
  * Worked on computational stitching of ultra-high-resolution microscopy image sequences as a precursor to large-scale volume electron microscopy reconstruction.
  * Developed automatic stitching methods for large-scale volume electron microscopy datasets, improving continuity across sections and supporting downstream connectomics workflows.
  * Co-first-authored a paper on volume electron microscopy stitching published in *GigaScience*.

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

Skills
======
* **Programming Languages:** Python, C++, C, MATLAB, LaTeX
* **Languages:** Chinese (Native), English (Fluent, IELTS: 6.5)
