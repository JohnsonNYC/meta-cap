import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import Text from "./Text";
import Button from "./Button";

import { isValidPhoneNumber, isValidEmail } from "../utils/strings";
import { isValidDate } from "../utils/dates";
import { submitAPI } from "../utils/api";

import styled from "styled-components";
import JSConfetti from "js-confetti";

const CompleteReservationModal = ({ isOpen, onClose, reservationData }) => {
  const { date, numGuests, time } = reservationData || {};

  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [specialOccasion, setSpecialOccasion] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const formatDateTime = (dateStr, timeStr) => {
    // Combine the date and time strings into a single string for parsing
    const dateTimeStr = `${dateStr} ${timeStr}`;

    // Create a new Date object
    const dateTime = new Date(dateTimeStr);

    // Format the date and time using Intl.DateTimeFormat
    const options = {
      weekday: "short", // Tue
      year: "numeric", // 2024
      month: "short", // Oct
      day: "numeric", // 15
      hour: "numeric", // 6
      minute: "2-digit", // 00
      hour12: true, // PM
    };

    return new Intl.DateTimeFormat("en-US", options).format(dateTime);
  };

  const errorHandler = (type) => {
    if (type === "phone" && !isValidPhoneNumber(phone) && !email)
      setError("Please provide a valid phone number");
    if (type === "email" && !isValidEmail(email) && !phone)
      setError("Please provide a valid email");

    setTimeout(() => {
      setError("");
    }, 4000);
  };

  const submitReservation = () => {
    let res = submitAPI(reservationData);

    if (res === true) setIsSuccess(res);
    else setError(res);

    setTimeout(() => {
      setIsSuccess(false);
    }, 3000);
  };

  useEffect(() => {
    if (isSuccess) {
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();

      setTimeout(() => {
        jsConfetti.clearCanvas();
      }, 3000);
    }
  }, [isSuccess]);

  const isSubmittable =
    (phone.length && isValidPhoneNumber(phone)) ||
    (email.length && isValidEmail(email));

  if (!isValidDate(date) && numGuests > 1) return null;
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Container>
        <LeftContainer>
          <Text size="xl" weight="800">
            Complete Your Reservation
          </Text>
          <Text size="md" weight="600">
            Little Lemon
          </Text>

          <Text className="selected-time" weight="600">
            {formatDateTime(date, time)}
          </Text>
          <Text className="selected-guests">
            {numGuests} Guests, Dining Room
          </Text>

          <div className="special-occasion-wrapper">
            <Text size="sm" font="karla" weight="500">
              Is there a Special Occasion?
            </Text>

            <textarea
              value={specialOccasion}
              placeholder="(Birthday, Anniversary)"
              onChange={(e) => setSpecialOccasion(e.target.value)}
            />
          </div>

          <div className="cancellation-policy">
            <Text as="div" size="sm">
              Cancellations & Rescheduling: Cancellations or rescheduling
              requests must be made at least 24 hours before your scheduled
              appointment. Any cancellations made less than 24 hours in advance
              will incur a 10% cancellation fee of the total service cost.
            </Text>
            <Text as="div" size="sm">
              No-Shows: If you do not show up for your appointment and do not
              notify us, a 10% no-show fee will be charged to your account.
            </Text>
            <Text as="div" size="sm">
              Late Arrivals: If you arrive more than 15 minutes late for your
              appointment, we may need to reschedule or shorten the service, and
              a 10% late arrival fee may be applied.
            </Text>
            <Text as="div" size="sm">
              Refunds: Refunds will not be issued for services that have already
              been rendered. If you cancel or reschedule within the required
              time frame, you may apply any payments made toward a future
              booking.
            </Text>
            <Text as="div" size="sm">
              Emergency Cancellations: We understand that emergencies happen. If
              you need to cancel due to an emergency, please contact us as soon
              as possible. We will do our best to accommodate you.
            </Text>
          </div>
        </LeftContainer>

        <RightContainer>
          <Form>
            <label>Phone Number</label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              onBlur={() => errorHandler("phone")}
            />

            <Text as="div" weight="800">
              OR
            </Text>
            <label>Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => errorHandler("email")}
            />

            <Text size="sm">
              This will be used to notify you of your upcoming reservations
            </Text>
          </Form>
        </RightContainer>
      </Container>
      <Button
        aria-label="On Click"
        disabled={!isSubmittable}
        bgColor="yellow"
        onClick={submitReservation}
        style={{
          width: "80%",
          height: "50px",
          margin: "0 auto",
          display: "block",
        }}
      >
        <Text weight="800" size="lg">
          Reserve Now
        </Text>
      </Button>
      {error ? (
        <Text
          as="div"
          color="red"
          weight="500"
          style={{ textAlign: "center", marginTop: "1rem" }}
        >
          {error}
        </Text>
      ) : null}
    </Modal>
  );
};

export default CompleteReservationModal;

const Form = styled.form`
  border: 1px solid var(--black);
  border-radius: 20px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 30vh;
  width: 50%;
  margin: 0 auto;

  & > input {
    border: 1px solid var(--black);
    border-radius: 10px;

    padding: 0.5rem 1rem;
  }
`;

const Container = styled.div`
  display: flex;
  gap: 1rem;
  & > div {
    width: 50%;
  }
`;
const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;

  .selected-time {
    margin-top: 1rem;
  }

  .cancellation-policy {
    margin: 2rem 0;

    & > div {
      margin: 1rem 0;
    }
  }

  .special-occasion-wrapper {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    & > textarea {
      margin-top: 0.5rem;
    }
  }
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  button {
    width: 100%;
  }
`;
