import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import ImageModal from "./ImageModal/ImageModal";
import { useState, useEffect, useRef } from "react";
import { fetchImagesUsingWord } from "../fetchData";

function App() {
  const [searchWord, setSearchWord] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [modal, setModal] = useState(null);
  const cardRef = useRef(null);

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
      cardRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [searchData]);

  const handleSearch = (newWord) => {
    setSearchWord(newWord);
    setSearchData([]);
    setPage(1);
  };

  const loadMore = () => {
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
