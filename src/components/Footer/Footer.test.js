import React from "react";
import { Footer } from "./Footer";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

test("renders footer items", () => {
  const { getByText } = render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>,
  );

  expect(getByText("© 2024 Copyright")).toBeInTheDocument();
  expect(getByText("Terms of Services")).toBeInTheDocument();
  expect(getByText("Privacy")).toBeInTheDocument();
});
