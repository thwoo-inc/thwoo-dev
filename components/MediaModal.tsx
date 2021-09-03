import React from 'react';
import IMedia from '../types/media';
import Portal from './Portal';

type Props = {
  media: IMedia;
  close: any;
};

const MediaModal = ({ media, close }: Props) => {
  return (
    <Portal>
      <div className='fixed top-0 bottom-0 left-0 right-0 z-30'>
        <div className=' w-full h-full '>
          <div className='absolute w-full h-full bg-black opacity-80 z-40' />
          <div className='absolute w-full h-full z-50 flex items-center'>
            <div className='p-2 md:w-4/5 lg:w-1/2 mx-auto'>
              <img className='mb-2 rounded' src={media.images[0]} />
              <p className='text-gray-300'>{media.caption}</p>
            </div>
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default MediaModal;
