# 🍰 Bakery Web Project

## 📌 Overview
This is a React + TypeScript bakery website built as a software engineering assignment.  
It includes routing, reusable components, and a simple pink-themed UI.

---

## 🔄 What we changed

- Originally used **Bootstrap and SCSS** for styling
- Replaced login page styling with **Tailwind CSS**
- Removed SCSS from Login component
- Removed Bootstrap dependency for styling consistency

---

## 🎨 Why Tailwind was used

Tailwind CSS was chosen because:
- It uses utility classes directly in components
- It speeds up development by reducing separate CSS files
- It improves maintainability and keeps styling inside TSX files
- It avoids unnecessary predefined styles like Bootstrap

---

## ⚙️ Why this setup method

Tailwind was installed using the Vite + npm setup because:
- It works properly with React + TypeScript
- It is optimized for production builds
- It removes unused CSS automatically
- It is the standard setup for modern frontend projects

---

## 🚀 Run project

```bash
npm install
npm run dev
