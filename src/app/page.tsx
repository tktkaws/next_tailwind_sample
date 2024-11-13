import styles from "./styles.module.css";

export default async function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className={styles.main}>
        <div className={styles.titleContainer}>
          <div className={styles.title}>
            <p className={styles.titleText}>
              front <br />
              dispatch
            </p>
          </div>
        </div>
        <p>
          アクセシビリティ、モダンフロントエンド関係を中心とした技術ブログです。
        </p>
        <p>自身の知識を整理することを第一の目的としています。</p>
        <ul className={styles.tabList}>
          <li>
            <a href="" className={styles.tabListItem}>ALL</a>
          </li>
          <li>
            <a href="" className={styles.tabListItem}>A11Y</a>
          </li>
          <li>
            <a href="" className={styles.tabListItem}>HTML</a>
          </li>
          <li>
            <a href="" className={styles.tabListItem}>CSS</a>
          </li>
          <li>
            <a href="" className={styles.tabListItem}>Java Script</a>
          </li>
        </ul>
        <ul className={styles.blogList}>
          <li>
            <a href="" className={styles.blogListItem}>
            <p className={styles.blogListItemTitle}>
            【読了】Webアプリケーションアクセシビリティ
            </p>
            <p className={styles.blogListItemDate}>2024.10.12</p>
            <div className={styles.blogListItemTagWrapper}>
              <p className={styles.blogListItemTag}>A11Y</p>
            </div>
            <img src="/Arrow1.svg" alt="" className={styles.blogListItemArrow}/>
            </a>
          </li>
          <li>
            <a href="" className={styles.blogListItem}>
            <p className={styles.blogListItemTitle}>
              Webアクセシビリティに役立つアプリ
            </p>
            <p className={styles.blogListItemDate}>2024.10.12</p>
            <div className={styles.blogListItemTagWrapper}>
              <p className={styles.blogListItemTag}>A11Y</p>
            </div>
            <img src="/Arrow1.svg" alt="" className={styles.blogListItemArrow}/>
            </a>
          </li>
          <li>
            <a href="" className={styles.blogListItem}>
            <p className={styles.blogListItemTitle}>
            【備忘録】wai-ariaについて
            </p>
            <p className={styles.blogListItemDate}>2024.10.12</p>
            <div className={styles.blogListItemTagWrapper}>
              <p className={styles.blogListItemTag}>A11Y</p>
            </div>
            <img src="/Arrow1.svg" alt="" className={styles.blogListItemArrow}/>
            </a>
          </li>
          <li>
            <a href="" className={styles.blogListItem}>
            <p className={styles.blogListItemTitle}>
            Webアクセシビリティで参考になるサイト
            </p>
            <p className={styles.blogListItemDate}>2024.10.12</p>
            <div className={styles.blogListItemTagWrapper}>
              <p className={styles.blogListItemTag}>A11Y</p>
            </div>
            <img src="/Arrow1.svg" alt="" className={styles.blogListItemArrow}/>
            </a>
          </li>
          <li>
            <a href="" className={styles.blogListItem}>
            <p className={styles.blogListItemTitle}>
              Webアクセシビリティに力を入れている企業一覧
            </p>
            <p className={styles.blogListItemDate}>2024.10.12</p>
            <div className={styles.blogListItemTagWrapper}>
              <p className={styles.blogListItemTag}>A11Y</p>
            </div>
            <img src="/Arrow1.svg" alt="" className={styles.blogListItemArrow}/>
            </a>
          </li>
          <li>
            <a href="" className={styles.blogListItem}>
            <p className={styles.blogListItemTitle}>
            Webアクセシビリティの前提知識
            </p>
            <p className={styles.blogListItemDate}>2024.10.12</p>
            <div className={styles.blogListItemTagWrapper}>
              <p className={styles.blogListItemTag}>A11Y</p>
            </div>
            <img src="/Arrow1.svg" alt="" className={styles.blogListItemArrow}/>
            </a>
          </li>
          <li>
            <a href="" className={styles.blogListItem}>
            <p className={styles.blogListItemTitle}>
            業務歴1年目のコーダーがアクセシビリティ案件にアサインされた話
            </p>
            <p className={styles.blogListItemDate}>2024.10.12</p>
            <div className={styles.blogListItemTagWrapper}>
              <p className={styles.blogListItemTag}>A11Y</p>
            </div>
            <img src="/Arrow1.svg" alt="" className={styles.blogListItemArrow}/>
            </a>
          </li>
          <li>
            <a href="" className={styles.blogListItem}>
            <p className={styles.blogListItemTitle}>
            アクセシビリティチェックを実際にどう行う？
            </p>
            <p className={styles.blogListItemDate}>2024.10.12</p>
            <div className={styles.blogListItemTagWrapper}>
              <p className={styles.blogListItemTag}>A11Y</p>
            </div>
            <img src="/Arrow1.svg" alt="" className={styles.blogListItemArrow}/>
            </a>
          </li>
          <li>
            <a href="" className={styles.blogListItem}>
            <p className={styles.blogListItemTitle}>
            なぜアクセシビリティに関心があるのか
            </p>
            <p className={styles.blogListItemDate}>2024.10.12</p>
            <div className={styles.blogListItemTagWrapper}>
              <p className={styles.blogListItemTag}>A11Y</p>
            </div>
            <img src="/Arrow1.svg" alt="" className={styles.blogListItemArrow}/>
            </a>
          </li>
          <li>
            <a href="" className={styles.blogListItem}>
            <p className={styles.blogListItemTitle}>
            【読了】見えにくい、読みにくい「困った！」を解決するデザイン
            </p>
            <p className={styles.blogListItemDate}>2024.10.12</p>
            <div className={styles.blogListItemTagWrapper}>
              <p className={styles.blogListItemTag}>A11Y</p>
            </div>
            <img src="/Arrow1.svg" alt="" className={styles.blogListItemArrow}/>
            </a>
          </li>
          <li>
            <a href="" className={styles.blogListItem}>
            <p className={styles.blogListItemTitle}>
            【シリーズ】アクセシブルなUIを実装してみる【フォーム】
            </p>
            <p className={styles.blogListItemDate}>2024.10.12</p>
            <div className={styles.blogListItemTagWrapper}>
              <p className={styles.blogListItemTag}>A11Y</p>
            </div>
            <img src="/Arrow1.svg" alt="" className={styles.blogListItemArrow}/>
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
}
