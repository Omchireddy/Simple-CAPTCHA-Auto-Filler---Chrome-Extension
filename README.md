# 🔓 Simple CAPTCHA Auto-Filler - Chrome Extension

![badge](https://img.shields.io/badge/status-Active-brightgreen)
![badge](https://img.shields.io/badge/license-MIT-blue)

## 📝 Project Description

This Chrome Extension automatically detects and solves simple math-based CAPTCHAs (e.g., “5 + 3”) by parsing and calculating the answer, then autofilling it. It requires no machine learning and is intended for educational use to demonstrate how weak CAPTCHAs can be bypassed with basic automation.

---

## 🧾 Project Summary

CAPTCHAs help distinguish humans from bots, but simple math CAPTCHAs can be bypassed easily. This extension detects, solves, and autofills these CAPTCHAs using JavaScript parsing, without any ML or external services. It’s designed solely for educational and research purposes.

---

## 🚀 Features

- Detects and solves simple math CAPTCHAs
- Calculates and autofills answers automatically
- Lightweight and fast
- No machine learning or external APIs needed
- Ideal for testing and educational purposes

---

## 🧠 How It Works

The extension’s content script scans web pages for math CAPTCHAs, parses the expression, computes the result, and inputs the answer automatically.

---

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/captcha-autofiller.git
