"use client";
import Link from "next/link";
import styles from "./index.module.css";
import { usePathname } from "next/navigation";

interface Tag {
  id: string;
  title: string;
}

interface TagListProps {
  tags: Tag[];
}

export default function TagList({ tags }: TagListProps) {
  const currentPath = usePathname();

  return (
    <ul className={styles.tagList}>
      <li>
        <Link
          href="/"
          className={`${styles.tagListItem} ${currentPath === "/" ? styles.active : ""}`}
        >
          ALL
        </Link>
      </li>
      {tags.map((tag) => (
        <li key={tag.id}>
          <Link
            href={`/tags/${tag.id}`}
            className={`${styles.tagListItem} ${currentPath === `/tags/${tag.id}` ? styles.active : ""}`}
          >
            {tag.title}
          </Link>
        </li>
      ))}
    </ul>
  );
} 