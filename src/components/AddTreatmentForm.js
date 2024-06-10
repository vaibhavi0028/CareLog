import React, { useState } from "react";
import "./styles/style.css";

const AddTreatmentForm = ({ onAddTreatment }) => {
  const [formData, setFormData] = useState({
    date: "",
    hospital: "",
    doctor: "",
    treatment: "",
    notes: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTreatment(formData);
    setFormData({
      date: "",
      hospital: "",
      doctor: "",
      treatment: "",
      notes: "",
    });
  };

  return (
    <div className="add-body">
      <div className="add-treatment-form">
        <h2>Add New Treatment</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="hospital">Hospital</label>
            <input
              type="text"
              id="hospital"
              name="hospital"
              value={formData.hospital}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="doctor">Doctor</label>
            <input
              type="text"
              id="doctor"
              name="doctor"
              value={formData.doctor}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="treatment">Treatment</label>
            <input
              type="text"
              id="treatment"
              name="treatment"
              value={formData.treatment}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="notes">Notes</label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="btn-cont">
            <button type="submit">Add Treatment</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTreatmentForm;
