"use client";
// Import necessary libraries and components.
import React, { useState, useEffect, useRef } from "react";
import styles from "./CodeEditor.module.css";
import MarkdownIt from "markdown-it";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-javascript.js";
import "prismjs/components/prism-python.js";
import "prismjs/components/prism-jsx.js";

// Define the props interface for the CodeEditor component.
interface CodeEditorProps {
    exampleCode: string;
    checkPointGoal: string;
}

// CodeEditor component definition.
const CodeEditor: React.FC<CodeEditorProps> = ({ exampleCode, checkPointGoal }) => {
    // Store the original code for reference.
    const originalCode = exampleCode;

    // State variables to manage code, AI response, and popup visibility.
    const [code, setCode] = useState(exampleCode);
    const codeEditorRef = useRef<HTMLTextAreaElement>(null);
    const [aiResponse, setAiResponse] = useState("");
    const [showPopup, setShowPopup] = useState(false);

    // UseEffect hook to highlight code syntax after component mounts.
    useEffect(() => {
        Prism.highlightAll();
    }, []);

    // Function to handle code submission to the AI API.
    const handleCodeSubmission = () => {
        setAiResponse("");
        const fetchResponse = async () => {
            // Send a POST request to the AI API endpoint.
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
            const md = new MarkdownIt();
            setAiResponse(md.render(data.response.candidates[0].content.parts[0].text));
        };
        fetchResponse();
        setShowPopup(true);
    }

    // UseEffect hook to show the popup when the AI response is available.
    useEffect(() => {
        if (aiResponse) {
            setShowPopup(true);
        }
    }, [aiResponse]);

    // Render the CodeEditor component.
    return (
        <div>
            {/* Display instructions for using the code editor. */}
            <p>Use Shift + Enter to create a new line.</p>
            {/* Textarea element for code input */}
            <textarea
                className={styles.textArea}
                id="codeEditor"
                ref={codeEditorRef}
                value={code}
                onChange={(e) => setCode(e.target.value)}
                style={{
                    width: "80%",
                    height: "400px",
                    fontFamily: "monospace",
                    fontSize: "16px",
                    border: "1px solid #ccc",
                    resize: "vertical",
                    color: "white",
                }}
            />
            {/* Button to trigger code submission */}
            <div className={styles.submissionButton} onClick={handleCodeSubmission}>
                Check with AI
                {/* SVG icon for the button */}
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
            {/* Popup to display AI response */}
            {showPopup && (
                <div className={styles.popup}>
                    <div className={styles.popupContent}>
                        {/* Close button for the popup */}
                        <span className={styles.close} onClick={() => {
                            setShowPopup(!showPopup);
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="black" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z" /></svg>
                        </span>
                        <div>
                            {/* AI Generated Feedback Header */}
                            <h3><div>AI Generated Feedback</div>
                                {/* SVG icon for the header */}
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
                            </h3>
                            {/* Display the AI response in the popup */}
                            <div className={styles.aiResponseArea} dangerouslySetInnerHTML={{ __html: aiResponse }}></div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CodeEditor;