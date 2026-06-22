# vgp. | Valentín Garcia Pintos — Personal Portfolio

A super-minimalist, responsive, and high-performance personal portfolio website built with **React** and **Vite**. 

This portfolio is designed to showcase software engineering projects, technical expertise, and core skills under a clean light-grey (`#e5e5e5`) aesthetic with elegant typography.

---

## 🚀 Tech Stack

* **Frontend:** React (JavaScript)
* **Build Tool:** Vite
* **Styling:** Vanilla CSS (custom properties/variables, responsive flexbox & grids)
* **Icons:** Lucide React (lightweight SVG icons)
* **Favicon:** Custom hand-drawn minimalist line-art laptop SVG

---

## ✨ Features

* **Default Landing View:** Focuses directly on projects (**Work**) to hook visitors immediately.
* **Component-Based Navigation:** Smooth tab switching between **Work**, **About**, and **Contact** views.
* **Interactive Projects Grid:** Detailed cards for software projects showcasing:
  * Short description & tagline.
  * Bulleted key feature lists.
  * Tech stack tags.
  * Core skills demonstrated.
  * Direct source code action links.
* **Refined "About" Profile:** Detailed systems engineering background, technical tool list, core skills, and email call-to-actions.
* **Minimalist Contact Form:** Styled with bottom-only borders, input focus animations, client-side validation, and simulated submission feedback.
* **Clean Codebase:** Completely pruned of default boilerplate assets and unused template SVGs.

---

## 📁 Component Architecture

The project is structured modularly:
* `src/components/Header.jsx` — Logo signature (`vgp.`) and active view links.
* `src/components/WorkView.jsx` — Landing page with project showcases.
* `src/components/AboutView.jsx` — Biography, profile picture container, and skills/tools grids.
* `src/components/ContactForm.jsx` — Contact form inputs and Location details.
* `src/components/Footer.jsx` — Copyright watermark and active social links (GitHub & LinkedIn).
* `src/index.css` — Global styling rules and CSS variables.

