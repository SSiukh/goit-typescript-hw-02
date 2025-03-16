import s from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <div className={s.error}>
      <p className={s.text}>Something went wrong. Please try again later.</p>
    </div>
  );
};

export default ErrorMessage;
