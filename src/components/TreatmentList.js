import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TreatmentInfo from "./TreatmentInfo";
import "./styles/style.css";

const TreatmentList = ({ treatments }) => {
  const [selectedTreatment, setSelectedTreatment] = useState(null);
  const [filterValue, setFilterValue] = useState("");
  const [filteredHospitals, setFilteredHospitals] = useState([]);
  const navigate = useNavigate();

  const handleFilterChange = (event) => {
    const { value } = event.target;
    setFilterValue(value);

    const filtered = treatments.filter((treatment) =>
      treatment.hospital.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredHospitals(filtered);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      if (filterValue === "") {
        navigate("/");
      } else {
        navigate(`/treatmentlist/search?q=${filterValue}`);
      }
    }
  };

  const handleTreatmentClick = (treatment) => {
    setSelectedTreatment(treatment);
  };

  return (
    <div>
      {selectedTreatment ? (
        <TreatmentInfo treatment={selectedTreatment} />
      ) : (
        <div className="search-cont">
          <div className="treatment-heading">Previous Treatments</div>
          <input
            type="text"
            value={filterValue}
            onChange={handleFilterChange}
            placeholder="Search by hospital name..."
            onKeyPress={handleKeyPress}
            className="search-input"
          />
          <div className="grid">
            {(filterValue === "" ? treatments : filteredHospitals).map(
              (treatment) => (
                <div
                  key={treatment.id}
                  className="treatment-card"
                  onClick={() => handleTreatmentClick(treatment)}
                >
                  <h3 className="text-lg font-semibold mb-2">
                    {treatment.treatment}
                  </h3>
                  <p className="text-gray-500 mb-1">
                    <span className="font-semibold">Date:</span>{" "}
                    {treatment.date}
                  </p>
                  <p className="text-gray-500 mb-1">
                    <span className="font-semibold">Hospital:</span>{" "}
                    {treatment.hospital}
                  </p>
                  <p className="text-gray-500">
                    <span className="font-semibold">Doctor:</span>{" "}
                    {treatment.doctor}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TreatmentList;
