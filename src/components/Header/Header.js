import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export const Header = ({ links = [] }) => {
  return (
    <header className={styles.header}>
      <h5>Most Viewed Articles</h5>
      {links.map((link, ind) => (
        <Link key={`${link.name}-${ind}`} to={link.url}>
          {link.name}
        </Link>
      ))}
    </header>
  );
};
