import React from "react";
import { render, waitFor } from "@testing-library/react";
import ArticleListContainer from "../containers/ArticleListContainer";
import { fetchMostViewedArticles } from "../api/api";
import { MemoryRouter } from "react-router-dom";

jest.mock("../api/api", () => ({
  fetchMostViewedArticles: jest.fn(),
}));

describe("ArticleListContainer", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders loader when loading", async () => {
    fetchMostViewedArticles.mockResolvedValueOnce([]);
    const { getByRole } = render(<ArticleListContainer />);

    expect(getByRole("loader")).toBeInTheDocument();

    await waitFor(() =>
      expect(fetchMostViewedArticles).toHaveBeenCalledTimes(1),
    );
  });

  test("renders article list when data is loaded", async () => {
    const mockArticles = [
      { id: 1, title: "Article 1", media: [] },
      { id: 2, title: "Article 2", media: [] },
    ];
    fetchMostViewedArticles.mockResolvedValueOnce(mockArticles);
    const { queryByRole, getByText } = render(
      <MemoryRouter>
        <ArticleListContainer />
      </MemoryRouter>,
    );

    await waitFor(() => expect(queryByRole("loader")).not.toBeInTheDocument());

    expect(getByText("Article 1")).toBeInTheDocument();
  });
});
