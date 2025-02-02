import styles from '../styles.module.css'

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
        <main className={styles.main}>
            <div className={styles.blogTitleContainer}>
                <div className={styles.blogTitleContainerInner}>
                    <div className={styles.blogTitle}>
                        <p className={styles.blogTitleText}>WAI-ARIAについての備忘録</p>
                    </div>
                    <p className={styles.blogDate}>2024.10.24</p>
                    <p className={styles.blogTag}>A11Y</p>
                </div>
            </div>
            <article className={styles.article}>
                <div className={styles.articleMainContainer}>
                    <h2 className={styles.heading}>アクセシビリティ</h2>
                    <p className={styles.text}>
                    アクセシビリティの学習を進めています。JIS規格***への準拠を目指したサイト改修案件に参加する機会に恵まれ、アクセシビリティを担保した実装について知識を深めることができました。
                    </p>
                    <p className={styles.text}>
                    アクセシビリティの学習を進めています。JIS規格***への準拠を目指したサイト改修案件に参加する機会に恵まれ、アクセシビリティを担保した実装について知識を深めることができました。
                    </p>
                    <p className={styles.text}>
                    アクセシビリティの学習を進めています。JIS規格***への準拠を目指したサイト改修案件に参加する機会に恵まれ、アクセシビリティを担保した実装について知識を深めることができました。
                    </p>
                    <p className={styles.text}>
                    アクセシビリティの学習を進めています。JIS規格***への準拠を目指したサイト改修案件に参加する機会に恵まれ、アクセシビリティを担保した実装について知識を深めることができました。
                    </p>
                    <p className={styles.text}>
                    アクセシビリティの学習を進めています。JIS規格***への準拠を目指したサイト改修案件に参加する機会に恵まれ、アクセシビリティを担保した実装について知識を深めることができました。
                    </p>
                    <p className={styles.text}>
                    アクセシビリティの学習を進めています。JIS規格***への準拠を目指したサイト改修案件に参加する機会に恵まれ、アクセシビリティを担保した実装について知識を深めることができました。
                    </p>
                    <p className={styles.text}>
                    アクセシビリティの学習を進めています。JIS規格***への準拠を目指したサイト改修案件に参加する機会に恵まれ、アクセシビリティを担保した実装について知識を深めることができました。
                    </p>
                    <p className={styles.text}>
                    アクセシビリティの学習を進めています。JIS規格***への準拠を目指したサイト改修案件に参加する機会に恵まれ、アクセシビリティを担保した実装について知識を深めることができました。
                    </p>
                    <h2 className={styles.heading}>Profile</h2>
                    <p className={styles.text}>
                    2024年1月から都内のWeb制作会社でコーダーとして働いています。
                    </p>
                    <p className={styles.text}>
                    2024年1月から都内のWeb制作会社でコーダーとして働いています。
                    </p>
                    <p className={styles.text}>
                    2024年1月から都内のWeb制作会社でコーダーとして働いています。
                    </p>
                    <p className={styles.text}>
                    2024年1月から都内のWeb制作会社でコーダーとして働いています。
                    </p>
                    <p className={styles.text}>
                    2024年1月から都内のWeb制作会社でコーダーとして働いています。
                    </p>
                    <p className={styles.text}>
                    2024年1月から都内のWeb制作会社でコーダーとして働いています。
                    </p>
                    <h2 className={styles.heading}>関連記事</h2>
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
                </div>
                <div className={styles.articleListContainer}>
                    <ul className={styles.articleList}>
                        <li><a href=""></a>目次1</li>
                        <li><a href=""></a>目次2</li>
                        <li><a href=""></a>目次3</li>
                        <li><a href=""></a>目次4</li>
                        <li><a href=""></a>目次5</li>
                        <li><a href=""></a>目次6</li>
                    </ul>
                </div>
            </article>
        </main>
    </div>
  );
}
