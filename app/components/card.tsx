"use client";
import Image from "next/image";
import styles from "./card.module.css";

interface CardProps {
    title: string;
    description: string;
    iconPath: string;
}

const Card: React.FC<CardProps> = ({ title, description, iconPath }) => {
    return (
        <div className={styles.card}>
            <div className={styles.icon}>
                <Image src={iconPath} height={50} width={50} alt="Icon" />
            </div>
            <p className={styles.title}>{title}</p>
            <p className={styles.text}>{description}</p>
        </div>
    );
};

export default Card;
