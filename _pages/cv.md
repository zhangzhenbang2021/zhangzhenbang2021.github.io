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
  * GPA: 3.78/4.0

* **B.S. in Computer Science**, Shandong University, Sept 2021 -- June 2025
  * GPA: 3.52/4.0

Research Interests
======
Computational connectomics, Synaptic-resolution connectome reconstruction, Dense neuron segmentation and tracking, Machine learning for multimodal connectomics

Research Experience
======
* **Research Assistant**, MBZUAI, Advisors: Prof. Zhiqiang Xu, Oct. 2025 -- Present
  * Location: Abu Dhabi, UAE
  * Lead research on computational connectomics from volume electron microscopy, focusing on isotropic reconstruction, volumetric restoration, and dense neuronal reconstruction for synaptic-resolution circuit mapping.
  * Develop methods to recover high-fidelity 3D ultrastructure from anisotropic volume electron microscopy data, improving structural continuity and reconstruction quality for downstream neuron tracing and connectome analysis.
  * Build scalable neuron segmentation and tracking pipelines for dense connectome reconstruction and neuronal circuit analysis in large-scale datasets.

* **Research Intern**, Mathematics and Interdisciplinary Science Center, Shandong University, Advisor: Prof. Renmin Han, Jul. 2023 -- Oct. 2025
  * Location: Qingdao, China
  * Designed computational pipelines for serial-section volume electron microscopy with emphasis on 3D registration accuracy, ultrastructural fidelity, and scalability for connectomics datasets.
  * Developed a Gaussian filter-based 3D registration method that departed from conventional registration paradigms, introducing a new perspective for serial-section electron microscopy alignment and achieving more than 20% improvement in accuracy; first-author paper accepted to *AAAI 2025*.
  * Proposed an unsupervised trajectory-optimization framework based on Neural ODEs, extending and consolidating our earlier work while establishing a new registration paradigm that improves cross-section structural consistency in serial-section electron microscopy; first-author paper accepted to *NeurIPS 2025*.
  * Developed *vEMRec*, an end-to-end 3D alignment pipeline for volume electron microscopy, validated on six real-world datasets exceeding 1 TB, demonstrating strong applicability in large-scale realistic settings through improved ultrastructural recovery and processing efficiency for connectome-scale analysis; first-author paper accepted to *Advanced Science*.

* **Research Intern**, Mathematics and Interdisciplinary Science Center, Shandong University, Advisor: Prof. Renmin Han, Jun. 2022 -- Jul. 2023
  * Location: Qingdao, China
  * Developed automatic stitching methods for ultra-high-resolution volume electron microscopy image sequences, supporting large-scale 3D reconstruction and downstream connectomics workflows.
  * Co-first-authored *vEMstitch*, a fully automatic stitching method for volume electron microscopy, published in *GigaScience 2024*.

Teaching Experience
======
* **Teaching Assistant, Linear Algebra**, Shandong University, 2023 -- 2024
  * Location: Qingdao, China
  * Supported undergraduate instruction in linear algebra through problem-solving sessions, office hours, and assignment grading.
  * Strengthened scientific communication and mentoring skills through one-on-one support.

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

Skills
======
* **Programming Languages:** Python, C++, C, MATLAB, LaTeX
* **Languages:** Chinese (Native), English (Fluent, IELTS: 6.5)
