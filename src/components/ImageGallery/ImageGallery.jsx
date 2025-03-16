import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";
import { forwardRef } from "react";

const ImageGallery = forwardRef(({ data, onImageClick }, ref) => {
  return (
    <ul className={s.gallery}>
      {data.map((item, index) => {
        return (
          <li
            className={s.item}
            key={item.id}
            alt={item.descr}
            ref={index === data.length - 12 ? ref : null}
            onClick={() =>
              onImageClick({
                author: item.user.name,
                likes: item.likes,
                descr: item.description,
                date: item.created_at,
                photo: item.urls.regular,
              })
            }
          >
            <ImageCard small={item.urls.small} />
          </li>
        );
      })}
    </ul>
  );
});

ImageGallery.displayName = "ImageGallery";

export default ImageGallery;
