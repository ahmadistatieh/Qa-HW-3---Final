# 🎭 Playwright Automation Framework

Automation testing framework built using Playwright and TypeScript for end-to-end web application testing.

---

## 🚀 Features

- Automated UI Testing
- Cross-browser testing
- Page Object Model (POM) architecture
- Environment variables support using `.env`
- HTML test reports
- Screenshot capture on failure
- Trace generation for debugging
- Reusable and scalable test structure

---

## 🛠️ Tech Stack

- Playwright
- TypeScript
- Node.js
- dotenv
- HTML Reporter

---

## 📂 Project Structure

```bash
playwright-automation-framework/
│
├── tests/              # Test files
├── pages/              # Page Object classes
├── utils/              # Test data and helpers
├── playwright.config.ts
├── package.json
└── .env
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/ahmadistatieh/playwright-automation-framework.git
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

## ▶️ Run Tests

Run all tests:

```bash
npx playwright test
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Run a specific test file:

```bash
npx playwright test tests/login.spec.ts
```

---

## 📊 Open HTML Report

```bash
npx playwright show-report
```

---

## 🧪 Tested Features

- Login functionality
- Add products to cart
- Remove products from cart
- Product sorting
- Checkout process

---

## 📸 Framework Highlights

- Uses Page Object Model for maintainability
- Clean and reusable architecture
- Easy to scale with additional test cases
- Supports debugging with traces and screenshots

---

## 👨‍💻 Author

Ahmad Istatieh
Software Engineering Student
An-Najah National University
