import React, { useState } from "react";

function Experience({ onSave, initialData }) {
  const [isEditing, setIsEditing] = useState(true);
  const [formData, setFormData] = useState(
    initialData.length > 0
      ? initialData
      : [
          {
            company: "",
            position: "",
            responsibilities: "",
            startDate: "",
            endDate: "",
          },
        ]
  );

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedData = [...formData];
    updatedData[index][name] = value;
    setFormData(updatedData);
  };

  const handleSave = () => {
    onSave(formData);
    setIsEditing(false);
  };

  const handleEdit = () => setIsEditing(true);

  const addEntry = () => {
    setFormData([
      ...formData,
      {
        company: "",
        position: "",
        responsibilities: "",
        startDate: "",
        endDate: "",
      },
    ]);
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Practical Experience</h2>
      {isEditing ? (
        <div className="space-y-4">
          {formData.map((entry, index) => (
            <div key={index} className="space-y-2 border-b pb-4">
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={entry.company}
                onChange={(e) => handleChange(e, index)}
                className="border rounded w-full p-2"
              />
              <input
                type="text"
                name="position"
                placeholder="Position Title"
                value={entry.position}
                onChange={(e) => handleChange(e, index)}
                className="border rounded w-full p-2"
              />
              <textarea
                name="responsibilities"
                placeholder="Main Responsibilities"
                value={entry.responsibilities}
                onChange={(e) => handleChange(e, index)}
                className="border rounded w-full p-2"
                rows={3}
              ></textarea>
              <div className="flex gap-4">
                <input
                  type="date"
                  name="startDate"
                  value={entry.startDate}
                  onChange={(e) => handleChange(e, index)}
                  className="border rounded w-full p-2"
                />
                <input
                  type="date"
                  name="endDate"
                  value={entry.endDate}
                  onChange={(e) => handleChange(e, index)}
                  className="border rounded w-full p-2"
                />
              </div>
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
            <div key={index} className="mb-4">
              <p>
                <strong>Company:</strong> {entry.company}
              </p>
              <p>
                <strong>Position:</strong> {entry.position}
              </p>
              <p>
                <strong>Responsibilities:</strong> {entry.responsibilities}
              </p>
              <p>
                <strong>Start Date:</strong> {entry.startDate}
              </p>
              <p>
                <strong>End Date:</strong> {entry.endDate}
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

export default Experience;
