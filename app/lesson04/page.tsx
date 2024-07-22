"use client";

import { useEffect, useState } from "react";
import Lesson from "../components/Lesson";
import styles from "./page.module.css";

export default function Lesson01() {
    const [lessonData, setLessonData] = useState({} as any);

    // Fetching the data for the lesson
    useEffect(() => {
        const fetchData = async () => {
            const lessonNumber = 4;
            const data = await fetch(`/api/lesson?number=${lessonNumber}`);
            const json = await data.json();
            setLessonData(json);
        };
        fetchData();
    }, []);

    if (!lessonData.checkpoints) {
        return (
            <div
                style={{
                    height: "75vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "2em",
                    color: "black",
                    backgroundColor: "white",
                }}
            >
                <div className={styles.loader}>
                    <div data-glitch="Loading..." className={styles.glitch}>
                        Loading...
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <Lesson lessonData={lessonData} />
        </div>
    );
}
