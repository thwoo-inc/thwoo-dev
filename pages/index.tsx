import { GetStaticProps } from 'next';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import MediaList from '../components/MediaList';
import MediaOneshot from '../components/MediaOneshot';
import Menu from '../components/Menu';
import Social from '../components/Social';
import { getAllMedias, getAllTags } from '../lib/instagram';
import IMedia from '../types/media';
import ITag from '../types/tag';

type Props = {
  allMedias: IMedia[];
  allTags: ITag[];
};

export default function Home({ allMedias, allTags }: Props) {
  const sectionStyle = 'px-2 md:px-4 mb-8';

  return (
    <Layout>
      <div className='container mx-auto mt-8 mb-12'>
        <h1 className='text-2xl font-bold text-gray-700 mb-8 px-2 pb-2 border-b'>
          インスタウェブ
        </h1>
        <section className={sectionStyle}>
          <Hero />
        </section>
        <section className={sectionStyle}>
          <h2 className='text-xl font-bold text-gray-700 mb-4 pb-2 border-b'>
            最新の投稿
          </h2>
          <div className='md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto'>
            <MediaOneshot media={allMedias[0]} />
          </div>
        </section>
        <section className={sectionStyle}>
          <h2 className='text-xl font-bold text-gray-700 mb-4 pb-2 border-b'>
            最近の投稿
          </h2>
          <div className='mb-4'>
            <MediaList
              medias={allMedias.slice(1, 1 + Math.min(8, allMedias.length))}
            />
          </div>
          <div className='mb-4'>
            <p className='mb-4'>タグ毎のページもご覧ください！</p>
            <Menu hasHomeLink={false} tags={allTags} currentTagPath='' />
          </div>
        </section>
        <section className={sectionStyle}>
          <Social />
        </section>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allMedias = getAllMedias();
  const allTags = getAllTags();

  const rawProps = {
    allMedias,
    allTags,
  };

  return {
    props: JSON.parse(JSON.stringify(rawProps)),
  };
};
