"use client";
import styles from "./page.module.css";

export default function Home() {

    // Returning the static states of the home page with the applied styles

    return (
        <main className={styles.main}>
            <div className={styles.gradient}>
                <div className={styles.hero}></div>
            </div>
            <div className={styles.content}>
                <div className={styles.content__container}>
                    <p className={styles.content__container__text}>
                        Unlock the Power of Python:
                    </p>

                    <ul className={styles.content__container__list}>
                        <li className={styles.content__container__list__item}>
                            Learn !
                        </li>
                        <li className={styles.content__container__list__item}>
                            Plan !
                        </li>
                        <li className={styles.content__container__list__item}>
                            Code !
                        </li>
                        <li className={styles.content__container__list__item}>
                            Succeed !
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.lessonArea}>
                <h2 data-aos="fade-up">What is PyCode?</h2>
                <p data-aos="fade-up">PyCode is an education tool for students and teachers to teach students about what Python is and how it can be useful. We uses that latest Generative Artificial Intelligence to help students learn.</p>
            </div>
            <div className={styles.fluff}>
                <h1 className={styles.gotoDiv}>
                    Your go-to platform
                </h1>
                <h1 className={styles.gotoDiv}>
                    <span>&nbsp;for mastering Python</span>
                </h1>
            </div>
            <div className={styles.lessonArea}>
                <p data-aos="fade-up">
                    Master one of the world's most
                    versatile and in-demand programming languages.
                </p>
                <p data-aos="fade-up">
                    Whether you're a beginner taking your first steps in coding
                    or an experienced developer looking to sharpen your skills,
                    PyCode has something for everyone.
                </p>
            </div>
            <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
            <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
            <script>AOS.init();</script>
        </main>
    );
}
