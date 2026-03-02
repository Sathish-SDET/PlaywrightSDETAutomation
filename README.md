# Playwright SDET Automation Framework

This repository contains a scalable Playwright automation framework covering both API and UI testing with CI/CD integration.

---

## 🔧 Tech Stack

- Playwright (JavaScript)
- Node.js
- REST API Automation
- AJV (JSON Schema Validation)
- Jenkins Pipeline
- GitHub Actions

---

## 📌 Framework Highlights

### ✅ API Automation
- RESTful Booker & DummyJSON
- Token-based authentication handling
- Basic & Cookie authentication
- CRUD operations (Create, Get, Update, Delete)
- JSON Schema validation using AJV
- Serial execution for dependent test flows
- Response time assertions

### ✅ UI Automation
- Page Object Model (POM) structure
- Data-driven testing (Excel / test-data separation)
- Test tagging (@smoke / @regression)
- HTML report generation

---

## ⚙ CI/CD Integration

### GitHub Actions
- Automated API & UI test execution
- Playwright browser installation
- Report artifact publishing

### Jenkins (Windows Agent)
- Pipeline-based execution
- Playwright setup
- HTML report publishing

---

## 📂 Project Structure

```
├── tests/
│   ├── api/
│   └── ui/
├── utils/
├── schemas/
├── test-data/
├── playwright.config.js
├── Jenkinsfile
└── .github/workflows/
```

---

## ▶ How to Run Locally

Install dependencies:

```
npm install
```

Install Playwright browsers:

```
npx playwright install
```

Run API tests:

```
npm run api
```

Run UI tests:

```
npm run ui
```

---

## 🎯 Objective

The goal of this project is to demonstrate clean automation framework architecture with CI/CD readiness aligned to real-world SDET practices.