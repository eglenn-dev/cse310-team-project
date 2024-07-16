"use client";
import styles from "./page.module.css";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Lesson {
    lesson: number;
    title: string;
    description: string;
    checkpoints: Checkpoint[];
}

interface Checkpoint {
    title: string;
    description: string;
    codeExample: string;
    goal: string;
    exercise: string;
}

interface ModuleCardProps {
    lessonData: Lesson;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ lessonData }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className={styles.main}>
            <div onClick={(e) => { setMenuOpen(!menuOpen) }} className={styles.mainBar}>
                <div className={styles.moduleName}>
                    {lessonData.title}
                </div>
                <div className={styles.status}>
                    <Image
                        className={`${styles.arrow} ${menuOpen ? (styles.nothing) : styles.rotate}`}
                        src="/arrow.svg"
                        height={35}
                        width={35}
                        alt="Arrow image"
                    />
                </div>
            </div>
            <div className={menuOpen ? (styles.dropDown) : (styles.hidden)}>
                <ul>
                    {lessonData.checkpoints.map((checkpoint: Checkpoint) => {
                        return <li><Link href={`/lesson0${lessonData.lesson}`}>{checkpoint.title}</Link></li>;
                    })}
                </ul>
            </div>
        </div>
    );
}

export default ModuleCard;