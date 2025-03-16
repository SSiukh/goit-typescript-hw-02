import s from "./ImageCard.module.css";

const ImageCard = ({ small, alt }) => {
  return (
    <div className={s.card}>
      <img className={s.img} src={small} alt={alt} />
    </div>
  );
};

export default ImageCard;
