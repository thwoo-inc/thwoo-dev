import Link from 'next/link';
import React from 'react';
import ITag from '../types/tag';

type Props = {
  hasHomeLink: boolean;
  tags: ITag[];
  currentTagPath: string;
};

const Menu = ({ hasHomeLink, tags, currentTagPath }: Props) => {
  const homeStyle = 'px-4 py-2 border rounded mr-4';
  const currentTagStyle = 'px-4 py-2 border rounded-full mr-2 bg-pink-200';
  const otherTagStyle = 'px-4 py-2 border rounded-full mr-2';

  return (
    <div className='flex flex-wrap'>
      {hasHomeLink && (
        <div className='mb-4'>
          <Link as='/' href='/' passHref>
            <a className={homeStyle}>ホーム</a>
          </Link>
        </div>
      )}
      {tags.map((tag) => (
        <div key={tag.path} className='mb-4'>
          <Link as={`/tags/${tag.path}`} href={`/tags/${tag.path}`} passHref>
            <a
              className={
                currentTagPath == tag.path ? currentTagStyle : otherTagStyle
              }
            >
              {tag.label}
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Menu;
