import React, { useEffect, useState } from "react";
import { getSelectedDate, convertTimeFormat } from "../utils/dates";
import { fetchAPI } from "../utils/api";

import Header from "./Header";
import ReservationBanner from "./ReservationBanner";
import TimeSelection from "./TimeSelection";
import Footer from "./Footer";
import CompleteReservationModal from "./CompleteReservationModal";

const today = new Date();
const BookingPage = () => {
  // SELECTION
  const [numGuests, setNumGuests] = useState(2);
  const [date, setDate] = useState(getSelectedDate());
  const [time, setTime] = useState("");

  // API DATA
  const [availableTimes, setAvailableTimes] = useState([]);
  const AVAILABLE_TIME = convertTimeFormat(availableTimes);

  const [isModalOpen, setIsModalOpen] = useState(false);

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
    if (numGuests && date && time) setIsModalOpen(true);
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
