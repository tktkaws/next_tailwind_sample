import styles from './index.module.css'

export default function Header() {
    return (
      <>
         <header className={styles.header}>
            <div className={styles.logo}><a href="/">Front Dispatch</a></div>
            <div className={styles.headerTitle}>WAI-ARIAについての備忘録</div>
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li><a href="/">home</a></li>
                    <li><a href="/about/">about</a></li>
                </ul>
            </nav>
        </header>
      </>
    );
  }