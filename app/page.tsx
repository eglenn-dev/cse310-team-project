"use client";
import styles from "./page.module.css";
import Card from "./components/card";

export default function Home() {
    return (
        <main className={styles.main}>
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
        </main>
    );
}
