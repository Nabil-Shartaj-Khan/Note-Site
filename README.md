# 📒 SoulSync- Your Personal Reminder App

A simple, no-nonsense web app to help you track quizzes, assignments, and exams—all in one place. Add notes with due dates, filter by type, and keep everything stored locally in your browser. I originally built this for my lovely wife, because I felt she needed a better way to stay on top of her deadlines.

## 🔧 Features

- 📝 Add and categorize notes by type: **Quiz**, **Assignment**, or **Exam**
- 📅 Filter notes by category
- 💾 Automatically saves your data using `localStorage`
- 🧹 Clean Bootstrap UI
- 🗑 Delete notes when you're done

## 🚀 Getting Started

1. Clone the repo  
   ```bash
   git clone https://github.com/your-username/note-tracker-app.git
   cd note-tracker-app
   ```

2. Install dependencies  
   ```bash
   npm install
   ```

3. Run the app  
   ```bash
   npm start
   ```

App will open at `http://localhost:3000`

## 📁 Project Structure

```
src/
├── App.jsx              # Main app component
├── components/
│   ├── AddNoteForm.jsx
│   ├── NotesList.jsx
│   └── FilterBar.jsx
```

## 🧠 Tech Stack

- React
- Bootstrap 5
- LocalStorage

## 📦 Deployment

You can deploy this easily on **Vercel** or **Netlify**. Just point the root to the folder with your `package.json`.

---

Want to add calendar view, edit support, or reminders? Fork it and go wild.
