import styles from "./styles.module.css";
import { getBlogsList, getAllTags } from "@/app/_libs/microcms";
import { formatDate } from "@/app/_libs/utils";
import Link from "next/link";
import CardList from "@/app/component/CardList"; 
import { MEMBERS_LIST_LIMIT } from '@/app/_constants'


export default async function Home() {
  const data = await getBlogsList({
    limit: MEMBERS_LIST_LIMIT,
  });
  const tags = await getAllTags({});

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
            <Link href="/" className={`${styles.tabListItem} ${styles.active}`}>
              ALL
            </Link>
          </li>
          {tags.contents.map((tag) => (
            <li key={tag.id}>
              <Link href={`/tags/${tag.id}`} className={styles.tabListItem}>
                {tag.title}
              </Link>
            </li>
          ))}
        </ul>
        <CardList data={data}/>
      </main>
    </div>
  );
}
