import TopBar from "./components/topbar";
import Body from "./components/body";
import Footer from "./components/footer";
import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <TopBar />
        <Body />
      <Footer />
    </div>
  );
}
