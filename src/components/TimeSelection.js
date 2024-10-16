import React from "react";
import Text from "./Text";
import styled from "styled-components";

const TimeSelection = ({ AVAILABLE_TIME, time, setTime }) => {
  return (
    <>
      <Text
        as="div"
        weight="600"
        size="lg"
        style={{ textAlign: "center", marginBottom: "1rem" }}
      >
        Select a Time
      </Text>
      <Container>
        {AVAILABLE_TIME.length
          ? AVAILABLE_TIME.map((timeEl, id) => (
              <TimeTile
                key={id}
                timeEl={timeEl}
                setTime={setTime}
                time={time}
              />
            ))
          : null}
      </Container>
    </>
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
