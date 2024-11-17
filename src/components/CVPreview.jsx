import React from "react";

function CVPreview({ generalInfo, education, practical }) {
  return (
    <div className="p-4 bg-gray-100 rounded shadow">
      <h1 className="text-2xl font-bold mb-4">CV Preview</h1>

      {/* General Information Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">General Information</h2>
        <p>
          <strong>Name:</strong> {generalInfo.name || "N/A"}
        </p>
        <p>
          <strong>Email:</strong> {generalInfo.email || "N/A"}
        </p>
        <p>
          <strong>Phone:</strong> {generalInfo.phone || "N/A"}
        </p>
      </div>

      {/* Educational Experience Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Educational Experience</h2>
        {education.length > 0 ? (
          education.map((edu, index) => (
            <div key={index} className="mb-4">
              <p>
                <strong>School Name:</strong> {edu.schoolName || "N/A"}
              </p>
              <p>
                <strong>Title of Study:</strong> {edu.title || "N/A"}
              </p>
              <p>
                <strong>Date of Study:</strong> {edu.date || "N/A"}
              </p>
            </div>
          ))
        ) : (
          <p>No educational experience added.</p>
        )}
      </div>

      {/* Practical Experience Section */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Practical Experience</h2>
        {practical.length > 0 ? (
          practical.map((exp, index) => (
            <div key={index} className="mb-4">
              <p>
                <strong>Company Name:</strong> {exp.company || "N/A"}
              </p>
              <p>
                <strong>Position Title:</strong> {exp.position || "N/A"}
              </p>
              <p>
                <strong>Responsibilities:</strong>{" "}
                {exp.responsibilities || "N/A"}
              </p>
              <p>
                <strong>Start Date:</strong> {exp.startDate || "N/A"}
              </p>
              <p>
                <strong>End Date:</strong> {exp.endDate || "N/A"}
              </p>
            </div>
          ))
        ) : (
          <p>No practical experience added.</p>
        )}
      </div>
    </div>
  );
}

export default CVPreview;
