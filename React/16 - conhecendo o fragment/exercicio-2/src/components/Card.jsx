import Button from "./Button";
import Paragraph from "./Paragraph";
import Poster from "./Poster";
import Title from "./Title";
import styles from "../Card.module.css";

export default function Card() {
  return (
    <div className={styles.card}>
      <div className="poster">
        <Poster />
      </div>
      <div className="content">
        <Title />
        <Paragraph />
        <Button />
      </div>
    </div>
  );
}
