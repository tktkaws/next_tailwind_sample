import type { Blog } from "@/app/_libs/microcms";
import styles from "./index.module.css";
import Date from "@/app/component/Date";
import Link from "next/link";

type Props = {
  data: Blog;
};

export default function CardList({ data }: Props) {
  return (
    <>
      <ul className={styles.blogList}>
        {data.contents.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`} className={styles.blogListItem}>
              <p className={styles.blogListItemTitle}>{blog.title}</p>
              <p className={styles.blogListItemDate}>
                <Date date={blog.publishedAt ?? blog.createdAt} />
              </p>
              <div className={styles.blogListItemTagWrapper}>
                {blog.tags.map((tag) => (
                  <p className={styles.blogListItemTag}>{tag.title}</p>
                ))}
              </div>
              <img
                src="/Arrow1.svg"
                alt=""
                className={styles.blogListItemArrow}
              />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
