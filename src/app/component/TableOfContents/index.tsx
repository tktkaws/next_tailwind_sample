import styles from './index.module.css';
import type { Toc } from "@/app/_libs/microcms";

type Props = {
  toc: Toc;
};
export default function TableOfContents({ toc }: Props) {
  return (
      <div className={styles.TableOfContents}>
      <h2 className={styles.TableOfContentsTitle}>目次</h2>
     <ul className={styles.TableOfContentsList}>
        {toc.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`}>{item.text}</a>
          </li>
        ))}
      </ul>
      </div>
  );
};