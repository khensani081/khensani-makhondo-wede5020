# WEDE5020 POE Project — Web Development Portfolio

**Student Name:** Khensani Makhondo  
**Module Code:** WEDE5020  
**Project Phase:** Comprehensive Phase 2 & Phase 3 Technical Rollout  
**Live Deployment Link:** https://khensani-makhondo-wede5020.netlify.app

---

## 📋 Table of Contents
1. [Project Overview](#project-overview)
2. [Part 2: Visual & Structural Enhancements (Changelog)](#part-2-visual--structural-enhancements-changelog)
3. [Part 3: Interactive Functionality & SEO Enhancements (Changelog)](#part-3-interactive-functionality--seo-enhancements-changelog)
4. [File Structure Matrix](#file-structure-matrix)
5. [Validation & Testing Protocols](#validation-testing-protocols)

---

## 🔍 Project Overview
This project delivers a multi-page business service portal built strictly from scratch utilizing semantic web standards. It features fluid, modern layouts, client-side data validation engines, component state management via Vanilla JavaScript, and on-page optimization matching professional web development criteria.

---

## 🎨 Part 2: Visual & Structural Enhancements (Changelog)
Based on assessment metrics and design standards, the core presentation layers were updated:

* **Semantic Structure Implementations:**
    * Replaced generic layout containers with semantic landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, and `<footer>`) to maximize accessibility.
    * Constructed a unified sticky global navigation header matching index properties across all pages.
* **CSS Layout Architecture Restructuring:**
    * Implemented a global **CSS Reset** boundary (`*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }`) to erase vendor-specific margin deviations.
    * Migrated page layouts to a hybrid system using **CSS Flexbox** for flexible row elements (navigation header alignment, footer pinning) and **CSS Grid** (`grid-template-columns`) for standard column multi-card layout flows.
* **Typography & Fluid Scale:**
    * Adopted an exact type scale built entirely on **relative layout units (`rem` and `em`)** to guarantee clear reading hierarchies across any screen configuration.
* **Pseudo-class UI Interactivity:**
    * Mapped structural states (`:hover`, `:focus`, and active link navigation line borders) using CSS color animations to enhance navigational context.

---

## ⚡ Part 3: Interactive Functionality & SEO Enhancements (Changelog)
In this phase, interactive functionality, form constraints, and search visibility layers were introduced:

* **Interactive Components (Vanilla JavaScript):**
    * **Home/About Pages:** Created dynamic expansion boxes (`Read More Full Bio`) toggling viewport height and opacity.
    * **Services Page:** Designed an interactive, tab-switched information dashboard rendering service panels instantly without reloading the page.
    * **Gallery Page:** Embedded interactive filtering categorization toggles alongside an overlay **Lightbox Modal** window to view expanded images.
    * **Contact Page:** Integrated a smooth toggle-based FAQ accordion element.
* **Advanced Client-Side Form Constraint Logic:**
    * Configured separate execution criteria for the **General Contact Form** (`contact.html`) and the **Service Booking Form** (`book-now.html`) using specialized form selectors.
    * Wrote manual verification logic tracking empty input errors, character min-length rules, exact 10-digit telephone matches (`/^\d{10}$/`), and clean regex string tests for email formatting.
    * Blocked default browser actions (`preventDefault()`) to intercept raw data execution, instead printing inline feedback strings and form reset behaviors smoothly.
* **Search Engine Optimization (SEO Architectures):**
    * Configured unique `<title>` and `<meta name="description">` strings tailored specifically to the unique contents of each standalone web page.
    * **Root Placement Optimization:** Programmed a structural indexing catalog file (`sitemap.xml`) matching priority values alongside search bot boundary guidelines (`robots.txt`) saved directly in the project's root folder directory.

---

## 📁 File Structure Matrix
Verify that your repository matches the root-level architecture defined below to maintain deployment paths:

```text
📁 khensani-makhondo-wede5020/  <-- Root Directory Folder
│
├── 📄 index.html               # Home Component Hub
├── 📄 about.html               # Team & Biography Toggle Views
├── 📄 services.html            # Tabbed Service Matrix 
├── 📄 gallery.html             # Filterable Photo Grid & Lightbox
├── 📄 book-now.html            # Dedicated Service Booking Form
├── 📄 contact.html             # FAQ Accordion & General Message Form
│
├── 📄 robots.txt               # Bot Index Constraints (Root Placement)
├── 📄 sitemap.xml              # XML Crawler Map Index (Root Placement)
├── 📄 README.md                # Submission Changelog & Project Manifest
│
├── 📄 style.css                # Fluid CSS Reset, Grid Systems, & UI Themes
└── 📄 script.js                # Integrated JavaScript Interaction & Validations