"use client";

import { useEffect, useState } from "react";
import Lesson from "../components/Lesson";

export default function Lesson01() {
    const [lessonData, setLessonData] = useState({} as any);

    useEffect(() => {
        const fetchData = async () => {
            const lessonNumber = 1;
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
                Loading...
            </div>
        );
    }

    return (
        <div>
            <Lesson lessonData={lessonData} />
        </div>
    );
}
