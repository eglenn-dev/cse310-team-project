"use client";
import styles from "./page.module.css";
import Card from "./components/card";

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.welcomeMessage}>
                <h1>Welcome to PyCode Educator!</h1>
                <p>
                    PyCode Educator is a platform for learning Python
                    programming language. You can learn Python by following the
                    lessons provided here.
                </p>
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
        </main>
    );
}
