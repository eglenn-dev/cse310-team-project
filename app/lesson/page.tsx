import styles from "./page.module.css";

export default function Lesson() {
  return (
    <main>
        <div className={styles.centerHead}>
            <h1>Lesson 1</h1>
            <h2>Printing Sample Text</h2>
        </div>
        <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <h3 className={styles.headcode}>Code example: </h3>
        <p className={styles.code}>
          def sample():
            <br></br>&emsp;print("Sample Text")
            <br></br>&emsp;return</p>
        <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <h3 className={styles.headcode}>Code example: </h3>
        <p className={styles.code}>
          def sample():
          <br></br>&emsp;print("Sample Text")
          <br></br>&emsp;return
          </p>

        <h2 className={styles.pracHead}>Practice:</h2>
        <form className={styles.codebox}>
            <textarea name="pythonCode" rows={10} cols = {80}/>
          <input type="submit" value="Submit"/>
        </form>
    </main>
  );
}
