import styles from "./styles.module.css";
import { getBlogsList, getAllTags } from "@/app/_libs/microcms";
import CardList from "@/app/component/CardList";
import { MEMBERS_LIST_LIMIT } from "@/app/_constants";
import TitleContainer from "@/app/component/TitleContainer";
import TagList from "@/app/component/TagList";
export default async function Home() {
  const data = await getBlogsList({
    limit: MEMBERS_LIST_LIMIT,
  });
  const tags = await getAllTags();

  return (
      <main id="main-content" tabIndex={-1} className={styles.main}>
        <TitleContainer />
        <TagList tags={tags.contents} />
        <CardList data={data.contents} />
      </main>
  );
}
