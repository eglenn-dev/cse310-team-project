"use client";
import styles from "./page.module.css";
import ModuleCard from "./ModuleCard";
import { useEffect, useState } from "react";

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

export default function Modules() {

  const [lessons, setLessons] = useState<Lesson[]>([]);

  useEffect(() => {
    const fetchLessonData = async () => {
      const response = await fetch('/api/all-lessons');
      const data = await response.json();
      console.log("API Response", data);
      setLessons(data);
    };
    fetchLessonData();
  }, []);

  if (!lessons[0]) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.page}>
      {lessons.map((lesson: Lesson) => {
        return (
          <ModuleCard key={lesson.lesson} lessonData={lesson} />
        );
      })}
    </div>
  );
}
