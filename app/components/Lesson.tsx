"use client";

import styles from "./Lesson.module.css";
import CodeEditor from "./CodeEditor";
import PythonCodeChunk from "./PythonCodeChunk";
import React, { useState } from "react";

interface LessonDataProps {
    lessonData: {
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

    const [editorCode, setEditorCode] = useState("");
    const handleCodeChange = (newCode: string) => {
        setEditorCode(newCode);
    };

    const handleCodeSubmission = () => {
        fetch('/api/ai', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                input_prompt: editorCode,
            }),
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error));
    }

    return (
        <div className={styles.lessonArea}>
            <div className={styles.header}>
                <h1>{lessonData.lessonData.title}</h1>
                <p>{lessonData.lessonData.description}</p>
            </div>
            <span className={styles.headerGap}></span>
            {lessonData.lessonData.checkpoints.map(
                (checkpoint: any, index: number) => (
                    <div className={styles.checkpoint}>
                        <h2>{checkpoint.title}</h2>
                        <p>{checkpoint.description}</p>
                        <PythonCodeChunk inputCode={checkpoint.codeExample} />
                        <div className={styles.exerciseArea}>
                            <h3>Try your knowledge</h3>
                            <p>{checkpoint.goal}</p>
                            <CodeEditor exampleCode={checkpoint.exercise} onCodeChange={handleCodeChange} />
                        </div>
                        <div className={styles.submissionButton} onClick={handleCodeSubmission}>
                            Check with AI
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                height="1em"
                                width="1em"
                            >
                                <path
                                    fill="currentColor"
                                    d="M15 5.25A3.25 3.25 0 0 0 18.25 2h1.5A3.25 3.25 0 0 0 23 5.25v1.5A3.25 3.25 0 0 0 19.75 10h-1.5A3.25 3.25 0 0 0 15 6.75zM4 7a2 2 0 0 1 2-2h7V3H6a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-5h-2v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"
                                />
                            </svg>
                        </div>
                    </div>
                )
            )}
        </div>
    );
};

export default Lesson;
