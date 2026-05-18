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
  * GPA: 3.73/4.00

* **B.S. in Computer Science**, Shandong University, Sept 2021 -- June 2025
  * GPA: 3.52/4.0

Research Interests
======
Computational connectomics, Synaptic-resolution connectome reconstruction, Dense neuron segmentation and tracking, Machine learning for multimodal connectomics

Research Experience
======
* **Research Assistant**, MBZUAI, Advisors: Prof. Zhiqiang Xu, Oct. 2025 -- Present
  * Location: Abu Dhabi, UAE
  * Develop methods for isotropic reconstruction, image restoration, and automatic proofreading in volume EM connectomics, improving 3D volume quality and reconstruction reliability for synaptic-resolution circuit mapping.
  * Work on scalable connectome reconstruction systems that reduce manual proofreading burden and improve analysis-ready dataset quality, resulting in **first-author papers at ICML 2026 and Bioinformatics**.

* **Research Intern**, Mathematics and Interdisciplinary Science Center, Shandong University, Advisor: Prof. Renmin Han, Jul. 2023 -- Oct. 2025
  * Location: Qingdao, China
  * Built computational pipelines for serial-section volume electron microscopy, focusing on 3D registration accuracy, ultrastructural fidelity, and scalability for connectomics datasets.
  * Developed a Gaussian filter-based 3D registration method for serial-section EM alignment, achieving more than 20% accuracy improvement; first-author paper accepted to **AAAI 2025**.
  * Proposed a Neural ODE-based trajectory-optimization framework for 3D registration, improving cross-section structural consistency; first-author paper accepted to **NeurIPS 2025**.
  * Developed ***vEMRec***, an end-to-end 3D alignment pipeline validated on six real-world datasets exceeding 1 TB; first-author paper accepted to **Advanced Science**.

* **Research Intern**, Mathematics and Interdisciplinary Science Center, Shandong University, Advisor: Prof. Renmin Han, Jun. 2022 -- Jul. 2023
  * Location: Qingdao, China
  * Developed automatic stitching methods for ultra-high-resolution volume EM image sequences, supporting large-scale 3D reconstruction and downstream connectomics workflows.
  * Co-first-authored ***vEMstitch***, a fully automatic stitching method for volume EM, published in **GigaScience 2024**.

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
