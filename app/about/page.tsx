import Link from "next/link";

export default function About() {
    const name = "Brandon";

    return (
        <div>
            <h1>About Page Ryan</h1>
            <p>This is the about {name}</p>
            <div>
                <Link href="/">
                    <p>This is an example of an internal link</p>
                </Link>
            </div>
        </div>
    );
}
