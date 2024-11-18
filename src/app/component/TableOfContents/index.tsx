import styles from './index.module.css';
import type { Toc } from "@/app/_libs/microcms";

type Props = {
  toc: Toc;
};
export default function TableOfContents({ toc }: Props) {
  return (
    <>
     <p className="TableOfContentsHead">目次</p>
     <ul>
        {toc.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`}>{item.text}</a>
          </li>
        ))}
      </ul>
    </>
  );
};