import { useState } from 'react';
import IMedia from '../types/media';
import MediaModal from './MediaModal';

type Props = {
  media: IMedia;
};

const MediaCard = ({ media }: Props) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    if (!isOpenModal) {
      setIsOpenModal(true);
    }
  };

  const toggleModal = (e) => {
    setIsOpenModal(!isOpenModal);
  };

  const shortDescription = media.caption.substr(0, 22);

  return (
    <button className='flex' onClick={openModal}>
      <div className='relative flex overflow-hidden'>
        {media.contents && media.contents[0].type == 'image' && (
          <img
            className='rounded transform hover:scale-105 transition duration-200'
            src={media.contents[0].url}
          />
        )}

        {/* <div className='absolute align-bottom z-10 w-full bg-white opacity-80'>
          <p className='p-1'>{shortDescription}</p>
        </div> */}
      </div>
      {isOpenModal && <MediaModal media={media} close={toggleModal} />}
    </button>
  );
};

export default MediaCard;
