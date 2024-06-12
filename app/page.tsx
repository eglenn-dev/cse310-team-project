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
            <div>
                <h1 className={styles.synopsis_head}>
                    Your go-to platform for mastering one of the world's most
                    versatile and in-demand programming languages.
                </h1>
                <p className={styles.synopsis_body}>
                    Whether you're a beginner taking your first steps in coding
                    or an experienced developer looking to sharpen your skills,
                    PyCode has something for everyone.
                </p>
            </div>
        </main>
    );
}
