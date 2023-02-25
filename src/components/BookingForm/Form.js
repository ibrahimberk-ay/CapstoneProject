import React, { useState } from "react";
import "./Form.css";

const Form = (props) => {
  const [numOGuests, setNumOGuests] = useState(0);
  const [time, setTime] = useState("Time");
  const [date, setDate] = useState("");
  const [occasion, setOccasion] = useState("Occasion");

  const clearForm = () => {
    setNumOGuests(0);
    setTime("Time");
    setDate("");
    setOccasion("Occasion");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Reserved!");
    clearForm();
  };

  return (
    <>
      <div className="form-container">
        <h2>Reserve a table</h2>
        <form onSubmit={handleSubmit}>
          <label for="num_guests">Number of Guests:</label>
          <input
            type="number"
            className="form-input"
            name="num_guests"
            placeholder="1"
            min="1"
            max="10"
            value={numOGuests}
            onChange={(e) => {
              setNumOGuests(e.target.value);
            }}
            required
          />

          <label for="date">Date:</label>
          <input
            type="date"
            className="form-input"
            name="date"
            id="date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
              props.dispatch({ date: e.target.value });
            }}
            required
          />

          <label for="time">Time:</label>
          <select
            type="time"
            className="form-input"
            name="time"
            id="time"
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
            }}
            required
          >
            {props.availableTimes?.map((time) => (
              <option value={time}>{time}</option>
            ))}
          </select>

          <label for="occasion">Occasion:</label>
          <select
            className="form-input"
            name="occasion"
            id="occasion"
            value={occasion}
            onChange={(e) => {
              setOccasion(e.target.value);
            }}
            required
          >
            <option value="anniversary">Wedding</option>
            <option value="birthday">Birthday</option>
            <option value="other">Other</option>
          </select>

          <input type="submit" className="submit-btn" value="Reserve" />
        </form>
      </div>
    </>
  );
};

export default Form;
