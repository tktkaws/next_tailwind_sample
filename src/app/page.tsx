import styles from "./styles.module.css";
import { getBlogsList } from "@/app/libs/microcms";
import { formatDate } from "@/app/libs/utils";
import Link from "next/link";

export default async function Home() {
  const data = await getBlogsList({});
  // console.log("data", data);
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
            <a href="" className={styles.tabListItem}>
              ALL
            </a>
          </li>
          <li>
            <a href="" className={styles.tabListItem}>
              A11Y
            </a>
          </li>
          <li>
            <a href="" className={styles.tabListItem}>
              HTML
            </a>
          </li>
          <li>
            <a href="" className={styles.tabListItem}>
              CSS
            </a>
          </li>
          <li>
            <a href="" className={styles.tabListItem}>
              Java Script
            </a>
          </li>
        </ul>
        <ul className={styles.blogList}>
          {data.contents.map((blog) => (
            
            <li key={blog.id}>
              <Link  href={`/blog/${blog.id}`} className={styles.blogListItem}>
              <p className={styles.blogListItemTitle}>{blog.title}</p>
                <p className={styles.blogListItemDate}>{formatDate(blog.publishedAt)}</p>
                <div className={styles.blogListItemTagWrapper}>
                  {blog.tags.map((tag) => (
                    <p className={styles.blogListItemTag}>
                      {tag.title}
                    </p>
                  ))}
                </div>
                <img
                  src="/Arrow1.svg"
                  alt=""
                  className={styles.blogListItemArrow}
                />
              
              </Link>

              {/* <a href="" className={styles.blogListItem}>
                <p className={styles.blogListItemTitle}>{blog.title}</p>
                <p className={styles.blogListItemDate}>{formatDate(blog.publishedAt)}</p>
                <div className={styles.blogListItemTagWrapper}>
                  {blog.tags.map((tag) => (
                    <p key={tag} className={styles.blogListItemTag}>
                      {tag.title}
                    </p>
                  ))}
                </div>
                <img
                  src="/Arrow1.svg"
                  alt=""
                  className={styles.blogListItemArrow}
                />
              </a> */}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
