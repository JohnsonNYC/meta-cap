import React from "react";
import styled from "styled-components";
import Text from "./Text";
import Button from "./Button";
import { Link } from "react-router-dom";

const Banner = () => {
  const navToBookingPage = () => {};
  return (
    <BannerContainer>
      <LeftContainer>
        <Text size="xxl" weight="800" color="yellow" font="markazi">
          Little Lemon
        </Text>
        <Text size="xl" weight="500" color="white" font="markazi">
          Chicago
        </Text>
        <Text size="lg" color="white" font="markazi">
          We are a family owned Mediterranean restaurant focused on traditional
          reecipes served with a modern twist
        </Text>

        <Button textColor="black">
          <Link to="/booking">
            <Text color="black" weight="800">
              Reserve a Table
            </Text>
          </Link>
        </Button>
      </LeftContainer>

      <RightContainer>
        <ImageContainer>
          <img src="/RestaurantFood.jpg" alt="Restaurant Food" />
        </ImageContainer>
      </RightContainer>
    </BannerContainer>
  );
};

export default Banner;

const BannerContainer = styled.div`
  background: var(--green);
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  & > * {
    margin: 0 30px;
  }

  @media screen and (max-width: 1000px) {
    flex-wrap: wrap-reverse;

    & > div {
      min-width: 50%;
      width: 50%;
    }
  }
`;

const LeftContainer = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  min-width: 300px;

  button {
    width: fit-content;
    margin-top: auto;

    a {
      text-decoration: none;
    }
    @media screen and (max-width: 1000px) {
      margin-top: 1rem;
    }
  }
`;

const RightContainer = styled.div`
  width: 30%;
  position: relative;
`;

const ImageContainer = styled.div`
  width: 350px;
  height: 350px;
  overflow: hidden;
  border-radius: 20px;
  position: absolute;
  top: 10px;
  min-width: 300px;

  img {
    width: 100%;
    min-width: 300px;
  }

  @media screen and (max-width: 1000px) {
    position: relative;
    width: 100%;
  }
`;
