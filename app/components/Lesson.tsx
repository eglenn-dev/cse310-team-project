"use client";
import styles from "./Lesson.module.css";
import CodeEditor from "./CodeEditor";
import PythonCodeChunk from "./PythonCodeChunk";
import React, { useState } from "react";
import Link from "next/link";

// Props for the lesson data
interface LessonDataProps {
    lessonData: {
        lesson: number;
        title: string;
        description: string;
        checkpoints: {
            title: string;
            description: string;
            codeExample: string;
            goal: string;
            exercise: string;
        }[];
    };
}

const Lesson: React.FC<LessonDataProps> = (lessonData) => {
    // Return the lesson with all the checkpoints
    return (
        <div className={styles.lessonArea}>
            <div className={styles.header}>
                <h1>{lessonData.lessonData.title}</h1>
                <p>{lessonData.lessonData.description}</p>
            </div>
            <span className={styles.headerGap}></span>
            {/* Mapping the array of the lessons generate the components depending on the size of the lesson */}
            {lessonData.lessonData.checkpoints.map(
                (checkpoint: any, index: number) => (
                    <div className={styles.checkpoint}>
                        <h2>{checkpoint.title}</h2>
                        <p>{checkpoint.description}</p>
                        <PythonCodeChunk inputCode={checkpoint.codeExample} />
                        <div className={styles.exerciseArea}>
                            <h3>Try your knowledge</h3>
                            <p>{checkpoint.goal}</p>
                            <CodeEditor exampleCode={checkpoint.exercise} checkPointGoal={checkpoint.goal} />
                        </div>
                    </div>
                )
            )}
            <Link href={`/lesson0${lessonData.lessonData.lesson + 1}#`}>Next Lesson</Link>
        </div>
    );
};

export default Lesson;
