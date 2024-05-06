import Link from 'next/link';

export default function NavBar() {
    return (
      <div>
        <h1>Header</h1>
        <p>This is the header.</p>
        <div>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
        </div>
      </div>
    );
}