"use client";
import React, { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-javascript.js";
import "prismjs/components/prism-python.js";
import "prismjs/components/prism-jsx.js";

// Input props for the code chunk styles version. 
interface PythonCodeChunkProps {
    inputCode: string;
}

const PythonCodeChunk: React.FC<PythonCodeChunkProps> = ({ inputCode }) => {
    // State management for the code chunk incase it changes
    const [code, setCode] = useState(inputCode);
    // Using the Prism library to highlight the code
    useEffect(() => {
        Prism.highlightAll();
    }, []);

    // Return the code chunk with the highlighted code
    return (
        <pre
            className={`language-python`}
            style={{
                userSelect: "none",
                borderRadius: "25px",
            }}
        >
            <code className="language-python">{code}</code>
        </pre>
    );
};

export default PythonCodeChunk;
