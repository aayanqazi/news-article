import { useEffect, useState } from "react";
import { fetchMostViewedArticles } from "../api/api";
import { useParams } from "react-router-dom";
import ArticleDetails from "../components/ArticleDetails/ArticleDetails";
import Loader from "../components/Loader/Loader";

const ArticleDetailsContainer = () => {
  const [article, setArticle] = useState({});
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchMostViewedArticles();
      const selectedArticle = data.find((val) => val.id == id);
      setArticle(selectedArticle);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  return loading ? <Loader /> : <ArticleDetails article={article} />;
};

export default ArticleDetailsContainer;
