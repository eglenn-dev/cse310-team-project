import Link from "next/link";
import Image from "next/image";
import styles from "./footer.module.css";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.image}>
                    <Image
                        src="/footer.png"
                        height={200}
                        width={200}
                        alt="Footer Image"
                    />
                </div>
                <div>
                    <p>Links</p>
                    <ul>
                        <li>Link 1</li>
                        <li>Link 2</li>
                        <li>Link 3</li>
                        <li>Link 4</li>
                    </ul>
                </div>
            </div>
            <div className={styles.copyright}>Copyright (c) {currentYear}</div>
        </div>
    );
}
