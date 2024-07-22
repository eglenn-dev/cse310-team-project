import Image from "next/image";
import styles from "./footer.module.css";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    
    // Footer for all of the pages.
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
                        <a href="https://www.X.com">
                            <Image className={styles.socials}
                            src="/Twitter-X-Icon-Pink.png"
                            height={80}
                            width={80}
                            alt="X Link"
                            />
                        </a>
                        <a href="https://www.facebook.com">
                            <Image className={styles.socials}
                                src="/Facebook-Logo-Pink.png"
                                height={80}
                                width={80}
                                alt="Facebook Link"
                            />
                        </a>
                        <a href="https://www.instagram.com">
                            <Image className={styles.socials}
                                src="/Instagram-Icon-Pink.png"
                                height={80}
                                width={80}
                                alt="Instagram Link"
                            />
                        </a>
                    </ul>
                </div>
            </div>
            <div className={styles.copyright}>Copyright (c) PyCode {currentYear}</div>
        </div>
    );
}
