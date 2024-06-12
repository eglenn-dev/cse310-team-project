"use client";
import styles from "./page.module.css";
import Card from "./components/card";

export default function Home() {
    return (
        <main className={styles.main}>
            <h1 className={styles.fhead}>Welcome to Pycode!</h1>
            <div className={styles.content}>
                <div className={styles.content__container}>
                    <p className={styles.content__container__text}>
                        Unlock the Power of Python:
                    </p>
    
                    <ul className={styles.content__container__list}>
                        <li className={styles.content__container__list__item}>Learn !</li>
                        <li className={styles.content__container__list__item}>Plan !</li>
                        <li className={styles.content__container__list__item}>Code !</li>
                        <li className={styles.content__container__list__item}>Succeed !</li>
                    </ul>
                </div>
            </div>
            <div className={styles.lessonArea}>
                <Card
                    title="For Loops"
                    description="Learn the benefits and applications of for loops."
                    iconPath="/next.svg"
                    href="/example"
                    target=""
                    outbound={false}
                />
                <Card
                    title="If Statements"
                    description="Learn the basics of If statements and conditionals."
                    iconPath="/next.svg"
                    href="/example"
                    target=""
                    outbound={false}
                />
                <Card
                    title="Inputs and Types"
                    description="Learn the difference between inputs and types."
                    iconPath="/next.svg"
                    href="/example"
                    target=""
                    outbound={false}
                />
            </div>
            <div>
                <h1 className={styles.synopsis_head}>Your go-to platform for mastering one of the world's most versatile and in-demand programming languages.</h1>
                <p className={styles.synopsis_body}>Whether you're a beginner taking your first steps in coding or an experienced developer looking to sharpen your skills, PyCode has something for everyone.</p>
                
            </div>
        </main>
    );
}
