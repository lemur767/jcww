import Image from "next/image";
import styles from "./page.module.css";
import dramaMask from "/public/assets/dramamask.png";
import { Revalia } from 'next/font/google';

export default function Home() {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.text_wrapper_title}>
          <div className={styles.title}>Johnny Calimari Luchador Movie Review</div>
        </div>
        <div className={styles.image_wrapper_hero}>
          <Image
            className={styles.hero_logo}
            width={750}
            height={500}
            src={dramaMask}
            alt="Navigation logo"
          />
        </div>
      </div>
      <div>
        <div className={styles.construct} id="curator-feed-default-feed-layout"><a href="https://curator.io" target="_blank" className="crt-logo crt-tag">Powered by Curator.io</a></div>
        <script type="text/javascript">
        </script>
      </div>
    </>
  );
}
