import Link from "next/link";
import styles from "./page.module.css";

export default function About() {
    const name = "Brandon";

    return (
      <div className={styles.main}>
        <h1>About Us</h1>
        <h2>Inspiring Future Programmers, One Line of Code at a Time</h2>
        <p>We are a dedicated team of Brigham Young University-Idaho (BYU-I) students from the Applied Programming 310 class. Our project aims to provide a comprehensive and engaging platform to teach Python programming to middle school and high school students. By leveraging our skills and passion for education, we hope to inspire the next generation of programmers and make learning Python both fun and accessible.</p>
        <span>
        </span>
        <h1>Our Mission</h1>
        <p>Our mission is to make learning Python easy and accessible to young users. We believe that programming is an essential skill in today's technology-driven world, and our goal is to equip students with the foundational knowledge they need to succeed. Whether you're a complete beginner, someone looking to learn Python for the first time, or someone who wants to refresh their skills, our platform offers tailored content to meet your needs. Through interactive lessons, practical exercises, and real-world examples, we strive to make programming approachable and enjoyable for everyone.</p>
        <span></span>
        <h1>Why Choose Us?</h1>
        <ul>
          <li>Interactive Lessons: Engaging and hands-on lessons to keep students motivated.</li>
          <li>Practical Exercises: Real-world examples to apply what you've learned.</li>
          <li>Tailored Content: Lessons designed to meet various skill levels.</li>
          <li>Supportive Community: Join a community of learners and educators.</li>
        </ul>
        <span></span>
        <h1>Our Journey</h1>
        <p>Our journey began with a shared passion for coding and education. We saw a gap in resources available for young learners interested in programming and decided to create a platform that not only teaches Python but does so in a fun and interactive way. Our goal is to demystify coding and make it accessible to everyone, regardless of their background.</p>
        <span></span>
        <h1>Get to Know the Team</h1>
        <h2>Ethan Glenn</h2>
        <p>I'm Ethan, a Computer Science major here at BYU-Idaho. I have a passion for web development and have worked on some Full-stack projects both personally and professionally. I love working with Python and TypeScript and have experience working with both languages. On my side I enjoy playing pickleball and reading in my spare time. Feel free to see some more of my projects here: https:.//eglenn.dev</p>
        <span>
        </span>
        <h2>Kaleb Trogdon</h2>
        <p>Hi, I'm Kaleb, a junior in BYUI studying Computer Science. With a fascination for programming languages and machine learning. In this project, I specialized in creating lessons and modules that aim to make learning the programming language like Python engaging and approachable. Beyond coding, I have a passion for motorcycles and bodybuilding, finding balance between the virtual and physical challenges. When I'm not immersed in code or hitting the gym, I work doing multiple jobs2</p>
        <span>
        </span>
        <h2>Roy Garcia</h2>
        <p>Hello, my name is Roy Garcia. I currently live in Moreno Valley, California, and I'm a junior at BYU-I majoring in Software Development with a specialization in software design. My fascination with computers and programming began at a young age, and it has driven me to pursue a career in this field. In this project, I focus on developing intuitive and effective software solutions that enhance the learning experience for students. Outside of my academic pursuits, I enjoy exploring new technologies, gaming, and spending time with family and friends.</p>
        <span></span>
        <h2>Brandon Ansbergs</h2>
        <p>Hi there, I'm Brandon Ansbergs, a senior at BYU-I pursuing a major in Computer Science and a minor in Data Science. I have a strong belief in the power of education to change lives. In my role as the front-end developer for our web app, I focus on building user-friendly designs and interactive lessons to make Python learning accessible and engaging. Outside of my academic and coding pursuits, I enjoy working on cars, programming, and tackling challenging puzzles.</p>
        <span></span>
        <h2>Join Us</h2>
        <p>Ready to start your coding journey? Sign up today and join our community of learners!</p>
        <p>Stay connected with us on Facebook, Twitter, and LinkedIn for updates and new content.</p>
      </div>
    );
}
