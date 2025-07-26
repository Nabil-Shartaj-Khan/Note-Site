import { useEffect, useState } from "react";
import AddNoteForm from "./components/AddNoteForm";
import NotesList from "./components/NotesList";
import FilterBar from "./components/FilterBar";
import CalendarView from "./components/CalendarView";
import InstallButton from "./components/InstallButton";

const App = () => {
  const [notes, setNotes] = useState(() => {
    return JSON.parse(localStorage.getItem("notes")) || [];
  });
  const [editingNote, setEditingNote] = useState(null);
  const [filterType, setFilterType] = useState("all");
  const [view, setView] = useState("list"); // "list" or "calendar"

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

    alert(`${typeCapitalized} added successfully!`);
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
      <button
        className="btn btn-outline-info mb-3 float-end"
        onClick={() => window.open("/how-to-use.html", "_blank")}
      >
        ❓ How to Use
      </button>
      <InstallButton />
      

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
            onDelete={deleteNote}
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
  );
};

export default App;
