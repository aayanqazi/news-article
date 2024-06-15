import React, { act } from "react";
import { render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ArticleDetailsContainer from "../containers/ArticleDetailsContainer";
import { fetchMostViewedArticles } from "../api/api";
import { MemoryRouter, useParams } from "react-router-dom";

jest.mock("../api/api", () => ({
  fetchMostViewedArticles: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  useParams: jest.fn(),
}));

describe("ArticleDetailsContainer", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders loader when loading", async () => {
    useParams.mockReturnValueOnce({ id: "1" });
    fetchMostViewedArticles.mockResolvedValueOnce([
      { id: "1", title: "Article 1", media: [] },
    ]);
    const { getByRole } = render(<ArticleDetailsContainer />);

    expect(getByRole("loader")).toBeInTheDocument();

    await waitFor(() =>
      expect(fetchMostViewedArticles).toHaveBeenCalledTimes(1),
    );
  });

  // test("renders article details when data is loaded", async () => {
  //   const mockArticle = { id: "1", title: "Article 1", media: [] };
  //   useParams.mockReturnValueOnce({ id: "1" });
  //   fetchMostViewedArticles.mockResolvedValueOnce(mockArticle);
  //   // const { getByText } = render(<ArticleDetailsContainer />);
  //   await act(async () => {
  //     render(<ArticleDetailsContainer />);
  //   });
  //   await waitFor(() =>
  //     expect(screen.queryByTestId("loader")).not.toBeInTheDocument(),
  //   );
  //   await waitFor(() => expect(getByText("Article 1")).toBeInTheDocument());
  // });
});
