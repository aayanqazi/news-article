import { useEffect, useState } from "react";
import { fetchMostViewedArticles } from "../api/api";
import ArticleList from "../components/ArticleList/ArticleList";
import Loader from "../components/Loader/Loader";

const ArticleListContainer = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchMostViewedArticles();
      setArticles(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return loading ? <Loader /> : <ArticleList articles={articles} />;
};

export default ArticleListContainer;
