import { useEffect, useState } from 'react';
import Loader from './Loader/Loader';
import SearchBar from './SearchBar/SearchBar';
import { requestPictures } from './Api/api-unsplash';
import ImageGallery from './ImageGallery/ImageGallery';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import ImageModal from './ImageModal/ImageModal';
import { ImageItem } from './types';

const App: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [items, setItems] = useState<ImageItem[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [isError, setIsError] = useState<boolean>(false);
  const [alt, setAlt] = useState<string>(' ');
  const [largeImage, setLargeImage] = useState<string>(' ');
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const openModal = (largeImage: string, alt: string): void => {
    setLargeImage(largeImage);
    setAlt(alt);
    setModalIsOpen(true);
  };

  const closeModal = (): void => {
    setModalIsOpen(false);
    setLargeImage('');
    setAlt('');
  };

  const handleSetQuery = (query: string): void => {
    setQuery(query);
    setPage(1);
    setItems([]);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const response = await requestPictures(query, page);
        setItems(prev => [...prev, ...response.results]);
        setTotalPages(response.total_pages);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    if (query) {
      getData();
    }
  }, [query, page]);

  return (
    <div>
      <SearchBar setQuery={handleSetQuery} />
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
      {query && !isError && (
        <ImageGallery items={items} openModal={openModal} />
      )}
      {totalPages > page && !isLoading && <LoadMoreBtn setPage={setPage} />}
      {largeImage && (
        <ImageModal
          largeImage={largeImage}
          alt={alt}
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
        />
      )}
    </div>
  );
};

export default App;
