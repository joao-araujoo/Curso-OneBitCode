import styles from "./styles.module.css";

// eslint-disable-next-line react/prop-types
export default function Button({ text, link }) {
  return (
    <a className={styles.button} href={link} target="_blank" rel="noreferrer">
      {text}
    </a>
  );
}
