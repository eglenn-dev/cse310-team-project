"use client";
import styles from "./page.module.css";
import React, { useState } from "react";
import Image from "next/image";


export default function ModuleCard() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className={styles.main}>
            <div onClick={(e) => {setMenuOpen(!menuOpen)}} className={styles.mainBar}>
                <div className={styles.moduleName}>
                    *Module Name*
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
                    <li>
                        *link1 lesson*
                    </li>
                    <li>
                        *link2 Checkpoint 1*
                    </li>
                    <li>
                        *link2 Checkpoint 2*
                    </li>
                    <li>
                        *link3 Checkpoint 3*
                    </li>
                </ul>
            </div>
        </div>
    );
}