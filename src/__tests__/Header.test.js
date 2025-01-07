import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom'
import "@testing-library/jest-dom/extend-expect";
import Header from "../site_pages/layout/components/Headers";
describe("Header component", () => {
  test("renders the correct elements and handles click event", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getByText("Главная")).toBeInTheDocument();
    expect(screen.getByText("О нас")).toBeInTheDocument();
    expect(screen.getByText("Туры")).toBeInTheDocument();
    expect(screen.getByText("Контакты")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Контакты"));
    expect(screen.getByText("Контакты")).toBeInTheDocument();
  });
});
