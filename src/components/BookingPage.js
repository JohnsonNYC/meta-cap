import React, { useEffect, useState } from "react";
import { getTodayDate } from "../utils/dates";
import Header from "./Header";
import ReservationBanner from "./ReservationBanner";
import TimeSelection from "./TimeSelection";
import Footer from "./Footer";
import CompleteReservationModal from "./CompleteReservationModal";

const BookingPage = () => {
  const [numGuests, setNumGuests] = useState(2);
  const [date, setDate] = useState(getTodayDate());
  const [time, setTime] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGuestChange = (e) => {
    const val = e.target.value;
    if (val < 0) return;
    setNumGuests(val);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTime("");
  };

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
          time={time}
          handleDateChange={handleDateChange}
        />
        <TimeSelection time={time} setTime={setTime} />
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
