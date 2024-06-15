import React from "react";
import styles from "./Layout.module.css";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

const Layout = ({ children }) => (
  <div className={styles.layout}>
    <Header links={[{ name: "Home", url: "/" }]} />
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;
