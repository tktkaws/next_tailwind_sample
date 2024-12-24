// import Image from 'next/image';
import type { Blog } from '@/app/_libs/microcms';
// import Category from '../Category';
import styles from './index.module.css';

type Props = {
  data: Blog;
};

export default function Article({ data }: Props) {
  return (
    <main>
      <h1 className={styles.title}>{data.title}</h1>
      <p>{data.publishedAt ?? data.createdAt}</p>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{
          __html: data.body,
        }}
      />
    </main>
  );
}