import s from "./SearchBar.module.css";
import { IoSearch } from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";
import { FormEvent } from "react";

interface SearchBarProps {
  onSubmit: (word: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const value: string = (form.elements.namedItem("word") as HTMLInputElement).value.trim();

    if (!value) {
      toast.error("The search field must be filled");
      return;
    }
    onSubmit(value);
    form.reset();
  };

  return (
    <header className={s.header}>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="word"
        />
        <button className={s.button} type="submit">
          <IoSearch size={26} className={s.buttonIcon} />
        </button>
      </form>
      <Toaster
        toastOptions={{
          position: "top-right",
          style: {
            border: "1px solid #543a14",
            color: "#543a14",
            backgroundColor: "#fff0dc",
          },
        }}
      />
    </header>
  );
};

export default SearchBar;
