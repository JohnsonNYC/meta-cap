import React from "react";
import styled from "styled-components";
import Text from "./Text";
import Button from "./Button";

const specialsMenu = [
  {
    key: 1,
    name: "Greek Salad",
    price: "12.99",
    path: "/GreekSalad.jpg",
    description:
      " The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    key: 2,
    name: "Bruchetta",
    price: "5.99",
    path: "/Bruchetta.jpg",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    key: 3,
    name: "Lemon Dessert",
    price: "5.00",
    path: "LemonDessert.jpg",
    description:
      "This comes straight from grandma's recipr book every last ingredient has been sourced and is as authentic as ca be imagined.",
  },
];
const Specials = () => {
  return (
    <SpecialsContainer>
      <SpecialHeader>
        <Text size="xxl">This Weeks Specials!</Text>
        <Button>
          <Text color="black" weight="600">
            Online Menu
          </Text>
        </Button>
      </SpecialHeader>

      <CardsContainer>
        {specialsMenu.map((item) => (
          <Card key={item.key} foodItem={item} />
        ))}
      </CardsContainer>
    </SpecialsContainer>
  );
};

export default Specials;

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const SpecialsContainer = styled.div`
  padding-top: 10rem;
`;

const Card = ({ foodItem }) => {
  const { name, price, path, description } = foodItem || {};
  return (
    <CardContainer>
      <ImageContainer>
        <img src={path} alt={name} />
      </ImageContainer>
      <Title>
        <Text font="markazi" weight="600">
          {name}
        </Text>
        <Text color="orange" weight="600">
          {price}
        </Text>
      </Title>
      <Text>{description}</Text>

      <Text font="markazi" weight="500">
        Order a delivery
      </Text>
    </CardContainer>
  );
};

const SpecialHeader = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;

  & > span {
    border: 1px solid red;
    width: 52%;
  }
`;
const Title = styled.div`
  display: flex;
`;
const CardContainer = styled.div`
  border: 1px solid red;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  display: flex;
  flex-direction: column;
  max-width: 20vw;
  height: 50vh;
  overflow: hidden;

  & > span:last-of-type {
    border: 1px solid red;
    margin-top: auto;
    margin-bottom: 2rem;
  }
`;

const ImageContainer = styled.div`
  width: 100%;

  img {
    width: 100%;
    height: 100%;
  }
`;
