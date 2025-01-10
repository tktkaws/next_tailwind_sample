import type { Blog } from "@/app/_libs/microcms";
import index from "./index.module.css";
import "github-markdown-css";
import { renderToc } from "@/app/_libs/render-toc";
import TableOfContents from "@/app/component/TableOfContents";

type Props = {
  data: Blog;
};

export default async function Article({ data }: Props) {
  const toc = renderToc(data.body);
  return (
    <article className={index.article}>
      <div className={index.articleListContainer}>
        <TableOfContents toc={toc} />
      </div>
      <div className={index.articleMainContainer}>
        <div
          className="markdown-body"
          dangerouslySetInnerHTML={{
            __html: data.body,
          }}
        />
      </div>
    </article>
  );
}
