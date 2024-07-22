"use client";
// Import necessary components from Next.js and the card's stylesheet.
import Image from "next/image";
import Link from "next/link";
import styles from "./card.module.css";

// Define an interface for the Card component's props.
interface CardProps {
    title: string;
    description: string;
    iconPath: string;
    href: string;
    target: string;
    outbound: boolean;
}

// Card component definition.
const Card: React.FC<CardProps> = ({
    title,
    description,
    iconPath,
    href,
    target,
    outbound,
}) => {
    // Conditionally render either an anchor tag for external links or a Next.js Link component for internal links.
    return (
        <div>
            {outbound ? (
                // Anchor tag for external links.
                <a href={href} target={target} className={styles.card}>
                    <div className={styles.icon}>
                        <Image
                            src={iconPath}
                            height={50}
                            width={50}
                            alt="Icon"
                        />
                    </div>
                    <p className={styles.title}>{title}</p>
                    <p className={styles.text}>{description}</p>
                </a>
            ) : (
                // Next.js Link component for internal links.
                <Link href={href} className={styles.card}>
                    <div className={styles.icon}>
                        <Image
                            src={iconPath}
                            height={50}
                            width={50}
                            alt="Icon"
                        />
                    </div>
                    <p className={styles.title}>{title}</p>
                    <p className={styles.text}>{description}</p>
                </Link>
            )}
        </div>
    );
};

// Export the Card component as the default export.
export default Card;