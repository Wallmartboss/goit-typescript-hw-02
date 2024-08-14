import { useState, FormEvent, ChangeEvent } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import s from './SearchBar.module.css';

interface SearchBarProps {
  setQuery: (query: string) => void;
}
const SearchBar: React.FC<SearchBarProps> = ({ setQuery }) => {
  const [query, setLocalQuery] = useState<string>('');

  const notify = () => toast('Please, fill keyword for searching...');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!query) {
      notify();
      return;
    }
    setQuery(query);
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLocalQuery(event.target.value);
  };

  return (
    <header className={s.hdr}>
      <form onSubmit={handleSubmit} className={s.form}>
        <input
          className={s.inp}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
        />
        <button type="submit" className={s.btn}>
          {' '}
          Search
        </button>
        {!query && <Toaster />}
      </form>
    </header>
  );
};

export default SearchBar;
