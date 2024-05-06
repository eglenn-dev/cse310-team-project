import Link from 'next/link';

export default function Footer() {
    return (
        <div>
            <p>Footer</p>
            <p>This is the footer.</p>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
        </div>
    );
}