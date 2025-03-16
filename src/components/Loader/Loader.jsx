import s from "./Loader.module.css";
import { InfinitySpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className={s.loader}>
      <InfinitySpin
        visible={true}
        width="200"
        color="#f0bb78"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
};

export default Loader;
