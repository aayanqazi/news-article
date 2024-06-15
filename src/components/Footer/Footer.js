import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.container}>
        <li className={styles.item}>© 2024 Copyright</li>
        <li className={styles.separator} />
        <li className={styles.item}>Terms of Services</li>
        <li className={styles.separator} />
        <li className={styles.item}>Privacy</li>
      </ul>
    </footer>
  );
};
