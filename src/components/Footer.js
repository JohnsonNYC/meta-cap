import React from "react";
import styled from "styled-components";
import Text from "./Text";
const Footer = () => {
  return (
    <Container>
      <ImageContainer>
        <img src="/footerLogo.png" alt="Lemon Icon" />
      </ImageContainer>

      <Column>
        <Button>
          <Text size="md" color="white" font="karla" weight="500">
            Home
          </Text>
        </Button>
        <Button>
          <Text size="md" color="white" font="karla" weight="500">
            About
          </Text>
        </Button>
        <Button>
          <Text size="md" color="white" font="karla" weight="500">
            Menu
          </Text>
        </Button>
        <Button>
          <Text size="md" color="white" font="karla" weight="500">
            Reservations
          </Text>
        </Button>
        <Button>
          <Text size="md" color="white" font="karla" weight="500">
            Order Online
          </Text>
        </Button>
        <Button>
          <Text size="md" color="white" font="karla" weight="500">
            Login
          </Text>
        </Button>
      </Column>

      <Column>
        <Text size="md" color="white" font="karla" weight="800">
          Contact
        </Text>
        <Text size="md" color="white" font="karla" weight="500">
          Address
        </Text>
        <Text size="md" color="white" font="karla" weight="500">
          Phone Number
        </Text>
        <Text size="md" color="white" font="karla" weight="500">
          Email
        </Text>
      </Column>

      <Column>
        <Text size="md" color="white" font="karla" weight="800">
          Social Media
        </Text>
        <Text size="md" color="white" font="karla" weight="500">
          Instagram
        </Text>
        <Text size="md" color="white" font="karla" weight="500">
          Twitter
        </Text>
        <Text size="md" color="white" font="karla" weight="500">
          Tiktok
        </Text>
      </Column>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 0;
  background: var(--green);
  gap: 2rem;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 0 1rem;
`;

const Button = styled.button`
  border: none;
  background: var(--green);
  font-size: 16px;
`;

const ImageContainer = styled.div`
  img {
    width: 100%;
  }
`;
