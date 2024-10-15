import React from "react";
import Text from "./Text";
import styled from "styled-components";
import { formatTime } from "../utils/dates";

const generateTimes = (startHour, endHour) => {
  const times = [];
  const startDate = new Date();
  startDate.setHours(startHour, 0, 0, 0);

  const endDate = new Date();
  endDate.setHours(endHour, 0, 0, 0);

  while (startDate <= endDate) {
    times.push(formatTime(startDate));
    startDate.setMinutes(startDate.getMinutes() + 15);
  }
  return times;
};

const TimeSelection = ({ time, setTime }) => {
  const times = generateTimes(11, 18);

  return (
    <Container>
      {times.map((timeEl, id) => (
        <TimeTile key={id} timeEl={timeEl} setTime={setTime} time={time} />
      ))}
    </Container>
  );
};

export default TimeSelection;

const TimeTile = ({ timeEl, time, setTime }) => {
  const timeIsSelected = timeEl === time;

  const selectTime = () => {
    if (timeEl === time) setTime("");
    else setTime(timeEl);
  };

  return (
    <Tile onClick={selectTime} className={timeIsSelected ? "active" : ""}>
      <Text size="md" weight="600">
        {timeEl}
      </Text>
      <Text size="sm" weight="400">
        Dining Room
      </Text>
    </Tile>
  );
};

const Tile = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--green);
  border-radius: 10px;
  width: 200px;
  text-align: center;
  padding: 5px 0px;
  cursor: pointer;

  &.active {
    background: var(--green);
    border: 1px solid var(--green);
    color: white;
  }

  &:hover {
    scale: 1.1;
  }
`;
const Container = styled.div`
  width: fit-content;
  margin: 0 auto 5rem;
  display: grid;
  grid-template-columns: repeat(4, 200px); // 4 equal columns
  gap: 10px;
  justify-items: center;
`;
