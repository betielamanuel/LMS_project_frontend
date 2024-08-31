import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          {" "}
          Master the RBT Exam with Comprehensive Study Guides and Practice Test
        </h1>
        <p className={styles.description}>
          Interactive modules, progress tracking, and unlimited practice test to
          help you succeed.
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Sign Up for Free
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
