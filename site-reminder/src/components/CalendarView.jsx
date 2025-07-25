import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

// Helper to format a Date object as 'YYYY-MM-DD' local date (no timezone shift)
function formatDateLocal(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // months start at 0
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

const CalendarView = ({ notes }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  // Convert notes into a map for quick lookup by date (string 'YYYY-MM-DD')
  const notesByDate = notes.reduce((acc, note) => {
    acc[note.date] = acc[note.date] ? [...acc[note.date], note] : [note];
    return acc;
  }, {});

  const onDateChange = (date) => {
    const formatted = formatDateLocal(date);
    setSelectedDate(formatted);
  };

  // Custom tile content to highlight dates with notes
  const tileContent = ({ date, view }) => {
    if (view === "month") {
      const dateStr = formatDateLocal(date);
      if (notesByDate[dateStr]) {
        return <div className="badge bg-primary mt-1">●</div>;
      }
    }
    return null;
  };

  return (
    <div
      className="calendar-container d-flex"
      style={{ gap: "2rem", alignItems: "flex-start" }}
    >
      <Calendar onChange={onDateChange} tileContent={tileContent} />
      {selectedDate && notesByDate[selectedDate] && (
        <div style={{ minWidth: "300px" }}>
          <h5>Notes on {selectedDate}:</h5>
          <ul className="list-group">
            {notesByDate[selectedDate].map((note) => (
              <li
                key={note.id}
                className={`list-group-item list-group-item-${
                  note.type === "quiz"
                    ? "success"
                    : note.type === "assignment"
                    ? "primary"
                    : "danger"
                }`}
              >
                <div className="fw-bold"><i>Title:</i> {note.title}</div>
                <div className="text-capitalize">
                  <strong><i>Type:</i></strong> {note.type}
                </div>
                <div>
                  <strong><i>About:</i></strong> {note.description || <em>—</em>}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CalendarView;
