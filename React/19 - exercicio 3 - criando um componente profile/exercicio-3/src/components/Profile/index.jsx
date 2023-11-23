import styles from "./styles.module.css";
import Button from "../Button";

// eslint-disable-next-line react/prop-types
export default function Profile({ avatar, name, bio, email, phone, githubUrl, linkedinUrl, instagramUrl }) {
  return (
    <div className={styles.container}>
      <img src={avatar} alt={name + "Avatar"} className={styles.image} />
      <h2>{name}</h2>
      <p>{bio}</p>
      <p>{phone}</p>
      <p>{email}</p>
      <div className={styles.buttons}>
        <Button text="GitHub" link={githubUrl} />
        <Button text="Linkedin" link={linkedinUrl} />
        <Button text="Instagram" link={instagramUrl} />
      </div>
    </div>
  )
}
