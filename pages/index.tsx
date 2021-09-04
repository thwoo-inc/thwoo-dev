import { GetStaticProps } from 'next';
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
      <div className='container mx-auto mt-4 mb-12'>
        <section className={sectionStyle}>
          <h1 className='text-2xl font-bold text-gray-700 mb-4 pb-2 border-b'>
            インスタウェブ株式会社
          </h1>
          <div className='md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto'>
            <MediaOneshot media={allMedias[0]} />
          </div>
        </section>
        <section className={sectionStyle}>
          <h2 className='text-xl font-bold text-gray-700 mb-4 pb-2 border-b'>
            最近の様子
          </h2>
          <div className='mb-4'>
            <MediaList
              medias={allMedias.slice(1, 1 + Math.min(8, allMedias.length))}
            />
          </div>
          <div>
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

  return {
    props: { allMedias, allTags },
  };
};
