PLAYWRIGHT SDET AUTOMATION FRAMEWORK
    This repository contains a scalable Playwright automation framework covering both API and UI testing with CI/CD integration.

🔧 TECH STACK
    • Playwright (JavaScript)
    • Node.js
    • REST API Automation
    • AJV (JSON Schema Validation)
    • Jenkins Pipeline
    • GitHub Actions

📌 FRAMEWORK HIGHLIGHTS
    ✅ API Automation
    • RESTful Booker & DummyJSON
    • Token-based authentication handling
    • Basic & Cookie auth scenarios
    • CRUD operations (Create, Get, Update, Delete)
    • JSON Schema validation using AJV
    • Serial execution for dependent test flows
    • Performance response time assertions

✅ UI Automation
    • Page Object Model (POM) structure
    • Data-driven testing (Excel / test-data separation)
    • Test tagging (@smoke / @regression)
    • HTML report generation

⚙ CI/CD Integration
    • GitHub Actions
    • Automated API & UI test execution
    • Playwright browser installation
    • Report artifact publishing
    • Jenkins (Windows Agent)
    • Pipeline-based execution
    • Playwright setup
    • HTML report publishing 

📂 PROJECT STRUCTURE
├── tests/
│   ├── api/
│   └── ui/
├── utils/
├── schemas/
├── test-data/
├── playwright.config.js
├── Jenkinsfile
└── .github/workflows/

▶ HOW TO RUN LOCALLY
Install dependencies:
    npm install

Install Playwright browsers:
    px playwright install 

Run API tests:
    npm run api

Run UI tests:
npm run ui

🎯 OBJECTIVE
    The goal of this project is to demonstrate clean automation framework architecture with CI/CD readiness aligned to real-world SDET practices.