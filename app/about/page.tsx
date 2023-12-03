// pages/about.tsx
import Link from "next/link";
import styles from "./styles.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <h1>About</h1>
      <p>
        Hi there! 👋 I'm Mithra, and I have a passion for learning new things. Recently, I delved into the exciting world of Next.js and created this project to showcase my skills and explore the capabilities of Next.js.
      </p>
      <Link href="/">Home Page</Link>
    </div>
  );
};

export default About;
