import { BulletList } from "react-content-loader";
interface IContentLoader {
  className?: string;
}
const ContentLoader = ({ className }: IContentLoader) => {
  return <BulletList className={className} backgroundColor="#E0E0E0" />;
};

export default ContentLoader;
