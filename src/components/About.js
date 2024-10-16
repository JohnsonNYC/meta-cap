import React from "react";
import styled from "styled-components";
import Text from "./Text";

const About = () => {
  return (
    <Container>
      <Split className="left">
        <Text weight="500" size="xxl" font="markazi">
          Little Lemon
        </Text>

        <Text weight="200" size="xl" font="markazi">
          Chicago
        </Text>

        <Text weight="300" size="md" style={{ marginTop: "4rem" }}>
          Little lemon is a charming neighborhood bistro that serves simples
          food and classic cocktails in a lively but casual environment. The
          restaurant features a lcoally sourced menu with daily specials. Little
          lemon is a charming neighborhood bistro that serves simples food and
          classic cocktails in a lively but casual environment. The restaurant
          features a lcoally sourced menu with daily specials.
        </Text>
      </Split>

      <Split>
        <ImageContainer className="adrian">
          <img src="/Rectangle5.png" alt="Adrian" />
        </ImageContainer>
        <ImageContainer className="mario">
          <img src="/Rectangle6.png" alt="Mario" />
        </ImageContainer>
      </Split>
    </Container>
  );
};

export default About;

const ImageContainer = styled.div`
  height: 300px;
  width: 300px;
  overflow: hidden;
  border-radius: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &.mario {
    position: absolute;
    top: -4rem;
    right: 0;
  }

  &.adrian {
    z-index: 1;
  }
`;
const Container = styled.div`
  padding: 5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const Split = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
  position: relative;

  &.left {
    padding: 0.5rem;
  }
`;
