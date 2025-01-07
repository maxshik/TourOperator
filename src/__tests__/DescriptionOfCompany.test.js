import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Description from "../site_pages/about_us/components/DescriptionOfCompany";

describe("Description component", () => {
  test("renders the correct text", () => {
    render(<Description />);
    expect(screen.getByText("Туроператор «Santionshit»")).toBeInTheDocument();
    expect(screen.getByText("2011")).toBeInTheDocument();
    expect(screen.getByText("комфортным")).toBeInTheDocument();
    expect(screen.getByText("интересным")).toBeInTheDocument();
    expect(screen.getByText("безопасным")).toBeInTheDocument();
    expect(screen.getByText("проверенными партнерами")).toBeInTheDocument();
    expect(screen.getByText("гарантируем")).toBeInTheDocument();
  });
});
