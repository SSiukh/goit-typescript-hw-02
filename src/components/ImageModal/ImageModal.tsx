import s from "./ImageModal.module.css";
import ReactModal from "react-modal";
import { format } from "date-fns";
import { BiLike } from "react-icons/bi";
import { ModalData } from "../App";

ReactModal.setAppElement("#root");

interface ImageModalProps {
  isOpen: boolean;
  data: ModalData;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, data, onClose }) => {
  const { author, likes, descr, date, photo } = data;

  const formatDate: string = format(date, "dd/MM/yyyy");
  return (
    <div>
      <ReactModal
        className={s.modal}
        overlayClassName={s.overlay}
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Image Modal"
      >
        <img className={s.img} src={photo} alt={descr} />
        <div className={s.info}>
          <div className={s.leftInfo}>
            <p className={s.author}>{author}</p>
            <p className={s.descr}>{descr}</p>
          </div>
          <div className={s.rightInfo}>
            <p className={s.likes}>
              <BiLike className={s.icon} size={30} />
              {likes}
            </p>
            <p className={s.date}>{formatDate}</p>
          </div>
        </div>
      </ReactModal>
    </div>
  );
};

export default ImageModal;
