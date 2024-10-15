import React from "react";
import styled from "styled-components";

const Button = ({ children, onClick, bgColor = "yellow", ...rest }) => {
  return (
    <StyledButton onClick={onClick} color={bgColor} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  background-color: ${(props) => `var(--${props.color})`};
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    scale: 1.1;
  }
`;
