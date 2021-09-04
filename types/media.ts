import IContent from './content';
export default interface IMedia {
  id: string;
  caption: string;
  tags: string[];
  type: string;
  thumbnail: string;
  images: string[];
  contents: IContent[];
  videos: string[];
  permalink: string;
  username: string;
  timestamp: string;
}
