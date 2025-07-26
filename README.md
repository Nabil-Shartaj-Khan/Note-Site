# 📒 SoulSync- Your Personal Reminder App

A simple, no-nonsense progressive web app to help you track quizzes, assignments, and exams—all in one place. Add notes with due dates, filter by type, and keep everything stored locally in your browser. I originally built this for my lovely wife, because I felt she needed a better way to stay on top of her deadlines.

## 🔧 Features

- Add notes with a title, description, type, and deadline
- Filter notes by type (quiz, assignment, exam)
- Toggle between List View and Calendar View
- View upcoming deadlines at a glance
- Auto-saves to your browser’s local storage
- Alerts for deadlines happening today
- Progressive web app, so you can download and use any time!

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
- React Calendar

## 📦 Deployment

You can deploy this easily on **Vercel** or **Netlify**. Just point the root to the folder with your `package.json`.

---
