import styles from "./page.module.css";
import Image from "next/image";

export default function About() {

  return (
    <div className={styles.main}>
      <div className={styles.heroimg}>
        <Image
          src="/hero-img-about-us.jpg"
          width={50}
          height={50}
          alt="hero img"
          layout="responsive"
        />
      </div>
      <h1>About Us</h1>
      <h2>Inspiring Future Programmers, One Line of Code at a Time</h2>
      <p>We are a dedicated team of Brigham Young University-Idaho (BYU-I) students from the Applied Programming 310 class. Our project aims to provide a comprehensive and engaging platform to teach Python programming to middle school and high school students. By leveraging our skills and passion for education, we hope to inspire the next generation of programmers and make learning Python both fun and accessible.</p>
      <span>
      </span>
      <h1>Our Mission</h1>
      <p>Our mission is to make learning Python easy and accessible to young users. We believe that programming is an essential skill in today's technology-driven world, and our goal is to equip students with the foundational knowledge they need to succeed. Whether you're a complete beginner, someone looking to learn Python for the first time, or someone who wants to refresh their skills, our platform offers tailored content to meet your needs. Through interactive lessons, practical exercises, and real-world examples, we strive to make programming approachable and enjoyable for everyone.</p>
      <span></span>
      <div className={styles.choiceArea}>
        <div>
          <Image
            className={styles.choiceImage}
            src="/Why-choose-us.jpg"
            width={50}
            height={50}
            alt="hero img"
            layout="responsive"
          />
        </div>
        <div className={styles.choiceGrid}>
          <div className={styles.listbox}>Interactive Lessons: Engaging and hands-on lessons to keep students motivated.</div>
          <div className={styles.listbox}>Practical Exercises: Real-world examples to apply what you've learned.</div>
          <div className={styles.listbox}>Tailored Content: Lessons designed to meet various skill levels.</div>
          <div className={styles.listbox}>Supportive Community: Join a community of learners and educators.</div>
        </div>
      </div>
      <span></span>
      <h1>Our Journey</h1>
      <p>Our journey began with a shared passion for coding and education. We saw a gap in resources available for young learners interested in programming and decided to create a platform that not only teaches Python but does so in a fun and interactive way. Our goal is to demystify coding and make it accessible to everyone, regardless of their background.</p>
      <h1>Get to Know the Team</h1>
      <div className={styles.peopleGrid}>
        <div>
          <h2>Ethan Glenn</h2>
          <p>I'm Ethan, a Computer Science major here at BYU-Idaho. I have a passion for web development and have worked on some Full-stack projects both personally and professionally.</p>
        </div>
        <div>
          <h2>Kaleb Trogdon</h2>
          <p>Hi, I'm Kaleb, a junior studying Computer Science at BYUI with a fascination for programming languages and machine learning. I specialize in creating engaging and approachable lessons for learning Python, and I balance my passion for coding with my interests in motorcycles and bodybuilding.</p>
        </div>
        <div>
          <h2>Roy Garcia</h2>
          <p>Hello, my name is Roy Garcia, a junior at BYU-I majoring in Software Development with a specialization in software design. Living in Moreno Valley, California, I focus on developing intuitive software solutions for students while enjoying exploring new technologies, gaming, and spending time with family and friends.</p>
        </div>
        <div>
          <h2>Brandon Ansbergs</h2>
          <p>Hi, I'm Brandon Ansbergs, a senior at BYU-I majoring in Computer Science with a minor in Data Science. As the front-end developer for our web app, I create user-friendly designs and interactive lessons for learning Python, while also enjoying working on cars, programming, and tackling challenging puzzles.</p>
        </div>
      </div>
      <h2>Join Us</h2>
      <p>Ready to start your coding journey? Sign up today and join our community of learners!</p>
      <p>Stay connected with us on Facebook, Twitter, and LinkedIn for updates and new content.</p>
    </div>
  );
}
