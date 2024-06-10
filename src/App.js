import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddTreatmentForm from "./components/AddTreatmentForm";
import TreatmentList from "./components/TreatmentList";
import Navbar from "./components/Navbar";
import "./components/styles/style.css";
import video from "./img/video.mp4";

const demoData = [
  {
    id: 1,
    date: "2023-05-01",
    hospital: "City Hospital",
    doctor: "Dr. Jane Smith",
    treatment: "Annual Physical Checkup",
    notes: "Everything looks good.",
  },
  {
    id: 2,
    date: "2023-06-15",
    hospital: "Central Clinic",
    doctor: "Dr. John Doe",
    treatment: "Dental Cleaning",
    notes: "No cavities detected.",
  },
  {
    id: 3,
    date: "2023-07-20",
    hospital: "Metro Hospital",
    doctor: "Dr. Emily Johnson",
    treatment: "Eye Examination",
    notes: "Prescription updated for new glasses.",
  },
  {
    id: 4,
    date: "2023-08-10",
    hospital: "Community Health Center",
    doctor: "Dr. Michael Brown",
    treatment: "Flu Shot",
    notes: "Mild soreness at injection site.",
  },
  {
    id: 5,
    date: "2023-09-05",
    hospital: "City Hospital",
    doctor: "Dr. Jane Smith",
    treatment: "Allergy Test",
    notes: "No allergic reactions detected.",
  },
  {
    id: 6,
    date: "2023-10-12",
    hospital: "Central Clinic",
    doctor: "Dr. John Doe",
    treatment: "Blood Pressure Check",
    notes: "Slight increase in blood pressure.",
  },
  {
    id: 7,
    date: "2023-11-18",
    hospital: "Metro Hospital",
    doctor: "Dr. Emily Johnson",
    treatment: "X-ray Examination",
    notes: "No fractures detected.",
  },
  {
    id: 8,
    date: "2023-12-22",
    hospital: "Community Health Center",
    doctor: "Dr. Michael Brown",
    treatment: "Cholesterol Test",
    notes: "Cholesterol levels within normal range.",
  },
  {
    id: 9,
    date: "2024-01-15",
    hospital: "City Hospital",
    doctor: "Dr. Jane Smith",
    treatment: "Mammogram",
    notes: "No signs of abnormalities.",
  },
  {
    id: 10,
    date: "2024-02-09",
    hospital: "Central Clinic",
    doctor: "Dr. John Doe",
    treatment: "Dental Filling",
    notes: "Minor cavity filled successfully.",
  },
  {
    id: 11,
    date: "2024-03-20",
    hospital: "Metro Hospital",
    doctor: "Dr. Emily Johnson",
    treatment: "Blood Test",
    notes: "Routine blood tests completed.",
  },
  {
    id: 12,
    date: "2024-04-05",
    hospital: "Community Health Center",
    doctor: "Dr. Michael Brown",
    treatment: "Diabetes Screening",
    notes: "Blood sugar levels within normal range.",
  },
  {
    id: 13,
    date: "2024-05-18",
    hospital: "City Hospital",
    doctor: "Dr. Jane Smith",
    treatment: "Colonoscopy",
    notes: "No polyps detected.",
  },
  {
    id: 14,
    date: "2024-06-10",
    hospital: "Central Clinic",
    doctor: "Dr. John Doe",
    treatment: "Eye Surgery",
    notes: "Successful cataract removal.",
  },
  {
    id: 15,
    date: "2024-07-01",
    hospital: "Metro Hospital",
    doctor: "Dr. Emily Johnson",
    treatment: "Bone Density Scan",
    notes: "Normal bone density levels.",
  },
  {
    id: 16,
    date: "2024-08-11",
    hospital: "Community Health Center",
    doctor: "Dr. Michael Brown",
    treatment: "Physical Therapy Session",
    notes: "Making progress on mobility.",
  },
  {
    id: 17,
    date: "2024-09-25",
    hospital: "City Hospital",
    doctor: "Dr. Jane Smith",
    treatment: "Electrocardiogram (ECG)",
    notes: "Normal heart rhythm observed.",
  },
  {
    id: 18,
    date: "2024-10-17",
    hospital: "Central Clinic",
    doctor: "Dr. John Doe",
    treatment: "Dermatology Consultation",
    notes: "Prescription provided for skin condition.",
  },
  {
    id: 19,
    date: "2024-11-29",
    hospital: "Metro Hospital",
    doctor: "Dr. Emily Johnson",
    treatment: "Ultrasound Scan",
    notes: "No abnormalities detected.",
  },
  {
    id: 20,
    date: "2024-12-05",
    hospital: "Community Health Center",
    doctor: "Dr. Michael Brown",
    treatment: "Psychological Evaluation",
    notes: "Recommendation for therapy sessions.",
  },
];

const App = () => {
  const [treatments, setTreatments] = useState(demoData);
  const [selectedTreatment, setSelectedTreatment] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddTreatment = (newTreatment) => {
    setTreatments([...treatments, newTreatment]);
  };

  const handleTreatmentClick = (treatment) => {
    setSelectedTreatment(treatment);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredTreatments = treatments.filter((treatment) =>
    treatment.hospital.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <div className="bgContainer">
                <div className="overlay"></div>
                <video src={video} autoPlay loop muted />
                <div className="container">
                  <h1 className="carelog text-center text-3xl font-bold mb-8">
                    <Typewriter text="CareLog" />
                  </h1>
                  <Link to="/treatmentlist" className="transparent-button">
                    <span className="icon-left">
                      <svg
                        fill="#FFFFFF"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                      </svg>
                    </span>
                    Search Treatments
                    <span className="icon-right">&gt;</span>
                  </Link>
                </div>
              </div>
            }
          />
          <Route
            path="/addtreatment"
            element={<AddTreatmentForm onAddTreatment={handleAddTreatment} />}
          />
          <Route
            path="/treatmentlist"
            element={
              <TreatmentList
                treatments={filteredTreatments}
                onTreatmentClick={handleTreatmentClick}
                demoData={demoData}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

const Typewriter = ({ text }) => {
  const [currentText, setCurrentText] = useState("");
  const [direction, setDirection] = useState(1);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    let intervalId;

    const typeWriter = () => {
      intervalId = setInterval(() => {
        setCurrentText((prevText) => {
          const nextIndex = prevText.length + direction;
          if (nextIndex === text.length || nextIndex === 0) {
            if (prevText === text) {
              clearInterval(intervalId);
              setIsWaiting(true);
              setTimeout(() => {
                setDirection(-direction);
                setIsWaiting(false);
              }, 3000);
            } else {
              setDirection(-direction);
            }
          }
          return text.slice(0, nextIndex);
        });
      }, 250);
    };

    if (!isWaiting) {
      typeWriter();
    }

    return () => clearInterval(intervalId);
  }, [text, direction, isWaiting]);

  return (
    <div className="typewriter">
      <div className="carelog">{currentText}</div>
      <div className="vertical-bar"></div>
    </div>
  );
};

export default App;
