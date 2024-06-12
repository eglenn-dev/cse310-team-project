"use client";
import React, { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-javascript.js";
import "prismjs/components/prism-python.js";
import "prismjs/components/prism-jsx.js";

interface PythonCodeChunkProps {
    inputCode: string;
}

const PythonCodeChunk: React.FC<PythonCodeChunkProps> = ({ inputCode }) => {
    const [code, setCode] = useState(inputCode);
    useEffect(() => {
        Prism.highlightAll();
    }, []);

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
