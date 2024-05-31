"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./card.module.css";

interface CardProps {
    title: string;
    description: string;
    iconPath: string;
    href: string;
    target: string;
    outbound: boolean;
}

const Card: React.FC<CardProps> = ({
    title,
    description,
    iconPath,
    href,
    target,
    outbound,
}) => {
    return (
        <div>
            {outbound ? (
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

export default Card;
