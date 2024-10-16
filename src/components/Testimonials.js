import React from "react";
import styled from "styled-components";
import Text from "./Text";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    key: 1,
    name: "John Reiner",
    rating: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut tellus at erat suscipit imperdiet non eu est. Vivamus ac.",
  },
  {
    key: 2,
    name: "Erin Yaeger",
    rating: 5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut tellus at erat suscipit imperdiet non eu est. Vivamus ac.",
  },
  {
    key: 3,
    name: "Annie Leronhart",
    rating: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut tellus at erat suscipit imperdiet non eu est. Vivamus ac.",
  },
  {
    key: 4,
    name: "Hange Zoe",
    rating: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut tellus at erat suscipit imperdiet non eu est. Vivamus ac.",
  },
  {
    key: 5,
    name: "Mikasa Ackerman",
    rating: 5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut tellus at erat suscipit imperdiet non eu est. Vivamus ac.",
  },
];
const Testimonials = () => {
  return (
    <Wrapper>
      <Text
        as="div"
        weight="600"
        size="xl"
        style={{ textAlign: "center", marginTop: "2rem" }}
        color="white"
      >
        Our Customers Love Us!
      </Text>
      <Container>
        <ReviewsWrapper>
          {TESTIMONIALS.map((test) => (
            <Card key={test.key} data={test} />
          ))}
        </ReviewsWrapper>
      </Container>
    </Wrapper>
  );
};

export default Testimonials;

const Card = ({ data }) => {
  const { name, rating, description } = data || {};

  return (
    <CardContainer>
      <StarRating filledStar={rating} />
      <Text weight="600" style={{ marginTop: "0.5rem" }}>
        "{description}"
      </Text>
      <Text size="lg" weight="700" style={{ marginTop: "1rem" }}>
        {name}
      </Text>
    </CardContainer>
  );
};

const StarRating = ({ filledStar }) => {
  const totalStars = 5;
  return (
    <div style={{ display: "flex" }}>
      {Array.from({ length: totalStars }, (_, index) => {
        return (
          <Star
            key={index}
            fill={index < filledStar ? "var(--orange)" : "none"}
            stroke={"var(--orange)"}
            style={{ width: "18px", height: "18px" }}
          />
        );
      })}
    </div>
  );
};
const Wrapper = styled.div`
  background: var(--green);
  padding: 1rem;
  margin: 1rem 0;
`;
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
  background: var(--white);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.7rem;
  margin: 0 2rem;

  & > div {
    display: flex;
    justify-content: space-between;

    & > span:first-of-type {
      width: 20%;
    }
  }
`;
