import Image from "next/image";
import styles from '../styles.module.css'

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className={styles.main}>
        <div className={styles.titleContainer}>
          <div className={styles.title}>
            <p className={styles.titleText}>this is <br />takayuki takahashi</p>
          </div>
        </div>
        <h2 className={styles.heading}>アクセシビリティ</h2>
        <p className={styles.text}>
          アクセシビリティの学習を進めています。JIS規格***への準拠を目指したサイト改修案件に参加する機会に恵まれ、アクセシビリティを担保した実装について知識を深めることができました。
        </p>
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
        </ul>
        <h2 className={styles.heading}>Next.js</h2>
        <p className={styles.text}>
          モダンフロントエンドの学習を進めています。Next.js, taiwind.css, typescript
        </p>
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
        </ul>
        <h2 className={styles.heading}>Profile</h2>
        <p className={styles.text}>
          2024年1月から都内のWeb制作会社でコーダーとして働いています。
        </p>
        
        <a href="/">front dispatch</a>

      </main>
    </div>
  );
}
