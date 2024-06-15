import React from "react";
import Article from "./Article";
import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
test("renders article title and thumbnail image", () => {
  const mockData = {
    id: 1,
    title: "Article 1",
    media: [
      {
        "media-metadata": [
          { url: "https://example.com/small.jpg" },
          { url: "https://example.com/medium.jpg" },
          { url: "https://example.com/large.jpg" },
        ],
      },
    ],
  };

  const { getByText, getByRole } = render(
    <MemoryRouter>
      <Article data={mockData} />
    </MemoryRouter>,
  );

  expect(getByText("Article 1")).toBeInTheDocument();
  const img = getByRole("img", { name: /Article 1/i });
  expect(img).toHaveAttribute("src", "https://example.com/large.jpg");
});
