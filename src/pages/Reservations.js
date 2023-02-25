import React, { useReducer } from "react";
import Form from "../components/BookingForm/Form";
import Subheader from "../components/Subheader/Subheader";

const updateTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

const initializeTimes = () => {
  const initialTime = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  return initialTime;
};

const Reservations = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <>
      <Form availableTimes={availableTimes} dispatch={dispatch} />
      <Subheader color="white" />
    </>
  );
};

export default Reservations;
