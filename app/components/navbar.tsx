import Link from "next/link";
import styles from "./navbar.module.css";
import Image from "next/image";

export default function NavBar() {
    // Navigation bar for the website
    return (
        <div className={styles.navigation}>
            <div className={styles.pageTitle}>
                <Image
                    className={styles.navImage}
                    src="/header-icon.png"
                    width={50}
                    height={50}
                    alt="Header logo icon"
                />
                <div>PyCode Educator</div>
            </div>
            <div className={styles.navLinksList}>
                <Link className={styles.navLink} href="/">
                    Home
                </Link>
                <Link className={styles.navLink} href="/modules">
                    Lessons
                </Link>
                <Link className={styles.navLink} href="/about">
                    About Us
                </Link>
            </div>
        </div>
    );
}
