# 🎬 Mini Movie Explorer

A single-page React application that allows users to search for movies and maintain a personal watchlist — with persistence via `localStorage`.

## 🚀 Features

- 🔍 Debounced movie search via OMDb API (no key needed)
- 📝 Add to and persist a personal Watchlist (no duplicates)
- 📱 Responsive mobile-first layout
- 💾 Watchlist stored in `localStorage`
- ✅ Built with React functional components and hooks

---

## 🛠️ Tech Stack

- React 18+
- Vite
- JavaScript (ES6+)
- CSS (mobile-first responsive)
- OMDb API

---

## 📦 Installation

```bash
git clone https://github.com/your-username/mini-movie-explorer.git
cd mini-movie-explorer
npm install
npm run dev
```

Then open `http://localhost:5173` in your browser.

---

## 💡 How I Approached It

### 1. **Search UI**
- Used a controlled `<input>` field with a custom `useDebounce` hook to reduce API calls while typing.
- Called the OMDb API (`s=` endpoint) and displayed 10 results.

### 2. **Watchlist Logic**
- Users can add any movie to their watchlist using `＋ Watchlist` button.
- Watchlist is stored in `localStorage` and restored on page reload.
- Duplicates are prevented via `imdbID`.

### 3. **UI/UX**
- Designed to be responsive: 1-column on mobile, grid layout on tablet/desktop.
- Empty states and no-result cases handled gracefully.
- Clean and minimalist design.

---

## 🧪 Optional Stretch Goals (not implemented due to time)
- Drawer for full movie details (`&i=` API call)
- Dark mode toggle
- Reorder/delete watchlist items

---

## 🎥 Walkthrough Video (Optional)
[A Loom video explaining the structure, trade-offs, and UI decisions can be added here.]

---

## ✅ Review Rubric Alignment

| Criteria            | Met? | Notes |
|---------------------|------|-------|
| **Functionality**   | ✅   | Search & Watchlist both work and persist |
| **Code Clarity**    | ✅   | Modular components, consistent naming |
| **UI/UX Polish**    | ✅   | Responsive layout, basic error/empty states |
| **Stretch Goals**   | ❌   | Base version only (optional extras skipped) |

---

## 📁 Folder Structure

```
src/
├── App.jsx
├── main.jsx
├── components/
│   ├── SearchBar.jsx
│   ├── MovieCard.jsx
│   └── Watchlist.jsx
├── hooks/
│   └── useDebounce.js
├── styles/
│   └── App.css
```

---

## 📄 License

MIT
