import type { Blog } from "@/app/_libs/microcms";
import styles from "./index.module.css";
import Date from "@/app/component/Date";
import Link from "next/link";
import Image from 'next/image';

type Props = {
  data: Blog[];
};

export default function CardList({ data }: Props) {
  return (
    <>
      <ul className={styles.blogList}>
        {data.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`} className={styles.blogListItem}>
              <p className={styles.blogListItemTitle}>{blog.title}</p>
              <p className={styles.blogListItemDate}>
                <Date date={blog.publishedAt ?? blog.createdAt} />
              </p>
              <div className={styles.blogListItemTagWrapper}>
                {blog.tags.map((tag, idx) => (
                  <p key={idx} className={styles.blogListItemTag}>
                    {tag.title}
                  </p>
                ))}
              </div>
              <Image
                src="/Arrow1.svg"
                alt=""
                width={13}
                height={13}
                className={styles.blogListItemArrow}
              />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
