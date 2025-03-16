import ImageCard from "../ImageCard/ImageCard.tsx";
import s from "./ImageGallery.module.css";
import { forwardRef } from "react";
import { UnsplashResult } from "../../Api.types";
import { ModalData } from "../App";

interface ImageGalleryProps {
  data: UnsplashResult[];
  onImageClick: (object: ModalData) => void;
}

const ImageGallery = forwardRef<HTMLLIElement, ImageGalleryProps>(
  ({ data, onImageClick }, ref) => {
    
    return (
      <ul className={s.gallery}>
        {data.map((item, index) => {
          return (
            <li
              className={s.item}
              key={item.id}
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
              <ImageCard small={item.urls.small} alt={item.description} />
            </li>
          );
        })}
      </ul>
    );
  }
);

ImageGallery.displayName = "ImageGallery";

export default ImageGallery;
