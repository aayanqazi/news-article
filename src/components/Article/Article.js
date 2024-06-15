import { Link } from "react-router-dom";
import styles from "./Article.module.css";

const Article = ({ data }) => {
  const { title, media, id } = data;
  const thumnailImage = media?.[0]?.["media-metadata"]?.at(-1);
  return (
    <Link to={`/article/${id}`} className={styles.article}>
      <div className={styles.box}>
        <img src={thumnailImage?.url} alt={title} />
        <h2>{title}</h2>
      </div>
    </Link>
  );
};

export default Article;
