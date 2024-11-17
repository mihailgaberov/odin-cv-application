import React, { useState } from "react";

function GeneralInfo({ onSave, initialData }) {
  const [isEditing, setIsEditing] = useState(true);
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    onSave(formData);
    setIsEditing(false);
  };

  const handleEdit = () => setIsEditing(true);

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">General Information</h2>
      {isEditing ? (
        <div className="space-y-2">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name || ""}
            onChange={handleChange}
            className="border rounded w-full p-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email || ""}
            onChange={handleChange}
            className="border rounded w-full p-2"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone || ""}
            onChange={handleChange}
            className="border rounded w-full p-2"
          />
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Submit
          </button>
        </div>
      ) : (
        <div>
          <p>
            <strong>Name:</strong> {formData.name}
          </p>
          <p>
            <strong>Email:</strong> {formData.email}
          </p>
          <p>
            <strong>Phone:</strong> {formData.phone}
          </p>
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

export default GeneralInfo;
