import React from "react";
import styled from "styled-components";

const sizeMap = { sm: "16px", md: "18px", lg: "20px", xl: "32px", xxl: "48px" };
const fontMap = { karla: "Karla", markazi: "Markazi Text" };

const Text = ({
  children,
  as = "span",
  size = "md",
  font = "karla",
  weight = 100,
  color,
}) => {
  return (
    <StyledText as={as} size={size} font={font} weight={weight} color={color}>
      {children}
    </StyledText>
  );
};

export default Text;

const StyledText = styled.div`
  font-size: ${(props) => sizeMap[props.size]};
  font-family: ${(props) => fontMap[props.font]};
  font-weight: ${(props) => props.weight};
  color: ${(props) => `var(--${props.color})`};
`;
