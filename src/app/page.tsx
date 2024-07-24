import styles from "./page.module.scss";
import { HomeContainer } from "@/components/HomeContainer";

export default function Home() {
  return (
    <div className={styles.home}>
      <HomeContainer />
    </div>
  );
}
