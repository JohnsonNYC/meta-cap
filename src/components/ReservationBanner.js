import React from "react";
import styled from "styled-components";
import Text from "./Text";
import { getSelectedDate } from "../utils/dates";

const ReservationBanner = ({
  numGuests,
  handleGuestChange,
  handleDateChange,
  date,
  time,
}) => {
  return (
    <Container>
      <LeftContainer>
        <Text size="xxl" font="markazi">
          Little Lemon
        </Text>
        <Text size="lg" font="markazi">
          4.8(1.8K) | American | $$
        </Text>
        <Text size="sm" weight="700">
          Chicago
        </Text>

        <SelectionContainer>
          <FormGroup>
            <label htmlFor="guest-number">Number of Guests</label>
            <input
              id="guest-number"
              name="guest-number"
              value={numGuests}
              type="number"
              onChange={(e) => handleGuestChange(e)}
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="date-picker">Date</label>
            <input
              id="date-picker"
              name="date"
              type="date"
              value={date}
              onChange={(e) => handleDateChange(e)}
              min={getSelectedDate()}
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="time">Time</label>
            <input
              id="time"
              name="time"
              value={time}
              placeholder="Select From Below"
              readOnly
            />
          </FormGroup>
        </SelectionContainer>
      </LeftContainer>

      <RightContainer>
        <ImageContainer>
          <img src="/GrilledFish.jpg" alt="Little Lemon" />
        </ImageContainer>
      </RightContainer>
    </Container>
  );
};

export default ReservationBanner;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 0.5rem;
  width: 33%;
  padding: 0 0.5rem;

  &:not(:last-of-type) {
    border-right: 1px solid black;
  }

  & > input {
    border: none;
    font-weight: 900;
    height: 25px;
    font-size: 16px;
  }

  & > label {
    font-weight: 600;
    font-size: 14px;
  }
`;
const SelectionContainer = styled.div`
  border: 1px solid black;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  padding: 0.5rem 1rem;
  margin-top: 4rem;
`;

const ImageContainer = styled.div`
  border-radius: 20px;
  max-width: 200px;
  max-height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`;
const Container = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-bottom: 3rem;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const RightContainer = styled.div``;
