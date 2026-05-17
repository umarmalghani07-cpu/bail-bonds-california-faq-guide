# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Planned
- San Diego County processing time guide
- Riverside and San Bernardino county-specific FAQ
- Spanish-language translation of master Q&A guide
- Interactive bail cost calculator

---

## [1.1.0] — 2026-05-17

### Added
- `index.html` — fully responsive landing page with animated hero section,
  guide cards with hover transitions, legal sources grid, and styled footer
- `styles.css` — CSS custom properties, mobile-first responsive breakpoints,
  page fade-in animation, and smooth hover transitions on all interactive elements
- `script.js` — scroll progress bar, scroll-to-top button, active nav
  link highlighting, and per-card read-time estimator
- `.github/workflows/deploy.yml` — GitHub Actions CI/CD pipeline that
  auto-deploys to GitHub Pages on every push to `main`
- `package.json` — project metadata with lint and build scripts
- GitHub Pages deployment enabled at
  `https://umarmalghani07-cpu.github.io/bail-bonds-california-faq-guide/`
- Repository topics: `bail-bonds`, `california`, `los-angeles`,
  `orange-county`, `legal`, `criminal-law`, `bail-bondsman`
- Wiki enabled for additional indexed content

### Changed
- `README.md` — added homepage URL to repository About section

---

## [1.0.0] — 2026-05-17

### Added
- `bail-bonds-qa-master.md` — master Q&A guide covering all 12 most-asked
  questions about bail bonds in California, including:
  - What is a bail bond and how does it work
  - Bail vs bond — the legal distinction
  - Step-by-step bail process from arrest to release
  - Costs, fees, and the 10% premium standard
  - Collateral requirements and accepted forms
  - Co-signer responsibilities and liability
  - Immigration bonds (delivery bond vs voluntary departure bond)
  - Online bail bond process
  - Release timelines by county and facility
  - Consequences of skipping bail (forfeiture, bench warrant, bounty hunters)
- `bail-bonds-qa-q4-weekend.md` — dedicated guide for weekend bail in
  California, covering:
  - The 3 weekend bail scenarios
  - How PC § 825's 48-hour arraignment rule applies on weekends
  - City-by-city booking and processing time differences
  - Los Angeles, Orange County, Anaheim, Culver City, Inglewood specifics
  - Step-by-step action plan for Friday night arrests
- `bail-bonds-qa-q5-self-bail.md` — complete breakdown of self-bail vs
  surety bonds in California, covering:
  - When cash bail makes financial sense
  - Property bond requirements and equity calculations
  - The In re Humphrey (2021) ability-to-pay ruling and its impact
  - Own Recognizance (OR) release eligibility
  - Step-by-step guide for each bail method
- `README.md` — repository index with guide summaries and full legal
  source reference table covering 9 authoritative sources

### Legal Sources Verified at Launch
- California Bail Schedule — Judicial Council of CA
- California Department of Insurance Bail Agent Consumer Guide
- U.S. Courts Legal Glossary
- ICE Detainee Locator
- California Penal Code §§ 825, 1275, 1289, 1305
- In re Humphrey (2021) — California Supreme Court
- Nolo Legal Encyclopedia — California bail and bond articles

---

[Unreleased]: https://github.com/umarmalghani07-cpu/bail-bonds-california-faq-guide/compare/v1.1.0...HEAD
[1.1.0]: https://github.com/umarmalghani07-cpu/bail-bonds-california-faq-guide/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/umarmalghani07-cpu/bail-bonds-california-faq-guide/releases/tag/v1.0.0
