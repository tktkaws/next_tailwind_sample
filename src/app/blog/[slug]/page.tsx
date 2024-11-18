import { notFound } from "next/navigation";
import { getBlogDetail, getBlogsList } from "@/app/_libs/microcms";
import Article from "@/app/component/Article";
import index from "./page.module.css";
import Date from "@/app/component/Date";
import { TOP_NEWS_LIMIT } from "@/app/_constants";
import CardList from "@/app/component/CardList";

type Props = {
  params: {
    slug: string;
  };
};

export default async function Page({ params }: Props) {
  const data = await getBlogDetail(params.slug).catch(notFound);
  const listData = await getBlogsList({
    limit: TOP_NEWS_LIMIT,
  });
  console.log(listData);

  return (
    <>
      <div className="font-[family-name:var(--font-geist-sans)]">
        <main className={index.main}>
          <div className={index.blogTitleContainer}>
            <div className={index.blogTitleContainerInner}>
              <div className={index.blogTitle}>
                <p className={index.blogTitleText}>{data.title}</p>
              </div>
              <p className={index.blogDate}>
                <Date date={data.publishedAt ?? data.createdAt} />
              </p>
              <p className={index.blogTag}>A11Y</p>
            </div>
          </div>
          <Article data={data} />
          <h2 className={index.heading}>最新記事</h2>

          <CardList data={listData} />
        </main>
      </div>
    </>
  );
}
