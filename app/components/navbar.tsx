import Link from "next/link";
import styles from "./navbar.module.css";
import Image from "next/image";

export default function NavBar() {
    return (
        <div className={styles.navigation}>
            <Image
                className={styles.navImage}
                src="/header-icon.png"
                width={50}
                height={50}
                alt="Header logo icon"
            />
            <div className={styles.navLinksList}>
                <Link className={styles.navLink} href="/">
                    Home
                </Link>
<<<<<<< HEAD
                <Link className={styles.navLink} href="/lesson01">
                    Lesson 1
=======
                <Link className={styles.navLink} href="/lesson">
                    Lessons
>>>>>>> roy
                </Link>
                <Link className={styles.navLink} href="/about">
                    About Us
                </Link>
            </div>
        </div>
    );
}
