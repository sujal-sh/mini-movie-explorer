import React, { useEffect } from 'react';
import { useDebounce } from '../hooks/useDebounce';

const SearchBar = ({ query, setQuery, onSearch }) => {
  const debouncedQuery = useDebounce(query);

  useEffect(() => {
    onSearch(debouncedQuery);
  }, [debouncedQuery]);

  return (
    <input
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="search-bar"
    />
  );
};

export default SearchBar;