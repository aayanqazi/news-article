import React from "react";
import ArticleList from "./ArticleList";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
test("renders when no article found", () => {
  const { getByText } = render(<ArticleList />);

  expect(getByText("No Article Found")).toBeInTheDocument();
});

test("renders articles", () => {
  const articles = [
    { id: 1, title: "Article 1", media: [] },
    { id: 2, title: "Article 2", media: [] },
  ];

  const { getByText } = render(
    <MemoryRouter>
      <ArticleList articles={articles} />
    </MemoryRouter>,
  );

  expect(getByText("Article 1")).toBeInTheDocument();
  expect(getByText("Article 2")).toBeInTheDocument();
});
