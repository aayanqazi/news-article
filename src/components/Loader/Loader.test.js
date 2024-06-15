import React from "react";
import { render } from "@testing-library/react";
import Loader from "./Loader";

test("renders loader correctly", () => {
  const { getByRole } = render(<Loader />);

  const loaderElement = getByRole("loader");
  expect(loaderElement).toBeInTheDocument();

  expect(loaderElement).toHaveClass("loader");
});
