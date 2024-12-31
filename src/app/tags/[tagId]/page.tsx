import styles from "../../styles.module.css";
import { getBlogsList, getAllTags } from "@/app/_libs/microcms";
import Link from "next/link";
import CardList from "@/app/component/CardList";
import TitleContainer from "@/app/component/TitleContainer";
import TagList from "@/app/component/TagList";
import { MEMBERS_LIST_LIMIT } from "@/app/_constants";

export async function generateStaticParams() {
  const tags = await getAllTags();
  return tags.contents.map((tag) => ({
    tagId: tag.id,
  }));
}

export default async function TagPage({
  params: { tagId },
}: {
  params: { tagId: string };
}) {
  const data = await getBlogsList({
    limit: MEMBERS_LIST_LIMIT,
    filters: `tags[contains]${tagId}`,
  });
  const tags = await getAllTags();

  return (
    <main className={styles.main}>
      <TitleContainer />
      <TagList tags={tags.contents} />
      <CardList data={data.contents} />
    </main>
  );
}
