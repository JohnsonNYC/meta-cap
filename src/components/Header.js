import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <ImageContainer>
        <img src="/LemonIcon.jpg" alt="Little Lemon" />
      </ImageContainer>

      <Container>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
      </Container>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const Container = styled.nav`
  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  li {
    list-style-type: none;
    margin: 0 8px;
    font-family: "Karla", sans-serif;
    font-size: 18px;
    // font-family: "Markazi Text", serif;
  }
`;

const ImageContainer = styled.div`
  width: 180px;
  height: auto;

  img {
    width: 100%;
  }
`;
