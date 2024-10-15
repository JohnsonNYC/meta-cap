import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const modalVariant = {
  hidden: { x: "100%", opacity: 0 }, // Start from the right
  visible: { x: "0%", opacity: 1 }, // Slide into view
  exit: { x: "100%", opacity: 0 }, // Slide out to the right
};

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <ModalOverlay onClick={onClose}>
      <ModalContent
        onClick={(e) => e.stopPropagation()}
        variants={modalVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <X onClick={onClose} />
        {children}
      </ModalContent>
    </ModalOverlay>,
    document.getElementById("portal-root")
  );
};

export default Modal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 70vw;
  height: 90vh;

  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto 0;

  & > svg {
    position: fixed;
    right: 5px;
    top: 5px;
    cursor: pointer;

    &:hover {
      path {
        stroke: var(--orange);
      }
    }
  }
`;
