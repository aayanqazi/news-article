import styles from "./ArticleDetails.module.css";

const ArticleDetails = ({ article }) => {
  const { media, title, abstract } = article || {};
  const thumnailImage = media?.[0]?.["media-metadata"]?.at(-1);

  if (!article) {
    return null;
  }

  return (
    <div className={styles.articleDetails}>
      <img src={thumnailImage?.url} />
      <h1>{title}</h1>
      <p>{abstract}</p>
    </div>
  );
};

export default ArticleDetails;
