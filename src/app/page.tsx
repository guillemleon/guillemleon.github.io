import styles from "./page.module.css";
import SidePanel from "@/components/sidepanel/sidepanel";

export default function Home() {
  return (
    <main className={styles.main}>
      <SidePanel currentLevel={1} levels={4} />
    </main>
  );
}
