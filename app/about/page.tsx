import Link from "next/link";
import styles from "./page.module.css";

export default function About() {
    const name = "Brandon";

    return (
      <div className={styles.main}>
        <h1>About Us</h1>
        <p>We are a dedicated team of Brigham Young University-Idaho (BYU-I) students from the Applied Programming 310 class. Our project aims to provide a comprehensive and engaging platform to teach Python programming to middle school and high school students. By leveraging our skills and passion for education, we hope to inspire the next generation of programmers and make learning Python both fun and accessible.</p>
        <span className={styles.line}>
        </span>
        <p>Our mission is to make learning Python easy and accessible to young users. We believe that programming is an essential skill in today's technology-driven world, and our goal is to equip students with the foundational knowledge they need to succeed. Whether you're a complete beginner, someone looking to learn Python for the first time, or someone who wants to refresh their skills, our platform offers tailored content to meet your needs. Through interactive lessons, practical exercises, and real-world examples, we strive to make programming approachable and enjoyable for everyone.</p>
      </div>
    );
}
