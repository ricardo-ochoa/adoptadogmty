import { LightgalleryItem } from "react-lightgallery";

interface PhotoItemProps {
  image: string;
  url: string;
  title: string;
}

const PhotoItem: React.FC<PhotoItemProps> = ({ image, url, title }) => (
  <div>
    <LightgalleryItem group="any" src={image}>
      <a href={url}>
        <img src={image} alt={title} />
        <div
          style={{
            marginTop: "8px",
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
        </div>
      </a>
    </LightgalleryItem>
  </div>
);

export default PhotoItem;
