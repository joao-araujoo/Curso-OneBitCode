import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h2>REACT STOCK</h2>
      <nav className={styles.navigation}>
        <Link to="/">Início</Link>
        <Link to="/items">Items</Link>
      </nav>
    </header>
  );
}
