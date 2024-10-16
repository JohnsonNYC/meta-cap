import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useMediaPredicate } from "../utils/hooks";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Header = () => {
  const isMobile = useMediaPredicate("(max-width: 800px)");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isMobile) setIsOpen(false);
  }, [isMobile]);

  return (
    <>
      <HeaderContainer>
        <Wrapper>
          <ImageContainer>
            <img src="/LemonIcon.jpg" alt="Little Lemon" />
          </ImageContainer>

          <Container>
            {isMobile ? (
              <motion.div
                onClick={() => setIsOpen(!isOpen)}
                aria-label="On Click"
              >
                {isOpen ? (
                  <motion.div initial={{ rotate: 90 }} animate={{ rotate: 0 }}>
                    <X />
                  </motion.div>
                ) : (
                  <motion.div initial={{ rotate: -90 }} animate={{ rotate: 0 }}>
                    <Menu />
                  </motion.div>
                )}
              </motion.div>
            ) : (
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>About</li>
                <li>Menu</li>
                <li>
                  <a href="/booking">Reservations</a>
                </li>
                <li>Order Online</li>
                <li>Login</li>
              </ul>
            )}
          </Container>
        </Wrapper>

        <Dropdown
          initial={{ height: 0 }}
          animate={{ height: isOpen ? "auto" : "0" }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          style={{ overflow: "hidden", padding: isOpen ? "1rem" : "0" }}
        >
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>
              <a href="/booking">Reservations</a>
            </li>
            <li>Order Online</li>
            <li>Login</li>
          </ul>
        </Dropdown>
      </HeaderContainer>
    </>
  );
};

export default Header;

const HeaderContainer = styled.div`
  position: relative;
`;

const Dropdown = styled(motion.div)`
  background: var(--yellow);
  position: absolute;
  left: 0;
  right: 0;
  z-index: 10;
`;

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  @media screen and (max-width: 1000px) {
    justify-content: space-between;
    padding: 1rem 2rem;
  }
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
    font-size: 24px;
    font-family: "Markazi Text", serif;

    a:visited {
      color: black;
    }
  }

  a {
    text-decoration: none;
  }
`;

const ImageContainer = styled.div`
  width: 180px;
  height: auto;

  img {
    width: 100%;
  }
`;
