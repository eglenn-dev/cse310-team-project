import Link from 'next/link';
import styles from "./navbar.module.css";
import Image from 'next/image';

export default function NavBar() {
    return (
      <div className={styles.header}> 
        <main className={styles.main}>
          <h1><Image
            src='/header-icon.png'
            height={60}
            width={60}
            alt='Pycode Educator Logo'
          /></h1>
            <div>
              <ul>
                <div className={styles.head}>
                  <li className={styles.headitem}><Link href="/">Home</Link></li>
                  <li className={styles.headitem}><Link href="">Learn</Link></li>
                  <li className={styles.headitem}><Link href="">Lessons</Link></li>
                  <li className={styles.headitem}><Link href="/about">About</Link></li>
                </div>
            </ul>
          </div>
        </main>
      </div>
      );
  }