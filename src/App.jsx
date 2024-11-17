import { useState } from "react";

import Header from "./components/Header";
import GeneralInfo from "./components/GeneralInfo";
import Education from ".//components/Education";
import Experience from "./components/Experience";
import "./App.css";
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
          <div className="space-y-6">
            <GeneralInfo onSave={setGeneralInfo} initialData={generalInfo} />
            <Education onSave={setEducation} initialData={education} />
            <Experience onSave={setExperience} initialData={experience} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
