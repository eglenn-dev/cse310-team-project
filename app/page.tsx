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
                <h1 className={styles.synop_head}>Your go-to platform for mastering one of the world's most versatile and in-demand programming languages.</h1>
                <p className={styles.synop_body}>Whether you're a beginner taking your first steps in coding or an experienced developer looking to sharpen your skills, PyCode has something for everyone.</p>
                <h1 className={styles.synop_ex}>Why Choose PyCode?</h1>
                <div className={styles.synop_list}>
                    <li>Comprehensive Tutorials: Dive into our extensive library of tutorials, ranging from basic syntax and data structures to advanced topics like machine learning, data analysis, and web development. Each tutorial is designed to be clear, concise, and easy to follow.</li>
                    <li>Interactive Coding Exercises: Put theory into practice with our interactive coding exercises. Get instant feedback and see your progress in real-time as you solve problems and build projects.</li>
                    <li>Projects and Challenges: Apply your skills to real-world projects and coding challenges. Build everything from simple scripts to complex applications, and showcase your work in your portfolio.</li>
                </div>
            </div>
        </main>
    );
}
