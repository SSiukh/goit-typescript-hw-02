import s from "./ImageCard.module.css";

interface ImageCardProps {
  small: string;
  alt: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ small, alt }) => {
  return (
    <div className={s.card}>
      <img className={s.img} src={small} alt={alt} />
    </div>
  );
};

export default ImageCard;
