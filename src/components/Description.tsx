import styles from "./Description.module.css";

export default function Description() {
  return (
    <div className={styles.description}>
      <p>
        <code className={styles.code}>Explore, Build & Collaborate</code>
        &nbsp;on mini MVP apps
      </p>
    </div>
  );
}
