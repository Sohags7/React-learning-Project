## Project 1: Counter with History

### 🎯 Goal

A counter app that increments/decrements a value and maintains a **history of changes**, supporting **undo/redo functionality**.

### 🛠 Tech Stack

- React (Vite or CRA)
- JavaScript
- React Hooks (`useState`, `useReducer`)
- Optional: LocalStorage (for persistence)
- Styling: TailwindCSS / CSS Modules / plain CSS

### 🔑 Features

1. **Basic Counter**
    - `useState` for count value.
    - Buttons for increment and decrement.
2. **History Tracking**
    - Store past count values in an array.
    - Render the history as a list.
3. **Undo / Redo**
    - Use `useReducer` with:
        - `state.history` → array of values
        - `state.currentIndex` → pointer to current state
        - Actions: `INCREMENT`, `DECREMENT`, `UNDO`, `REDO`.

<img width="1897" height="383" alt="image" src="https://github.com/user-attachments/assets/2bd2a244-d64b-4bad-8a27-805f7fb15b45" />


