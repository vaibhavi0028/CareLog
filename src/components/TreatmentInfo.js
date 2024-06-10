import React from "react";
import "./styles/style.css";

const TreatmentInfo = ({ treatment }) => {
  if (!treatment) {
    return (
      <div className="treatment-info-container">
        <div className="treatment-info">
          <p>No treatment selected.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="treatment-info-container">
      <div className="treatment-info">
        <h2 className="text-xl font-semibold mb-4">{treatment.treatment}</h2>
        <div className="mb-4">
          <p className="text-gray-700 font-semibold">Date:</p>
          <p>{treatment.date}</p>
        </div>
        <div className="mb-4">
          <p className="text-gray-700 font-semibold">Hospital:</p>
          <p>{treatment.hospital}</p>
        </div>
        <div className="mb-4">
          <p className="text-gray-700 font-semibold">Doctor:</p>
          <p>{treatment.doctor}</p>
        </div>
        <div className="mb-4">
          <p className="text-gray-700 font-semibold">Notes:</p>
          <p>{treatment.notes}</p>
        </div>
      </div>
    </div>
  );
};

export default TreatmentInfo;
