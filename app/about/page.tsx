import Link from 'next/link';

export default function About() {
    return (
      <div>
        <h1>About Us</h1>
        <p>We are a python education website, designed to teach users grades 6-12.</p>
        <p>Our mission is to make learning Python easy and accessible to young users.</p>

        <div>
          <Link href="/">
            <p>This is an example of an internal link</p>
          </Link>
        </div>
      </div>
      
    );
  }