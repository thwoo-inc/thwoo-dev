import IMedia from '../types/media';

type Props = {
  media: IMedia;
};

const MediaOneshot = ({ media }: Props) => {
  return (
    <div className='flex flex-col md:flex-row md:items-center p-4'>
      <div className='flex-1 mb-4 md:mb-0'>
        <img className='rounded' src={media.images[0]} />
      </div>
      <div className='flex-1 md:p-4 text-center'>
        <p className='lg:text-lg'>{media.caption}</p>
      </div>
    </div>
  );
};

export default MediaOneshot;
