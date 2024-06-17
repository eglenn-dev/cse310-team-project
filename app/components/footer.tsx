import Link from "next/link";
import Image from "next/image";
import styles from "./footer.module.css";
import { url } from "inspector";

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
                        <Image className={styles.socials}
                            src="/Twitter-X-Icon-Pink.png"
                            height={80}
                            width={80}
                            alt="X Link"
                        />
                        <Image className={styles.socials}
                            src="/Facebook-Logo-Pink.png"
                            height={80}
                            width={80}
                            alt="Facebook Link"
                        />
                        <Image className={styles.socials}
                            src="/Instagram-Icon-Pink.png"
                            height={80}
                            width={80}
                            alt="Facebook Link"
                        />
                    </ul>
                </div>
            </div>
            <div className={styles.copyright}>Copyright (c) {currentYear}</div>
        </div>
    );
}
