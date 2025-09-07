# Project-7:Theme Switcher Project (React + Context API + LocalStorage)

### 🎯 Goal

Build a small React app where users can switch between **light mode** and **dark mode**. The chosen theme should be:

- **Managed globally** with React Context API
- **Persisted** in `localStorage` so it remains after refreshing

---

## 🔑 Features

1. **Light/Dark Theme Toggle**
    - A simple button to switch between light and dark themes.
2. **Global State Management with Context API**
    - Create a `ThemeContext` to provide theme info (`light` / `dark`) and a method to toggle it across the app.
3. **Persistence with LocalStorage**
    - Store the user’s theme preference in `localStorage`.
    - On page reload, load the theme from `localStorage`.
4. **Custom Styling Based on Theme**
    - Use TailwindCSS or styled-components (or even plain CSS) to apply different theme styles.
