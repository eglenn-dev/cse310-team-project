import Link from 'next/link';
import styles from "./navbar.module.css";

export default function NavBar() {
    return (
      <div>
        <main className={styles.main}>
          <h1>PyCode Educator</h1>
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