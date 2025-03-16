import s from "./Loader.module.css";
import { InfinitySpin } from "react-loader-spinner";

const Loader: React.FC = () => {
  return (
    <div className={s.loader}>
      <InfinitySpin
        width="200"
        color="#f0bb78"
      />
    </div>
  );
};

export default Loader;
