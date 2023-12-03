import Link from "next/link";
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Home Page</h1>
      <p className={styles.paragraph}>
        <Link href="/users">Users</Link>
      </p>
      <p>
        <Link href="/about">
          <span className={styles.link}>About</span>
        </Link>
      </p>
    </main>
  );
}
