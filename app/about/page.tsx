import Link from 'next/link';

export default function About() {
    return (
      <div>
        <h1>About Page</h1>
        <p>This is the about page.</p>
        <div>
          <Link href="/">
            <p>This is an example of an internal link</p>
          </Link>
        </div>
      </div>
      
    );
  }