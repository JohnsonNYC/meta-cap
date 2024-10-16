import React, { useEffect, useState } from "react";
import {
  getSelectedDate,
  convertTimeFormat,
  isValidDate,
} from "../utils/dates";
import { fetchAPI } from "../utils/api";

import Header from "../components/Header";
import ReservationBanner from "../components/ReservationBanner";
import TimeSelection from "../components/TimeSelection";
import Footer from "../components/Footer";
import CompleteReservationModal from "../components/CompleteReservationModal";

const today = new Date();
const BookingPage = () => {
  // SELECTION
  const [numGuests, setNumGuests] = useState(2);
  const [date, setDate] = useState(getSelectedDate());
  const [time, setTime] = useState("");
  const [error, setError] = useState("");

  // API DATA
  const [availableTimes, setAvailableTimes] = useState([]);
  const AVAILABLE_TIME = convertTimeFormat(availableTimes);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleError = (type) => {
    if (type == "guest" && numGuests < 1)
      setError("Make sure to select a number of guests");
    if (type == "date" && !isValidDate(date))
      setError("Please pick a valid date");
    if (type == "time" && !time) setError("Please select a time");

    setTimeout(() => {
      setError("");
    }, 3000);
  };
  const handleGuestChange = (e) => {
    const val = e.target.value;
    if (val < 0) return;
    setNumGuests(val);
  };

  const handleDateChange = (e) => {
    const { value } = e.target;
    setDate(value);
  };

  const handleTimeChange = (e) => {
    const { value } = e.target;
    setTime(value);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTime("");
  };

  const initalizeTimes = () => {
    let res = fetchAPI(today);
    setAvailableTimes(res);
  };

  useEffect(() => {
    initalizeTimes();
  }, []);

  useEffect(() => {
    //Anytime date is changed - update the Times
    initalizeTimes();
  }, [date]);

  useEffect(() => {
    if (numGuests > 1 && date && isValidDate(date) && time)
      setIsModalOpen(true);
    else setIsModalOpen(false);
  }, [numGuests, date, time]);

  return (
    <>
      <Header />
      <main>
        <ReservationBanner
          handleGuestChange={handleGuestChange}
          numGuests={numGuests}
          date={date}
          handleDateChange={handleDateChange}
          time={time}
          handleTimeChange={handleTimeChange}
          handleError={handleError}
          error={error}
        />
        <TimeSelection
          time={time}
          setTime={setTime}
          AVAILABLE_TIME={AVAILABLE_TIME}
        />
      </main>
      <Footer />
      <CompleteReservationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        reservationData={{ numGuests, date, time }}
      />
    </>
  );
};

export default BookingPage;
