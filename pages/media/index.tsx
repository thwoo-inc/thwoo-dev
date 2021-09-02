import { GetStaticProps } from 'next';
import Link from 'next/link';
import MediaList from '../../components/MediaList';
import MediaOneshot from '../../components/MediaOneshot';
import { getAllMedia } from '../../lib/instagram';
import IMedia from '../../types/media';

type Props = {
  allMedias: IMedia[];
};

export default function MediaHome({ allMedias }: Props) {
  return (
    <div className='container mx-auto'>
      <h1>すべての様子</h1>
      <Link as='/' href='/'>
        <a>トップに戻る</a>
      </Link>
      <MediaList medias={allMedias} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allMedias = getAllMedia();

  return {
    props: { allMedias },
  };
};
