import { useState, useEffect } from "react";

const AddNoteForm = ({ onAdd, existingNoteToEdit, onUpdate }) => {
  const [form, setForm] = useState({
    title: "",
    type: "",
    date: "",
    description: "",
  });

  useEffect(() => {
    if (existingNoteToEdit) setForm(existingNoteToEdit);
  }, [existingNoteToEdit]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title || !form.date) {
      alert("Please fill in both the title and date fields.");
      return;
    }

    const note = { ...form, id: existingNoteToEdit ? form.id : Date.now() };
    existingNoteToEdit ? onUpdate(note) : onAdd(note);

    setForm({ title: "", type: "quiz", date: "", description: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-2">
        <input
          type="text"
          name="title"
          className="form-control"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
        />
      </div>
      <div className="mb-2">
        <select
          name="type"
          className="form-select"
          value={form.type}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select quiz / assignment / exam
          </option>
          <option value="quiz">Quiz</option>
          <option value="assignment">Assignment</option>
          <option value="exam">Exam</option>
        </select>
      </div>
      <div className="mb-2">
        <input
          type="date"
          name="date"
          className="form-control"
          value={form.date}
          onChange={handleChange}
        />
      </div>
      <div className="mb-2">
        <textarea
          name="description"
          className="form-control"
          placeholder="Add exam/quiz/assignment description and no"
          value={form.description}
          onChange={handleChange}
        />
      </div>
      <button className="btn btn-primary">
        {existingNoteToEdit ? "Update" : "Add"} Note
      </button>
    </form>
  );
};

export default AddNoteForm;
