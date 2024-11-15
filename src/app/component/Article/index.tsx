// import Image from 'next/image';
import type { Blog } from "@/app/_libs/microcms";
// import Category from '../Category';
import index from "./index.module.css";

type Props = {
  data: Blog;
};

export default function Article({ data }: Props) {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className={index.main}>
        <div className={index.blogTitleContainer}>
                <div className={index.blogTitleContainerInner}>
                    <div className={index.blogTitle}>
                        <p className={index.blogTitleText}>{data.title}</p>
                    </div>
                    <p className={index.blogDate}>{data.publishedAt ?? data.createdAt}</p>
                    <p className={index.blogTag}>A11Y</p>
                </div>
        </div>
        <article className={index.article}>
                <div className={index.articleMainContainer}>
                <div
          className={index.content}
          dangerouslySetInnerHTML={{
            __html: data.body,
          }}
        />
                   
                    <h2 className={index.heading}>関連記事</h2>
                    <ul className={index.blogList}>
                        <li className={index.blogListItem}>
                            <p className={index.blogListItemDate}>2024.10.12</p>
                            <p className={index.blogListItemTitle}>ブログタイトルブログタイトルブログタイトルブログタイトル</p>
                            <p className={index.blogListItemTag}>aaa</p>
                        </li>
                        <li className={index.blogListItem}>
                            <p className={index.blogListItemDate}>2024.10.12</p>
                            <p className={index.blogListItemTitle}>ブログタイトルブログタイトルブログタイトル</p>
                            <p className={index.blogListItemTag}>aaa</p>
                        </li>
                        <li className={index.blogListItem}>
                            <p className={index.blogListItemDate}>2024.10.12</p>
                            <p className={index.blogListItemTitle}>ブログタイトルブログタイトル</p>
                            <p className={index.blogListItemTag}>aaa</p>
                        </li>
                    </ul>
                </div>
                <div className={index.articleListContainer}>
                    <ul className={index.articleList}>
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
