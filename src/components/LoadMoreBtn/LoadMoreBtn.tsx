import s from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onLoadMore: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onLoadMore }) => {
  return (
    <div className={s.container}>
      <button onClick={onLoadMore} className={s.button}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
