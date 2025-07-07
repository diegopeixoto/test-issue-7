import Image from "next/image";
import styles from "./page.module.css";
import AnimationBackground from "./AnimationBackground";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
    <AnimationBackground />
    </main>
    </div>
  );
}
