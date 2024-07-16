"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./CodeEditor.module.css";
import MarkdownIt from "markdown-it";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-javascript.js";
import "prismjs/components/prism-python.js";
import "prismjs/components/prism-jsx.js";

interface CodeEditorProps {
    exampleCode: string;
    checkPointGoal: string;
    onCodeChange: (newCode: string, prompt_goal: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ exampleCode, checkPointGoal, onCodeChange }) => {
    const originalCode = exampleCode;

    const [code, setCode] = useState(exampleCode);
    const codeEditorRef = useRef<HTMLTextAreaElement>(null);
    const [aiResponse, setAiResponse] = useState("");
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        onCodeChange(code, checkPointGoal);
    }, [code, onCodeChange]);

    useEffect(() => {
        Prism.highlightAll();
    }, []);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            const currentLine = code
                .substring(0, codeEditorRef.current!.selectionStart)
                .split("\n").length;
            setCode(code + "\n");
            codeEditorRef.current!.selectionStart =
                codeEditorRef.current!.selectionEnd = code.length + 1;
            const indentationLevel = code
                .substring(0, codeEditorRef.current!.selectionStart)
                .match(/^\s*/)![0].length;
            setCode(
                code.substring(0, codeEditorRef.current!.selectionStart) +
                " ".repeat(indentationLevel) +
                code.substring(codeEditorRef.current!.selectionStart)
            );
        } else if (event.key === "Tab") {
            event.preventDefault();
            setCode(
                code.substring(0, codeEditorRef.current!.selectionStart) +
                "  " +
                code.substring(codeEditorRef.current!.selectionEnd)
            );
            codeEditorRef.current!.selectionStart =
                codeEditorRef.current!.selectionEnd =
                codeEditorRef.current!.selectionStart + 2;
        }
    };

    const handleCodeSubmission = () => {
        const fetchResponse = async () => {
            const response = await fetch('/api/ai', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    input_prompt: code,
                    prompt_goal: checkPointGoal,
                    original_code: originalCode,
                }),
            });
            const data = await response.json();
            console.log(data);
            const md = new MarkdownIt();
            setAiResponse(md.render(data.response.candidates[0].content.parts[0].text));
        };
        fetchResponse();
    }

    useEffect(() => {
        if (aiResponse) {
            setShowPopup(true);
        }
    }, [aiResponse]);

    return (
        <div>
            <p>Use Shift + Enter to create a new line.</p>
            <textarea
                className={styles.textArea}
                id="codeEditor"
                ref={codeEditorRef}
                value={code}
                onChange={(e) => setCode(e.target.value)}
                onKeyDown={handleKeyDown}
                style={{
                    width: "80%",
                    height: "400px",
                    fontFamily: "monospace",
                    fontSize: "16px",
                    border: "1px solid #ccc",
                    resize: "vertical",
                }}
            />
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
            {showPopup && (
                <div className={styles.popup}>
                    <div className={styles.popupContent}>
                        <span className={styles.close} onClick={() => {
                            setShowPopup(!showPopup);
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="black" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z" /></svg>
                        </span>
                        <div>
                            <h3><div>AI Generated Feedback</div><svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                height="1em"
                                width="1em"
                            >
                                <path
                                    fill="currentColor"
                                    d="M15 5.25A3.25 3.25 0 0 0 18.25 2h1.5A3.25 3.25 0 0 0 23 5.25v1.5A3.25 3.25 0 0 0 19.75 10h-1.5A3.25 3.25 0 0 0 15 6.75zM4 7a2 2 0 0 1 2-2h7V3H6a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-5h-2v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"
                                />
                            </svg></h3>
                            <div className={styles.aiResponseArea} dangerouslySetInnerHTML={{ __html: aiResponse }}></div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CodeEditor;