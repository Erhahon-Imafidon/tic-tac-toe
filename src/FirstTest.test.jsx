import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import FirstTest from "./FirstTest";
import MockDataTest from "./MockDataTest";

test("Example 1 renders successfully", () => {
  render(<FirstTest />);

  const element = screen.getByText(/first test/i);

  expect(element).toBeInTheDocument();
});

test("List renders Succesfully", () => {
  render(<MockDataTest />);

  expect(screen.getByText(/fletcher/i)).toBeInTheDocument();
});
