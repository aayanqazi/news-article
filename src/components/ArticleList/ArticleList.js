import Article from "../Article/Article";
import styles from "./ArticleList.module.css";

const ArticleList = ({ articles = [] }) => {
  return (
    <div className={styles.articleList}>
      {articles.length ? (
        articles.map((article, ind) => <Article key={ind} data={article} />)
      ) : (
        <div>
          <h2>No Article Found</h2>
        </div>
      )}
    </div>
  );
};

export default ArticleList;
