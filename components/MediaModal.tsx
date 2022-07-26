import { useState } from 'react';
import IMedia from '../types/media';
import Portal from './Portal';

type Props = {
  media: IMedia;
  close: any;
};

interface IButton {
  isVisible: () => boolean;
  sideStyle: string;
  click: any;
  svgPath: string;
}

const MediaModal = ({ media, close }: Props) => {
  const [index, setIndex] = useState(0);

  const contentsLength = media.contents.length;
  const prev = () => {
    const prevIndex = index === 0 ? contentsLength - 1 : index - 1;
    setIndex(prevIndex);
  };
  const next = () => {
    const nextIndex = index + 1 >= contentsLength ? 0 : index + 1;
    setIndex(nextIndex);
  };

  const buttons: IButton[] = [
    {
      isVisible: () => {
        return index > 0 ? true : false;
      },
      sideStyle: 'left-1/4 lg:left lg:top-1/2 mx-auto',
      click: prev,
      svgPath: 'M15 18l-6-6 6-6',
    },
    {
      isVisible: () => {
        return true;
      },
      sideStyle: 'left-0 right-0 mx-auto',
      click: close,
      svgPath: 'M7 13l5 5 5-5M7 6l5 5 5-5',
    },
    {
      isVisible: () => {
        return index + 1 < contentsLength ? true : false;
      },
      sideStyle: 'right-1/4 lg:right lg:top-1/2 mx-auto',
      click: next,
      svgPath: 'M9 18l6-6-6-6',
    },
  ];

  return (
    <Portal>
      <div className="fixed top-0 bottom-0 left-0 right-0 z-30">
        <div className=" w-full h-full ">
          <div className="absolute w-full h-full bg-black opacity-80 z-10" />
          <div className="absolute w-full h-full z-20 flex items-center">
            <div className="p-2 md:w-4/5 lg:w-1/2 mx-auto">
              {media.contents && media.contents[index].type == 'image' && (
                <img className="mb-2 rounded" src={media.contents[index].url} />
              )}
              {/* {media.contents && media.contents[index].type == 'video' && (
                <video
                  className='mb-2 rounded'
                  src={media.contents[index].url}
                  controls
                >
                  <p>
                    動画を再生するには、videoタグをサポートしたブラウザが必要です。
                  </p>
                </video>
              )} */}
              <p className="text-gray-300">{media.caption}</p>
              <div>
                {buttons
                  .filter((button) => button.isVisible())
                  .map((button, idx) => (
                    <div
                      key={idx}
                      className={`absolute bg-gray-500 opacity-50 rounded-full cursor-pointer bottom-8 w-12 h-12 z-30 -mt-7 ${button.sideStyle}`}
                      onClick={button.click}
                    >
                      <svg
                        width="32px"
                        height="32px"
                        className="absolute left-2 top-2"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#000000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d={button.svgPath}></path>
                      </svg>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default MediaModal;
