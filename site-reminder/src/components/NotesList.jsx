import NoteCard from "./NoteCard";

const NotesList = ({ notes, onDelete, onEdit }) => {
  return (
    <div className="row">
      {notes.length === 0 && <p className="text-muted">No notes yet.</p>}
      {notes.map((note) => (
        <div className="col-md-6 mb-3" key={note.id}>
          <NoteCard note={note} onDelete={onDelete} onEdit={onEdit} />
        </div>
      ))}
    </div>
  );
};

export default NotesList;
