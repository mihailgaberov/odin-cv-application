import { useState } from "react";

import Header from "./components/Header";
import GeneralInfo from "./components/GeneralInfo";
import CVPreview from "./components/CVPreview";
import Education from ".//components/Education";
import Experience from "./components/Experience";

import Footer from "./components/Footer";

function App() {
  const [generalInfo, setGeneralInfo] = useState({});
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  return (
    <>
      <Header />
      <main>
        <div className="p-4 bg-gray-100 min-h-screen">
          <h1 className="text-3xl font-bold text-center mb-6">
            CV Application
          </h1>
          {/* Sections for input */}
          <div className="grid md:grid-cols-2 gap-6">
            <GeneralInfo onSave={setGeneralInfo} initialData={generalInfo} />
            <Education onSave={setEducation} initialData={education} />
            <Experience onSave={setExperience} initialData={experience} />
          </div>

          {/* CV Preview Section */}
          {generalInfo && education.length && experience.length && (
            <div className="mt-8">
              <CVPreview
                generalInfo={generalInfo}
                education={education}
                practical={experience}
              />
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
