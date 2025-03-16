import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn.tsx";
import SearchBar from "./SearchBar/SearchBar.tsx";
import ImageGallery from "./ImageGallery/ImageGallery.tsx";
import Loader from "./Loader/Loader.tsx"; 
import ErrorMessage from "./ErrorMessage/ErrorMessage.tsx";
import ImageModal from "./ImageModal/ImageModal.tsx";
import { useState, useEffect, useRef } from "react";
import { fetchImagesUsingWord } from "../fetchData";
import { UnsplashResult } from "../Api.types";

export interface ModalData {
  author: string;
  likes: number;
  descr: string;
  date: string;
  photo: string;
}

function App() {
  const [searchWord, setSearchWord] = useState<string>("");
  const [searchData, setSearchData] = useState<UnsplashResult[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [modal, setModal] = useState<ModalData | null>(null);
  const cardRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (searchWord) {
      const fetchImgs = async () => {
        try {
          setLoading(true);
          setError(false);
          const response = await fetchImagesUsingWord(searchWord, page);
          setSearchData((prev) =>
            page === 1 ? response.results : [...prev, ...response.results]
          );
          setTotalPages(response.total_pages);
        } catch {
          setError(true);
        } finally {
          setLoading(false);
        }
      };
      fetchImgs();
    }
  }, [searchWord, page]);

  useEffect(() => {
    if (searchData.length > 12) {
      cardRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [searchData]);

  const handleSearch = (newWord: string): void => {
    setSearchWord(newWord);
    setSearchData([]);
    setPage(1);
  };

  const loadMore = (): void => {
    setPage((prev) => prev + 1);
  };

  const isLoadMore = totalPages === page;

  return (
    <div className="container">
      <SearchBar onSubmit={handleSearch} />
      {error ? (
        <ErrorMessage />
      ) : (
        <ImageGallery onImageClick={setModal} data={searchData} ref={cardRef} />
      )}
      {loading && <Loader />}
      {searchData.length > 0 && !isLoadMore && (
        <LoadMoreBtn onLoadMore={loadMore} />
      )}
      {modal && (
        <ImageModal
          isOpen={!!modal}
          data={modal}
          onClose={() => setModal(null)}
        />
      )}
    </div>
  );
}

export default App;
