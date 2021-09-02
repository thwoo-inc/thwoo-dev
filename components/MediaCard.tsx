import { useState } from 'react';
import IMedia from '../types/media';
import MediaModal from './MediaModal';

type Props = {
  media: IMedia;
};

const MediaCard = ({ media }: Props) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = (e) => {
    console.log('2');
    setIsOpenModal(!isOpenModal);
  };

  const shortDescription = media.caption.substr(0, 22);

  return (
    <button className='flex' onClick={toggleModal}>
      <div className='relative flex overflow-hidden'>
        <img
          className='transform hover:scale-105 transition duration-200'
          src={media.images[0]}
        />
        {/* <div className='absolute align-bottom z-10 w-full bg-white opacity-80'>
          <p className='p-1'>{shortDescription}</p>
        </div> */}
      </div>
      {isOpenModal && <MediaModal media={media} close={toggleModal} />}
    </button>
  );
};

export default MediaCard;
