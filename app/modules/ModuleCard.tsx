"use client";
import styles from "./page.module.css";


export default function ModuleCard() {


  return (
    <div className={styles.main}>
        <div className={styles.mainBar}>
            <div className={styles.moduleName}>
                *Module Name*
            </div>
            <div className={styles.status}>
                *Status*
            </div>
        </div>
        <div className={styles.dropDown}>
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