import React from 'react';
import IMedia from '../types/media';
import MediaCard from './MediaCard';

type Props = {
  medias: IMedia[];
};

const MediaList = ({ medias }: Props) => {
  return (
    <div className='grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4'>
      {medias.map((media) => (
        <div key={media.id}>
          <MediaCard key={media.id} media={media} />
        </div>
      ))}
    </div>
  );
};

export default MediaList;
