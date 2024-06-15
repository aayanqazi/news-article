import React from "react";
import { Header } from "./Header";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

const mockLinks = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
  { name: "Contact", url: "/contact" },
];
test("renders header with links", () => {
  const { getByText } = render(
    <MemoryRouter>
      <Header links={mockLinks} />
    </MemoryRouter>,
  );

  expect(getByText("Most Viewed Articles")).toBeInTheDocument();

  mockLinks.forEach((link) => {
    expect(getByText(link.name)).toBeInTheDocument();
    expect(getByText(link.name).closest("a")).toHaveAttribute("href", link.url);
  });
});

test("renders header without links", () => {
  const { getByText, queryByText } = render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>,
  );

  expect(getByText("Most Viewed Articles")).toBeInTheDocument();

  mockLinks.forEach((link) => {
    expect(queryByText(link.name)).not.toBeInTheDocument();
  });
});
