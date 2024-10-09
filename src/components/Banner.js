import React from "react";
import styled from "styled-components";
import Text from "./Text";
import Button from "./Button";

const Banner = () => {
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
          <Text color="black" weight="800">
            Reserve a Table
          </Text>
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
`;

const LeftContainer = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  padding: 2rem 0;

  button {
    width: fit-content;
    margin-top: auto;
  }
`;

const RightContainer = styled.div`
  width: 30%;
  position: relative;
`;

const ImageContainer = styled.div`
  border: 1px solid red;
  width: 350px;
  height: 350px;
  overflow: hidden;
  border-radius: 20px;
  position: absolute;
  top: 10px;

  img {
    width: 100%;
  }
`;
