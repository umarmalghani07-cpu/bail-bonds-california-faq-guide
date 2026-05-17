# Contributing to California Bail Bonds FAQ Guide

Thank you for helping improve this free public legal education resource.
All contributions are welcome — from fixing typos to adding new guides.

---

## Table of Contents

- [Code Style Guidelines](#code-style-guidelines)
- [How to Submit a Pull Request](#how-to-submit-a-pull-request)
- [Issue Reporting](#issue-reporting)
- [Content Standards](#content-standards)

---

## Code Style Guidelines

### Markdown Files

- Use ATX-style headings (`#`, `##`, `###`) — never underline-style
- One blank line before and after every heading
- Wrap lines at 100 characters where possible
- Use reference-style links for repeated URLs
- Always include alt text for images

### HTML / CSS / JavaScript

- 2-space indentation throughout
- CSS custom properties for all repeated values
- No inline styles — keep all styling in `styles.css`
- JavaScript: `'use strict'` at the top of every file
- No external JS libraries or CDN dependencies

### Legal Content

- Every factual claim must cite a primary source (statute, court opinion, or official agency)
- Link directly to the official government `.gov` or `.ca.gov` source
- Include the statute number when referencing California Penal Code sections
- Do not paraphrase legal definitions — quote or closely follow official language

---

## How to Submit a Pull Request

1. **Fork** the repository to your own GitHub account
2. **Clone** your fork locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/bail-bonds-california-faq-guide.git
   cd bail-bonds-california-faq-guide
   ```
3. **Create a branch** with a descriptive name:
   ```bash
   git checkout -b fix/update-penal-code-1305
   # or
   git checkout -b feature/add-san-diego-guide
   ```
4. **Make your changes** following the style guidelines above
5. **Commit** with a clear, present-tense message:
   ```bash
   git commit -m "Update PC §1305 bail forfeiture timeline to reflect 2025 amendment"
   ```
6. **Push** to your fork:
   ```bash
   git push origin your-branch-name
   ```
7. **Open a Pull Request** against the `main` branch of this repo
8. Fill out the PR template completely — PRs without a description will not be reviewed

### PR Review Criteria

- Legal accuracy: all claims are sourced to primary legal authority
- No new external dependencies introduced
- Mobile responsiveness is not broken (for HTML/CSS changes)
- Commit history is clean — squash fixup commits before submitting

---

## Issue Reporting

Use the issue templates provided in `.github/ISSUE_TEMPLATE/`:

- **Bug Report** — broken links, incorrect legal information, display issues
- **Feature Request** — new guides, additional counties, new FAQ topics

Before opening an issue:
- Search existing issues to avoid duplicates
- For urgent legal inaccuracies, mark the issue with the `legal-accuracy` label

### Good Issue Examples

> "Link to CA Penal Code § 1305 returns 404 — URL changed on leginfo.ca.gov"

> "Weekend bail guide does not mention San Bernardino County processing times"

### What Not to Report Here

- Requests for personal legal advice (contact a licensed attorney)
- Questions about specific bail amounts (contact a licensed bail agent)

---

## Content Standards

All content in this repository is written for **public legal education only**
and must not constitute legal advice. Every guide must include the disclaimer:

> *This content is written for informational purposes only and does not
> constitute legal advice. Consult a California State Bar licensed attorney
> for advice specific to your situation.*

### Jurisdictional Scope

This repository covers **California state law** and relevant **federal law**
(immigration bonds, federal bail statute). Do not add content for other states
without clearly labeling the jurisdiction.

### Source Hierarchy

1. California Penal Code (primary)
2. California Judicial Council publications
3. California Supreme Court opinions
4. California Department of Insurance guidance
5. Federal statutes and agency guidance (for immigration bonds)
6. Secondary sources (Nolo, ABA) — only to supplement, never as sole authority

---

*By contributing, you agree that your contributions will be licensed under
the MIT License that covers this project.*
