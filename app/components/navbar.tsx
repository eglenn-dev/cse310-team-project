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
                <Link className={styles.navLink} href="/lesson1">
                    Lessons
                </Link>
                <Link className={styles.navLink} href="/lesson2">
                    About Us
                </Link>
                <Link className={styles.navLink} href="/lesson3">
                    Get Started
                </Link>
            </div>
        </div>
    );
}
