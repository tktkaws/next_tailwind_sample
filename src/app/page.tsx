import Image from "next/image";
import styles from './styles.module.css'

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <header className={styles.header}>
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li><a href="/">home</a></li>
                    <li><a href="/about/">about</a></li>
                    <li><a href="/blog/">blog</a></li>
                </ul>
            </nav>
        </header>
      <main className={styles.main}>
        <div className={styles.titleContainer}>
          <div className={styles.title}>
            <p className={styles.titleText}>front <br />dispatch</p>
          </div>
        </div>
        <ul className={styles.blogList}>
          <li className={styles.blogListItem}>
            <p className={styles.blogListItemDate}>2024.10.12</p>
            <p className={styles.blogListItemTitle}>ブログタイトルブログタイトルブログタイトルブログタイトル</p>
            <p className={styles.blogListItemTag}>aaa</p>
          </li>
          <li className={styles.blogListItem}>
            <p className={styles.blogListItemDate}>2024.10.12</p>
            <p className={styles.blogListItemTitle}>ブログタイトルブログタイトルブログタイトル</p>
            <p className={styles.blogListItemTag}>aaa</p>
          </li>
          <li className={styles.blogListItem}>
            <p className={styles.blogListItemDate}>2024.10.12</p>
            <p className={styles.blogListItemTitle}>ブログタイトルブログタイトル</p>
            <p className={styles.blogListItemTag}>aaa</p>
          </li>
          <li className={styles.blogListItem}>
            <p className={styles.blogListItemDate}>2024.10.12</p>
            <p className={styles.blogListItemTitle}>ブログタイトルブログタイトル</p>
            <p className={styles.blogListItemTag}>aaa</p>
          </li>
          <li className={styles.blogListItem}>
            <p className={styles.blogListItemDate}>2024.10.12</p>
            <p className={styles.blogListItemTitle}>ブログタイトルブログタイトル</p>
            <p className={styles.blogListItemTag}>aaa</p>
          </li>
          <li className={styles.blogListItem}>
            <p className={styles.blogListItemDate}>2024.10.12</p>
            <p className={styles.blogListItemTitle}>ブログタイトルブログタイトル</p>
            <p className={styles.blogListItemTag}>aaa</p>
          </li>
          <li className={styles.blogListItem}>
            <p className={styles.blogListItemDate}>2024.10.12</p>
            <p className={styles.blogListItemTitle}>ブログタイトルブログタイトル</p>
            <p className={styles.blogListItemTag}>aaa</p>
          </li>
          <li className={styles.blogListItem}>
            <p className={styles.blogListItemDate}>2024.10.12</p>
            <p className={styles.blogListItemTitle}>ブログタイトルブログタイトル</p>
            <p className={styles.blogListItemTag}>aaa</p>
          </li>
        </ul>
      </main>
    </div>
  );
}
