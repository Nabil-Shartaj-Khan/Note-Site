import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import ConfirmDeleteModal from "./components/ConfirmDeleteModal";
import "react-toastify/dist/ReactToastify.css";
import AddNoteForm from "./components/AddNoteForm";
import NotesList from "./components/NotesList";
import FilterBar from "./components/FilterBar";
import CalendarView from "./components/CalendarView";
import InstallButton from "./components/InstallButton";
import "./App.css"; // Your styles including blur CSS

const App = () => {
  const [noteToDelete, setNoteToDelete] = useState(null);
  const [notes, setNotes] = useState(() => {
    return JSON.parse(localStorage.getItem("notes")) || [];
  });
  const [editingNote, setEditingNote] = useState(null);
  const [filterType, setFilterType] = useState("all");
  const [view, setView] = useState("list"); // "list" or "calendar"

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "light";
    setTheme(saved);
    document.documentElement.setAttribute("data-bs-theme", saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-bs-theme", newTheme);
    setTheme(newTheme);
  };

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    const dueToday = notes.filter((note) => note.date === today);
    if (dueToday.length) {
      alert(`Reminder: You have ${dueToday.length} deadline(s) today!`);
    }
  }, []);

  const addNote = (note) => {
    const noteWithId = { ...note, id: Date.now() };
    setNotes([noteWithId, ...notes]);

    const typeCapitalized = note.type
      ? note.type.charAt(0).toUpperCase() + note.type.slice(1)
      : "Note";

    toast.success(`${typeCapitalized} added successfully!`);
  };

  const updateNote = (updated) => {
    setNotes(notes.map((n) => (n.id === updated.id ? updated : n)));
    setEditingNote(null);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((n) => n.id !== id));
  };

  const filteredNotes =
    filterType === "all"
      ? notes
      : notes.filter((note) => note.type === filterType);

  return (
    <div className="container py-5">
      <ToastContainer position="top-right" autoClose={3000} />

      <div className={`main-content ${noteToDelete ? "blurred" : ""}`}>
        <div className="d-flex justify-content-end align-items-center gap-2 mb-3">
          <button className="btn btn-outline-info" onClick={toggleTheme}>
            {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
          </button>

          <button
            className="btn btn-outline-info"
            onClick={() => window.open("/how-to-use.html", "_blank")}
          >
            ❓ How to Use
          </button>

          <InstallButton />
        </div>

        <h2 className="mb-4">📚 SoulSync</h2>
        <span className="text-muted mb-4 d-block">
          Your Personal Reminder App
        </span>

        <AddNoteForm
          onAdd={addNote}
          existingNoteToEdit={editingNote}
          onUpdate={updateNote}
        />

        {/* View toggle buttons */}
        <div className="mb-4 text-center">
          <button
            className={`btn me-2 ${
              view === "list" ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() => setView("list")}
          >
            List View
          </button>
          <button
            className={`btn ${
              view === "calendar" ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() => setView("calendar")}
          >
            Calendar View
          </button>
        </div>

        {view === "list" && (
          <div className="centered-container">
            <FilterBar filter={filterType} setFilter={setFilterType} />
            <NotesList
              notes={filteredNotes}
              onDelete={(note) => setNoteToDelete(note)}
              onEdit={setEditingNote}
            />
          </div>
        )}

        {view === "calendar" && (
          <div className="centered-container">
            <CalendarView notes={notes} />
          </div>
        )}

        <footer className="text-center mt-5">
          <p className="text-muted">
            © 2025 SoulSync by Nabil Shartaz Khan. All rights reserved.
          </p>
        </footer>
      </div>

      <ConfirmDeleteModal
        show={!!noteToDelete}
        onClose={() => setNoteToDelete(null)}
        onConfirm={() => {
          deleteNote(noteToDelete.id);
          setNoteToDelete(null);
        }}
      />
    </div>
  );
};

export default App;
