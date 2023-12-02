import styles from "./styles.module.css";
import PropTypes from "prop-types";

StatsDisplay.propTypes = {
  title: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired
}

export default function StatsDisplay(props) {
  return (
    <div className={styles.wrapper}>
        <p>{props.title}</p>
        <h2>{props.quantity}</h2>
    </div>
  );
}
