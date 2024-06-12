"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./CodeEditor.module.css";

interface CodeEditorProps {
    exampleCode: string;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ exampleCode }) => {
    const [code, setCode] = useState(exampleCode);
    const codeEditorRef = useRef<HTMLTextAreaElement>(null);

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
        </div>
    );
};

export default CodeEditor;
