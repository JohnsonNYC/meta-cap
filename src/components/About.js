import React from "react";
import styled from "styled-components";
import Text from "./Text";

const About = () => {
  return (
    <Container>
      <Split>
        <Text weight="500" size="xl" font="markazi">
          Little Lemon
        </Text>

        <Text weight="200" size="xl" font="markazi">
          Chicago
        </Text>

        <Text></Text>
      </Split>
      <Split>Right</Split>
    </Container>
  );
};

export default About;

const Container = styled.div`
  border: 1px solid red;
  padding: 5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Split = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
`;
