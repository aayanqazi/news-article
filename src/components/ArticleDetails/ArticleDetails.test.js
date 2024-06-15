import React from "react";
import ArticleDetails from "./ArticleDetails";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

const mockArticle = {
  title: "Article Title",
  abstract: "Article Abstract",
  media: [
    {
      "media-metadata": [
        { url: "http://example.com/image1.jpg" },
        { url: "http://example.com/image2.jpg" },
        { url: "http://example.com/image3.jpg" },
      ],
    },
  ],
};
test("renders article details correctly", () => {
  const { getByText, getByRole } = render(
    <MemoryRouter>
      <ArticleDetails article={mockArticle} />
    </MemoryRouter>,
  );

  expect(getByRole("img")).toHaveAttribute(
    "src",
    "http://example.com/image3.jpg",
  );

  expect(getByText("Article Title")).toBeInTheDocument();

  expect(getByText("Article Abstract")).toBeInTheDocument();
});

test("renders without article", () => {
  const { queryByRole, queryByText } = render(
    <MemoryRouter>
      <ArticleDetails article={null} />
    </MemoryRouter>,
  );

  // Check if the title, image, and abstract are not rendered
  expect(queryByRole("img")).not.toBeInTheDocument();
  expect(queryByText("Test Article Title")).not.toBeInTheDocument();
  expect(queryByText("Test Article Abstract")).not.toBeInTheDocument();
});
