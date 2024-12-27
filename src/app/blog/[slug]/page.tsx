import { notFound } from "next/navigation";
// import { getBlogDetail, getBlogsList } from "@/app/_libs/microcms";
import { getBlogDetail } from "@/app/_libs/microcms";
import Article from "@/app/component/Article";
import index from "./page.module.css";
import Date from "@/app/component/Date";
// import { TOP_NEWS_LIMIT } from "@/app/_constants";
// import CardList from "@/app/component/CardList";
import Link from "next/link";
// import type { Blog, MicroCMSListResponse } from "@/app/_libs/microcms";


type Props = {
  params: {
    slug: string;
  };
};

export default async function Page({ params }: Props) {
  const data = await getBlogDetail(params.slug).catch(notFound);
  // const listData: MicroCMSListResponse<Blog> = await getBlogsList({
  //   limit: TOP_NEWS_LIMIT,
  // });
  // console.log(data);
  // console.log(listData);

  return (
    <>
        <main className={index.main}>
          <div className={index.blogTitleContainer}>
            <div className={index.blogTitleContainerInner}>
              <div className={index.blogTitle}>
                <p className={index.blogTitleText}>{data.title}</p>
              </div>
              <p className={index.blogDate}>
                <Date date={data.publishedAt ?? data.createdAt} />
              </p>
              <div className={index.blogListItemTagWrapper}>
                {data.tags &&
                  data.tags.map((tag, idx) => (
                    <Link
                      key={idx}
                      href={`/tags/${tag.id}`}
                      className={index.blogListItemTag}
                    >
                      {tag.title}
                    </Link>
                  ))}
              </div>
            </div>
          </div>
          <Article data={data} />
          <h2 className={index.heading}>最新記事</h2>

          {/* <CardList data={listData.contents} /> */}
        </main>
    </>
  );
}
