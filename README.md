# **Project-8.**🎬 Movie Explorer App

---

A  movie browsing application built with **React + Vite**, powered by **TMDB API**, that allows users to explore movies by genre, search in real-time, and view detailed information in a smooth, modern UI.

<img width="1899" height="899" alt="image" src="https://github.com/user-attachments/assets/fb8aacc0-dd8b-4560-b411-80222c8b476d" />


---

## 🚀 Tech Stack

- **Frontend Framework:** React (with JSX)
- **Routing:** React Router DOM
- **Styling:** Tailwind CSS
- **Build Tool:** Vite
- **HTTP Requests:** Axios & Fetch API
- **Movie Data:** TMDB API
- **Linting:** ESLint
- **Type Safety:** TypeScript config (with JSX as the main codebase)

---

## ✨ Features

### 🔎 Search & Navigation

- **Live Search**: Users can search movies by title with instant suggestions.
- **Navigation Bar**: Genre-based navigation (Action, Drama, Animation, Adventure, Sci-Fi).
  <img width="1899" height="899" alt="image" src="https://github.com/user-attachments/assets/7cf05cf7-fb6a-49d9-a262-daa5eb20cd79" />


### 🎥 Genre Pages

- Dedicated pages for **Action, Drama, Animation, Adventure, and Sci-Fi movies**.
- Movies fetched dynamically using **TMDB genre IDs**.
- Pagination for browsing multiple pages of results.
 <img width="1899" height="899" alt="image" src="https://github.com/user-attachments/assets/195d662c-7170-4729-9fcc-b671ef4dfdad" />



### 🖼️ Home Page Carousels

- Animated **horizontal carousels** for each genre.
- Smooth scrolling transitions.

### 📄 Movie Details

- Clicking on a movie opens a **modal with detailed info**:
    - Poster
    - Title
    - Overview
    - Release date
    - Rating
  <img width="1899" height="899" alt="image" src="https://github.com/user-attachments/assets/e787cf59-d5d5-467e-a48c-3d033c11d9d2" />


### ❤️ Favorites System

- **Context API** manages global favorites.
- Add/remove movies from favorites list.
- Favorites accessible across pages.

  

### ⚡ UI/UX

- Fully **responsive design** for mobile, tablet, and desktop.
- **Smooth animations & transitions** for modals, carousels, and navigation.
- **Loading spinner** while fetching data.
- **Error handling** for API/network issues.

---

## 🌐 API Setup

The app uses **The Movie Database (TMDB) API** for movie data.

1. Register on [TMDB](https://www.themoviedb.org/?utm_source=chatgpt.com).
2. Generate an **API Key**.
3. Base URL:
