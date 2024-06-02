import * as React from "react";
import { Link } from "gatsby";
import * as styles from "../components/index.module.css";

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <Link to="/" className={styles.logo}>
      {siteTitle}
    </Link>
    <nav>
      <ul>
        <li><Link to="#">Dashboards</Link></li>
        <li><Link to="#">Data Science</Link></li>
        <li><Link to="#">Análise Exploratória</Link></li>
        <li><Link to="#">Templates</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;