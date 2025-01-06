import styles from "./index.module.css";

export default function TitleContainer() {
  return (
      <div className={styles.titleContainer}>
        <div className={styles.title}>
          <p className={styles.titleText}>
            front <br />
            dispatch
          </p>
        </div>
        <div className={styles.lead}>
        <p>
          アクセシビリティ、モダンフロントエンド関係を中心とした技術ブログです。
        </p>
        <p>自身の知識を整理することを第一の目的としています。</p>
      </div>
      </div>
  );
}
