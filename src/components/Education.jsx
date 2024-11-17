import React, { useState } from "react";

function Education({ onSave, initialData }) {
  const [isEditing, setIsEditing] = useState(true);
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e, index) => {
    const newData = [...formData];
    newData[index][e.target.name] = e.target.value;
    setFormData(newData);
  };

  const handleSave = () => {
    onSave(formData);
    setIsEditing(false);
  };

  const handleEdit = () => setIsEditing(true);

  const addEntry = () => {
    setFormData([...formData, { school: "", title: "", date: "" }]);
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Educational Experience</h2>
      {isEditing ? (
        <div className="space-y-4">
          {formData.map((entry, index) => (
            <div key={index} className="space-y-2">
              <input
                type="text"
                name="school"
                placeholder="School Name"
                value={entry.school}
                onChange={(e) => handleChange(e, index)}
                className="border rounded w-full p-2"
              />
              <input
                type="text"
                name="title"
                placeholder="Title of Study"
                value={entry.title}
                onChange={(e) => handleChange(e, index)}
                className="border rounded w-full p-2"
              />
              <input
                type="date"
                name="date"
                value={entry.date}
                onChange={(e) => handleChange(e, index)}
                className="border rounded w-full p-2"
              />
            </div>
          ))}
          <button
            onClick={addEntry}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Add Entry
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-500 text-white rounded ml-2"
          >
            Submit
          </button>
        </div>
      ) : (
        <div>
          {formData.map((entry, index) => (
            <div key={index} className="mb-2">
              <p>
                <strong>School:</strong> {entry.school}
              </p>
              <p>
                <strong>Title:</strong> {entry.title}
              </p>
              <p>
                <strong>Date:</strong> {entry.date}
              </p>
            </div>
          ))}
          <button
            onClick={handleEdit}
            className="px-4 py-2 bg-gray-500 text-white rounded"
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
}

export default Education;
