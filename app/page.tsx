"use client";
import styles from "./page.module.css";
import Card from "./components/card";

export default function Home() {
    return (
        <main className={styles.main}>
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
                <Card
                    title="L1: Variables"
                    description="Learn how to declare and use variables in Python."
                    iconPath="/container.svg"
                    href="/lesson01"
                    outbound={false}
                    target=""
                />
            </div>
            <div classname={styles.gotoBody}>
                <h1 className={styles.gotoDiv}>
                    Your go-to platform
                </h1>
                <h1 className={styles.gotoDiv}>
                    <span>&nbsp;for mastering Python</span>
                </h1>
                <div className={styles.synop_body}>
                    Master one of the world's most
                    versatile and in-demand programming languages.
                </div>
                <p className={styles.synop_body}>
                    Whether you're a beginner taking your first steps in coding
                    or an experienced developer looking to sharpen your skills,
                    PyCode has something for everyone.
                </p>
            </div>
        </main>
    );
}
