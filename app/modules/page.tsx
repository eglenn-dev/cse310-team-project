"use client";
import styles from "./page.module.css";
import ModuleCard from "./ModuleCard";

export default function Modules() {


  return (
    <div className={styles.page}>
      <ModuleCard />
      <ModuleCard />
      <ModuleCard />
      <ModuleCard />
      <ModuleCard />
    </div>
  );
}
