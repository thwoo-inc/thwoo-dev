import IMedia from '../types/media';

type Props = {
  media: IMedia;
};

const MediaOneshot = ({ media }: Props) => {
  return (
    <div className='p-4'>
      <img src={media.images[0]} />
      <p>{media.caption}</p>
    </div>
  );
};

export default MediaOneshot;
