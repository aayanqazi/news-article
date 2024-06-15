import React from "react";
import Layout from "./Layout";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

test("renders header with links", () => {
  const mockChildren = <div>Children</div>;
  const { getByText } = render(
    <MemoryRouter>
      <Layout>{mockChildren}</Layout>
    </MemoryRouter>,
  );

  expect(getByText("Home")).toBeInTheDocument();
  expect(getByText("Most Viewed Articles")).toBeInTheDocument();
  expect(getByText("Children")).toBeInTheDocument();
  expect(getByText("© 2024 Copyright")).toBeInTheDocument();
  expect(getByText("Terms of Services")).toBeInTheDocument();
  expect(getByText("Privacy")).toBeInTheDocument();
});
