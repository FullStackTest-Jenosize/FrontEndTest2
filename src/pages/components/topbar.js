import Image from "next/image";
import styles from "../../styles/topbar.module.css";

const TopBar = () => {
  return (
    <div>
      <div className={styles.topbar}>
        <Image src="/logoimage.png" width={70} height={70} alt="Logo" />
        <h1>Find The Restuarants</h1>
      </div>
    </div>
  );
};

export default TopBar;
