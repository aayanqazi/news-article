import axios from "axios";
import { fetchMostViewedArticles } from "./api";
jest.mock("axios");

describe("fetchMostViewedArticles", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("fetches articles successfully", async () => {

    const mockData = {
      data: {
        results: [
          { id: 1, title: "Article 1", media: [] },
          { id: 2, title: "Article 2", media: [] },
        ],
      },
    };
    axios.get.mockResolvedValue(mockData);

    const result = await fetchMostViewedArticles();

    expect(axios.get).toHaveBeenCalledWith(
      `https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=${process.env.REACT_APP_API_KEY}`,
    );
    expect(result).toEqual(mockData.data.results);
  });

  test('handles errors', async () => {
    axios.get.mockRejectedValueOnce(new Error('Network Error'));

    const result = await fetchMostViewedArticles();

    expect(axios.get).toHaveBeenCalledWith(
      `https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=${process.env.REACT_APP_API_KEY}`
    );
    expect(result).toEqual([]);
  });
});
