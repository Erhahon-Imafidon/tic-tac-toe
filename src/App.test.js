import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

test("Should render home component when '/' Route is accesed", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );

  const homeComponent = screen.getByText(/counters that update/i);

  expect(homeComponent).toBeInTheDocument();
});

test("Should render hooks component when '/hooks' Route is accesed", () => {
  render(
    <MemoryRouter initialEntries={["/hooks"]}>
      <App />
    </MemoryRouter>
  );

  const hookComponent = screen.getByRole("button");

  expect(hookComponent).toBeInTheDocument();
});

test('Should render the Game component when "/tic-tac" Route is accesed', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  const gameComponent = screen.getByText(/game/i);

  expect(gameComponent).toBeInTheDocument();
});
