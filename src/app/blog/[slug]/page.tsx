import { notFound } from 'next/navigation';
import { getBlogDetail } from '@/app/libs/microcms';
import Article from '@/app/component/Article';
import { log } from 'console';
// import ButtonLink from '@/app/_components/ButtonLink';
// import styles from './page.module.css';

type Props = {
  params: {
    slug: string;
  };
};

export default async function Page({ params }: Props) {
  const data = await getBlogDetail(params.slug).catch(notFound);
  console.log(data);
  

  return (
    <>
      <Article data={data} />
    </>
  );
}