"use client";

import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-javascript.js";
import "prismjs/components/prism-python.js";
import "prismjs/components/prism-jsx.js";
import styles from "./page.module.css";

export default function Lesson01() {
    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <div className={styles.lessonArea}>
            <div className={styles.header}>
                <h1>Python Basics Interactive Tutorial</h1>
                <p>
                    Today we will learn about basic syntax, data types, and
                    basic operations in Python. Let's get started!
                </p>
            </div>
            <span className={styles.headerGap}></span>
            <div>
                <h2>What is a variable?</h2>
                <p>
                    In Python, a variable is used to store information.
                    Variables can store different types of data. Here are some
                    examples:
                </p>
                <pre className={`language-python ${styles.codeChunk}`}>
                    <code className="language-python">
                        {`
                        # Integer
                        age = 25
                        print("Age:", age)

                        # Float
                        price = 19.99
                        print("Price:", price)

                        # String
                        name = "Alice"
                        print("Name:", name)

                        # Boolean
                        is_student = True
                        print("Is student:", is_student)
                    `}
                    </code>
                </pre>
                <p></p>
            </div>
        </div>
    );
}
