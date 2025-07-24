import { getDaysLeft } from "../utils/dateUtils";

const NoteCard = ({ note, onDelete, onEdit }) => {
  const daysLeft = getDaysLeft(note.date);
  const isToday = daysLeft === 0;
  const isComing = daysLeft > 0 && daysLeft <= 7;

  const badgeColor = {
    quiz: "success",
    assignment: "primary",
    exam: "danger",
  }[note.type];

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h5 className="card-title d-flex justify-content-between">
          {note.title}
          <span className={`badge bg-${badgeColor}`}>{note.type}</span>
        </h5>
        <p className="card-text">{note.description}</p>
        <p className="card-text">
          📅 <strong>{note.date}</strong> —{" "}
          {daysLeft >= 0 ? (
            daysLeft === 0 ? (
              <span className="text-danger fw-bold">Deadline is today!</span>
            ) : (
              `${daysLeft} days left`
            )
          ) : (
            "Expired"
          )}
        </p>
        {isToday && (
          <span className="badge bg-danger text-white">⏰ Deadline Today!</span>
        )}
        {!isToday && isComing && (
          <span className="badge bg-warning text-dark">⚠️ Coming Soon</span>
        )}
        <div className="mt-3">
          <button
            className="btn btn-sm btn-outline-secondary me-2"
            onClick={() => onEdit(note)}
          >
            Edit
          </button>
          <button
            className="btn btn-sm btn-outline-danger"
            onClick={() => onDelete(note.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
