import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom'
import "@testing-library/jest-dom/extend-expect";
import Footer from "../site_pages/layout/components/Footer";
describe("Footer component", () => {
  test("renders the correct elements", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    // Проверьте, что все ожидаемые элементы отображаются
    expect(screen.getByText("ООО «SANTIONSHIT» © 2023")).toBeInTheDocument();
    expect(screen.getByText("г. Минск, ул. Свердлова 13а, пав. 301-1")).toBeInTheDocument();
    expect(screen.getByText("+375 (25) 511-90-22")).toBeInTheDocument();
    expect(screen.getByText("maximshikunets@gmail.com")).toBeInTheDocument();
  });
});
