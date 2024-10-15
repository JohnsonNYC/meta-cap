import React from "react";
import styled from "styled-components";
import Text from "./Text";

const TESTIMONIALS = [
  {
    key: 1,
    name: "John Reiner",
    rating: 1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut tellus at erat suscipit imperdiet non eu est. Vivamus ac.",
  },
  {
    key: 2,
    name: "Erin Yaeger",
    rating: 1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut tellus at erat suscipit imperdiet non eu est. Vivamus ac.",
  },
  {
    key: 3,
    name: "Annie Leronhart",
    rating: 1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut tellus at erat suscipit imperdiet non eu est. Vivamus ac.",
  },
  {
    key: 4,
    name: "Hange Zoe",
    rating: 1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut tellus at erat suscipit imperdiet non eu est. Vivamus ac.",
  },
  {
    key: 5,
    name: "Mikasa Ackerman",
    rating: 1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut tellus at erat suscipit imperdiet non eu est. Vivamus ac.",
  },
];
const Testimonials = () => {
  return (
    <>
      <Text
        as="div"
        weight="600"
        size="xl"
        style={{ textAlign: "center", marginTop: "2rem" }}
      >
        Testimonials
      </Text>
      <Container>
        <ReviewsWrapper>
          {TESTIMONIALS.map((test) => (
            <Card key={test.key} data={test} />
          ))}
        </ReviewsWrapper>
      </Container>
    </>
  );
};

export default Testimonials;

const Card = ({ data }) => {
  const { name, rating, description } = data || {};

  return (
    <CardContainer>
      <Text as="div">Rating</Text>
      <div>
        <Text>{rating}</Text>
        <Text>{name}</Text>
      </div>
      <Text>{description}</Text>
    </CardContainer>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: auto;

  & > span {
    padding-top: 5rem;
  }
`;

const ReviewsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  padding-top: 2rem;
  padding-bottom: 5rem;
`;

const CardContainer = styled.div`
  border: 1px solid black;
  width: 200px;
  min-width: 200px;
  height: 200px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.5rem;
  margin: 0 2rem;

  & > div {
    display: flex;
    justify-content: space-between;

    & > span:first-of-type {
      width: 20%;
    }
  }
`;
