import { GetStaticProps } from 'next';
import Link from 'next/link';
import MediaList from '../components/MediaList';
import MediaOneshot from '../components/MediaOneshot';
import { getAllMedia } from '../lib/instagram';
import IMedia from '../types/media';

type Props = {
  allMedias: IMedia[];
};

export default function Home({ allMedias }: Props) {
  return (
    <div className='container mx-auto'>
      <h1>株式会社スオウ</h1>
      <div className=' md:max-w-screen-sm'>
        <MediaOneshot media={allMedias[0]} />
      </div>
      <h2>最近の様子</h2>
      <div className='p-2'>
        <MediaList
          medias={allMedias.slice(1, 1 + Math.min(4, allMedias.length))}
        />
      </div>
      <Link as='/media' href='/media'>
        <a>すべて見る</a>
      </Link>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allMedias = getAllMedia();

  return {
    props: { allMedias },
  };
};
