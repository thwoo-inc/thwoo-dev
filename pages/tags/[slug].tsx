import { GetStaticProps, GetStaticPaths } from 'next';
import Layout from '../../components/Layout';
import MediaList from '../../components/MediaList';
import Menu from '../../components/Menu';
import { getAllMedias, getAllTags } from '../../lib/instagram';
import IMedia from '../../types/media';
import ITag from '../../types/tag';

type Props = {
  slug: string;
  medias: IMedia[];
  tags: ITag[];
};

export default function TagPage({ slug, medias, tags }: Props) {
  const sectionStyle = 'px-2 md:px-4 mb-8';
  const currentTag = tags.find((tag) => tag.path === slug);

  return (
    <Layout>
      <div className='container mx-auto mt-4 mb-12'>
        <section className={sectionStyle}>
          <Menu hasHomeLink={true} tags={tags} currentTagPath={slug} />
        </section>
        <section className={sectionStyle}>
          <h1 className='text-xl font-bold text-gray-700 mb-4 pb-2 border-b'>
            {currentTag.label}
          </h1>
          <MediaList medias={medias} />
        </section>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug: string = params?.slug as string;

  return {
    props: {
      slug: params?.slug,
      medias: getAllMedias().filter((media) => media.tags.includes(slug)),
      tags: getAllTags(),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllTags().map((tag) => {
    return {
      params: {
        slug: tag.path,
      },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};
