<div align="center">

# SUMIT PANCHAL | SENIOR QUALITY ANALYST & QA ENGINEER

### A cinematic, responsive portfolio presenting 5+ years of software quality assurance experience, manual testing expertise, project case studies, and professional credentials.

[![Portfolio](https://img.shields.io/badge/Portfolio-Sumit%20Panchal-e5132b?style=for-the-badge&logo=vercel&logoColor=white)](#-deployment)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES%20Modules-f7df1e?style=flat-square&logo=javascript&logoColor=111)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Node.js](https://img.shields.io/badge/Node.js-Static%20Build-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![CSS Motion](https://img.shields.io/badge/CSS-Motion-e5132b?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations)
[![Responsive](https://img.shields.io/badge/Responsive-Desktop%20%7C%20Mobile-20232a?style=flat-square)](#-portfolio-highlights)

**Designed, developed, and maintained by <span style="color: #2563EB;"><strong>Sumit Panchal</strong></span>.**

[Overview](#-overview) · [Features](#-portfolio-highlights) · [QA Focus](#-manual-qa-focus) · [Projects](#-project-case-studies) · [Technology](#-technology-stack) · [Setup](#-getting-started) · [Structure](#-project-structure) · [Deployment](#-deployment) · [Ownership](#-authorship--ownership)

</div>

---

## 🎯 Overview

This is my personal **Senior Quality Analyst | QA Engineer portfolio**, built to present my professional journey, testing expertise, project case studies, education, certifications, and resume in a cinematic and interactive web experience.

I have 5+ years of experience in software quality assurance, testing web and mobile applications, and supporting reliable software releases. My work focuses on functional quality, usability, risk identification, clear defect reporting, and validating important user journeys.

The portfolio uses a dark visual identity with restrained red accents, expressive typography, a portrait-led hero section, motion-based transitions, interactive project case studies, credential previews, and a dedicated contact experience.

> **Testing that protects. Quality that builds confidence.**

## ✨ Portfolio Highlights

| Area | What it provides |
|---|---|
| Hero section | Animated portfolio introduction, professional title, portrait, and featured-work actions |
| About | Professional summary, QA approach, and testing interests |
| Selected work | Eight QA project case studies with category filters and search |
| Project detail pages | Dedicated full-page case studies with banner, role, domain, overview, testing coverage, image gallery, contributions, and workflows |
| Professional journey | Education and professional experience timeline |
| Credentials | Certificate records with working image previews and links that open the full image in a new tab |
| Contact | Email, LinkedIn, and GitHub contact links |
| Motion preferences | Motion toggle with reduced-motion support |
| Responsive design | Desktop, tablet, and mobile layouts |
| Visual details | Hero and portrait entrance animations, scroll reveals, hover transitions, and subtle red cursor particles on pointer devices |

## 🧪 Manual QA Focus

My professional experience and portfolio highlight the following areas of software quality assurance.

### Manual Testing

- Functional Testing
- Regression Testing
- Smoke Testing
- Sanity Testing
- Exploratory Testing
- Black-Box Testing
- Retesting and Verification
- Web and Mobile Application Testing
- End-to-End Workflow Validation
- Usability and Compatibility Testing
- Risk-Based Testing

### Test Design and Documentation

- Requirement Analysis
- Test Planning
- Test Scenario Design
- Test Case Design
- Test Data Preparation
- Requirement Traceability
- Test Execution and Result Documentation
- Positive and Negative Test Scenarios
- Boundary and Edge Case Validation

### Defect Management

- Bug Identification and Reporting
- Defect Reproduction and Documentation
- Defect Lifecycle Management
- Severity and Priority Assessment
- Retesting and Regression Verification
- Clear Reproduction Steps and Evidence
- Defect Tracking and Follow-up using Jira

### QA Delivery Practices

- Risk-Based Testing
- Critical User Journey Validation
- Cross-Platform Testing
- Release-Focused Validation
- Requirement Clarification
- SDLC and STLC
- Agile Methodologies
- Developer and Project Manager Collaboration
- Continuous Quality Improvement

## 🗂️ Project Case Studies

The portfolio includes eight project case studies from different application domains. Each project detail page presents its available project overview, role, platforms, testing coverage, visual references, QA contributions, and key user workflows.

| Project | Domain / Application |
|---|---|
| **LYMÜV** | Taxi Booking Application |
| **Dap Me** | Professional Networking Application |
| **Kinzwin** | Multiplayer Gaming Platform |
| **Bunny Books** | Photo Book E-Commerce Application |
| **Health-E** | Digital Health & Medical Records Application |
| **reGive** | Community Sharing & Gift Transaction Application |
| **ShopZone** | E-Commerce Web Application |
| **Playwright** | E-Commerce End-to-End Test Automation |

### Project Detail Navigation

- Select a project card to open its dedicated project detail page.
- Project details are represented through the `project` URL query parameter.
- Use the **Back** control, browser Back, or the portfolio link to return to the main portfolio.
- Project banner and gallery images have a hover/focus arrow that opens the full-size image in a separate browser tab.
- Project images and content are maintained in `src/app.js` and `public/assets/project/`.

Project descriptions and testing details are presented as portfolio case-study material. They should not be interpreted as independently audited product specifications or claims about production ownership of the referenced applications.

## 🧰 Technology Stack

### Frontend

- **HTML5** - Semantic page structure.
- **JavaScript (ES Modules)** - Portfolio rendering, project navigation, filters, and interactions.
- **CSS3** - Responsive layouts, design system, typography, and visual effects.
- **Intersection Observer** - Scroll-triggered reveal effects.
- **CSS Animations** - Hero, portrait, project banner, and hover transitions.

### Interaction and Experience

- **URL Query Parameters** - Dedicated project detail views and shareable project URLs.
- **Browser History API** - Back/forward navigation synchronization.
- **Local Storage** - Persisted motion preference.
- **CSS Media Queries** - Responsive layouts, touch-device behavior, and reduced-motion handling.
- **Google Fonts** - Anton, Caveat, and Manrope typography.

### Contact

- **mailto links** - Open the visitor's configured email application.
- **LinkedIn and GitHub** - Direct professional profile links.

### Build and Deployment

- **Node.js** - Local development server and static build scripts.
- **npm** - Project scripts.
- **Vercel** - Recommended static-site hosting target.

## 📁 Project Structure

```text
Sumit_Panchal_Quality_Analyst_QA_Engineer/
├── public/
│   └── assets/
│       ├── certificates/          # Certificate preview images
│       ├── project/               # Project banners and gallery images
│       └── resume/                 # Downloadable resume
├── src/
│   ├── app.js                     # Portfolio, project pages, navigation and interactions
│   └── styles.css                 # Responsive styling, animations and cursor effects
├── index.html                     # Browser title and SEO metadata
├── package.json
├── package-lock.json
├── server.mjs                     # Local development server
├── build.mjs                      # Static production build
├── .gitignore
└── README.md
```

## ⚙️ Getting Started

### Prerequisites

- **Node.js:** Use a current supported Node.js LTS release.
- **npm:** Included with Node.js.
- **Git:** Required to publish the repository to GitHub.

### 1. Clone the repository

```bash
git clone https://github.com/lifeofthecoders/Sumit_Panchal_Quality_Analyst_QA_Engineer.git
cd Sumit_Panchal_Quality_Analyst_QA_Engineer
```

### 2. Install dependencies

```bash
npm install
```

The portfolio uses native browser JavaScript and does not require a frontend framework dependency.

### 3. Start the development server

```bash
npm run dev
```

Open the local URL:

```text
http://localhost:5173/
```

### 4. Build and preview

```bash
npm run build
npm run preview
```

The production website is generated in the `dist/` directory.

### Available Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Start the local development server on port 5173 |
| `npm run build` | Create the static production bundle in `dist/` |
| `npm run preview` | Serve the production build locally |

## 🔎 Project Navigation

Project details are presented as dedicated pages rather than in-page popups. The selected project is represented in the URL query string.

Examples:

```text
/?project=lymuv
/?project=dap-me
/?project=playwright-e2e
```

- Selecting a project opens its dedicated detail page.
- The **Back** control returns to the portfolio.
- Browser Back and Forward navigation synchronize with the selected project.
- Project detail pages include the banner, overview, role, domain, platforms, testing coverage, visual references, QA contributions, and key user workflows.
- Project banner and gallery screenshots open in a separate browser tab using the arrow control.

## 🚀 Deployment

The project builds a static frontend website into `dist/`.

### Deploying to Vercel

1. Create a new GitHub repository named `Sumit_Panchal_Quality_Analyst_QA_Engineer`.
2. Push the portfolio source code to that repository.
3. Sign in to [Vercel](https://vercel.com/) and import the GitHub repository.
4. Choose **Other** as the framework preset if Vercel does not detect the static project automatically.
5. Set the build command to `npm run build`.
6. Set the output directory to `dist`.
7. Deploy the project.
8. Open the deployed URL and verify the home page, project detail URLs, certificate images, project galleries, resume, and contact links.

No backend environment variables are required for the current static portfolio.

### Deploying to GitHub Pages with GitHub Actions

This repository includes `.github/workflows/deploy.yml`. Every push to `main` builds the static site and deploys the generated `dist/` folder.

1. Open the repository **Settings → Pages**.
2. Under **Build and deployment**, choose **GitHub Actions** as the source.
3. Push the project files to the `main` branch.
4. Open the **Actions** tab and wait for **Deploy portfolio to GitHub Pages** to complete successfully.
5. Your site will be available at:

   `https://lifeofthecoders.github.io/Sumit_Panchal_Quality_Analyst_QA_Engineer/`

The build uses the repository subpath for GitHub Pages assets. For local preview, run `npm run dev`. For production verification, run `npm run build:pages` and open the generated `dist/index.html` through a local static server.

### Deploying to Vercel

The site remains compatible with Vercel. Import the repository, use `npm run build`, and set `dist` as the output directory.

## 🧭 Main Code Reference

| Area | Main File |
|---|---|
| Portfolio composition and interactions | `src/app.js` |
| Project data and visual references | `src/app.js` and `public/assets/project/` |
| Dedicated project detail page | `src/app.js` (`openProject`) |
| Certificate links and previews | `src/app.js` and `public/assets/certificates/` |
| Hero, responsive layouts, and animations | `src/styles.css` |
| Browser title and metadata | `index.html` |
| Static production build | `build.mjs` |
| Local development server | `server.mjs` |

## ♿ Accessibility and Performance

- Project and credential images use lazy loading where appropriate.
- Project detail pages have a visible Back control and browser history support.
- Project banner and gallery image links are keyboard focusable.
- Certificate images open directly in a separate browser tab.
- Responsive CSS supports desktop, tablet, and mobile screens.
- Reduced-motion preferences are respected by the animation layer.
- The custom cursor and red particle effect are disabled on touch devices and when reduced motion is requested.

## 🔐 Privacy and Security

- The portfolio is a static frontend application; it does not include a database, user account system, or private server API.
- Contact links open the visitor's configured email application or professional profile.
- Do not add private credentials, access tokens, or personal secrets to frontend source files.
- Review public contact details and third-party links before publishing the repository.
- Keep private configuration and local environment files out of Git.
- Review third-party font and media licenses before redistribution.

## 🧑‍💻 Authorship & Ownership

This is my personal **Senior Quality Analyst | QA Engineer portfolio**, designed and developed by **Sumit Panchal** to present my professional profile, 5+ years of experience, software testing expertise, project case studies, education, certifications, and resume.

The portfolio source code, page composition, custom styling, project navigation, responsive presentation, animations, and project-specific implementation are maintained as my personal portfolio project. The QA content reflects my professional background, testing approach, and experience represented in the portfolio.

Names, logos, trademarks, and product visuals appearing within individual case studies are used to identify the referenced applications and do not imply that I own those third-party products.

Google Fonts and other third-party services and media remain the property of their respective authors and are governed by their own terms and licenses.

## 📜 License

The custom portfolio source and design implementation are maintained by **Sumit Panchal**. Unless a separate license is included with a specific asset or dependency, permission is not granted to reproduce or redistribute the custom portfolio implementation as someone else's work. Third-party fonts and media remain subject to their respective license terms.

## 📫 Connect With Me

If you'd like to connect, collaborate, or discuss Quality Assurance and software testing, feel free to reach out.

**Sumit Panchal**  
**Senior Quality Analyst | QA Engineer | Software Testing | 5+ Years Experience**

📍 **Location:** Ahmedabad, Gujarat, India

🌐 **Portfolio:** Add your deployed Vercel URL here after deployment.

💻 **GitHub:** [https://github.com/lifeofthecoders](https://github.com/lifeofthecoders)

📧 **Email:** sumitpanchal5225@gmail.com

🔗 **LinkedIn:** [linkedin.com/in/sumit-panchal-b790a8236](https://www.linkedin.com/in/sumit-panchal-b790a8236/)

## ⭐ Support

If you found this portfolio useful, please consider giving the repository a ⭐ star. Your support and feedback are greatly appreciated and help encourage continuous improvement.

<div align="center">

**QUALITY IS MY COMMITMENT.  
RELIABILITY IS MY STANDARD.**

Thank you for visiting my portfolio!

---

**Designed and developed by Sumit Panchal.**

**PRECISION. QUALITY. TRUST. DELIVERED.**

© 2026 Sumit Panchal. All rights reserved for the custom portfolio implementation, subject to the notices above.

</div>
