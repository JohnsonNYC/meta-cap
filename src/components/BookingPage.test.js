import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import BookingPage from "./BookingPage";
import { convertTimeFormat } from "../utils/dates";
import * as api from "../utils/api";

jest.mock("../utils/api");

describe("BookingPage Component", () => {
  const mockedTimes = ["17:00", "18:00", "19:00"];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Should call fetchAPI", async () => {
    api.fetchAPI.mockReturnValue(mockedTimes);
    render(<BookingPage />);

    expect(api.fetchAPI).toHaveBeenCalledTimes(1);

    await waitFor(() => {
      convertTimeFormat(mockedTimes).forEach((time) => {
        expect(screen.getByText(time)).toBeInTheDocument();
      });
    });
  });

  test("Render Booking Page", () => {
    render(<BookingPage />);
    const el = screen.getByText(/Little Lemon/i);
    expect(el).toBeInTheDocument();
  });

  test("renders ReservationBanner component", () => {
    render(<BookingPage />);
    const guestLabel = screen.getByLabelText(/Number of Guests/i);
    expect(guestLabel).toBeInTheDocument();
  });

  test("renders TimeSelection component", () => {
    render(<BookingPage />);
    const timeLabel = screen.getByText(/Select a Time/i);
    expect(timeLabel).toBeInTheDocument();
  });

  test("renders Footer component", () => {
    render(<BookingPage />);
    const footerText = screen.getByText(/Tiktok/i); // Adjust the text to match your Footer content
    expect(footerText).toBeInTheDocument();
  });

  // test("opens modal when all fields are filled", () => {
  //   // Add a modal root div to the DOM for React Portals
  //   const modalRoot = document.createElement("div");
  //   modalRoot.setAttribute("id", "portal-root");
  //   document.body.appendChild(modalRoot);

  //   render(<BookingPage />);

  //   const guestInput = screen.getByLabelText(/Number of Guests/i);
  //   fireEvent.change(guestInput, { target: { value: 4 } });

  //   const dateInput = screen.getByLabelText(/Date/i);
  //   fireEvent.change(dateInput, { target: { value: "2024-10-17" } });

  //   const timeInput = screen.getByText(/10:00 PM/i);
  //   fireEvent.click(timeInput);

  //   const modal = screen.getByText("Complete Your Reservation");
  //   expect(modal).toBeInTheDocument();

  //   document.body.removeChild(modalRoot);
  // });
});
