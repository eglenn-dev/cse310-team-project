"use client";
import styles from "./page.module.css";
import Card from "./components/card";

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.lessonArea}>
                <Card
                    title="Example"
                    description="Exampledescription"
                    iconPath="/next.svg"
                />
            </div>
        </main>
    );
}
