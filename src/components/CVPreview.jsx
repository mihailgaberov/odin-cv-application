import React from "react";

function CVPreview({ generalInfo, education, practical }) {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
        CV Preview
      </h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          General Information
        </h2>
        <div className="space-y-2">
          <p>
            <strong className="font-medium">Name:</strong>{" "}
            {generalInfo.name || "N/A"}
          </p>
          <p>
            <strong className="font-medium">Email:</strong>{" "}
            {generalInfo.email || "N/A"}
          </p>
          <p>
            <strong className="font-medium">Phone:</strong>{" "}
            {generalInfo.phone || "N/A"}
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Education</h2>
        {education.length > 0 ? (
          education.map((edu, index) => (
            <div key={index} className="mb-6 border-b pb-4">
              <p>
                <strong className="font-medium">School Name:</strong>{" "}
                {edu.schoolName || "N/A"}
              </p>
              <p>
                <strong className="font-medium">Title of Study:</strong>{" "}
                {edu.title || "N/A"}
              </p>
              <p>
                <strong className="font-medium">Date of Study:</strong>{" "}
                {edu.date || "N/A"}
              </p>
            </div>
          ))
        ) : (
          <p className="italic text-gray-600">
            No educational experience added.
          </p>
        )}
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Experience
        </h2>
        {practical.length > 0 ? (
          practical.map((exp, index) => (
            <div key={index} className="mb-6 border-b pb-4">
              <p>
                <strong className="font-medium">Company Name:</strong>{" "}
                {exp.company || "N/A"}
              </p>
              <p>
                <strong className="font-medium">Position Title:</strong>{" "}
                {exp.position || "N/A"}
              </p>
              <p>
                <strong className="font-medium">Responsibilities:</strong>{" "}
                {exp.responsibilities || "N/A"}
              </p>
              <p>
                <strong className="font-medium">Start Date:</strong>{" "}
                {exp.startDate || "N/A"}
              </p>
              <p>
                <strong className="font-medium">End Date:</strong>{" "}
                {exp.endDate || "N/A"}
              </p>
            </div>
          ))
        ) : (
          <p className="italic text-gray-600">No practical experience added.</p>
        )}
      </div>
    </div>
  );
}

export default CVPreview;
