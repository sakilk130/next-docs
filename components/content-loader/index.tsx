import ContentLoader from "react-content-loader";

interface ICustomContentLoader {
  className?: string;
}
const CustomContentLoader = ({ className }: ICustomContentLoader) => {
  return (
    <ContentLoader
      speed={2}
      width="100%"
      viewBox="0 0 400 150"
      foregroundColor="#ecebeb"
      className={className}
      backgroundColor="#E0E0E0"
    >
      <rect x="35" y="10" rx="5" ry="5" width="150" height="10" />
      <rect x="35" y="45" rx="5" ry="5" width="150" height="10" />
      <rect x="35" y="80" rx="5" ry="5" width="150" height="10" />
      <rect x="35" y="115" rx="5" ry="5" width="150" height="10" />
      <rect x="3" y="5" rx="4" ry="4" width="20" height="20" />
      <rect x="3" y="40" rx="4" ry="4" width="20" height="20" />
      <rect x="3" y="75" rx="4" ry="4" width="20" height="20" />
      <rect x="3" y="110" rx="4" ry="4" width="20" height="20" />
    </ContentLoader>
  );
};

export default CustomContentLoader;
