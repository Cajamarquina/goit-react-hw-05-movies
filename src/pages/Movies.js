import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner';
import toast, { Toaster } from 'react-hot-toast';

import { SearchForm } from '../components/SearchForm/SearchForm';
import { MoviesList } from '../components/MoviesList/MoviesList';
import { ContainerLoader } from 'components/ContainerLoader/ContainerLoader.styled';
import { fetchSearchMovie } from 'API';

const Movies = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const searchValue = searchParams.get('query') || '';

  useEffect(() => {
    if (searchValue === '') {
      return;
    }
    async function fetchMovieBySearchValue() {
      try {
        setIsLoading(true);
        setError(false);
        const searchMovie = await fetchSearchMovie(searchValue);
        if (searchMovie.results.length > 0) {
          setSearchMovies(searchMovie.results);
        } else {
          toast.error(
            'Sorry...Nothing found. Please, search once again!'
          );
          setSearchMovies([]);
        }
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovieBySearchValue();
  }, [searchValue]);

  const updateSearchParams = value => {
    const nextParams = value !== '' ? { query: value } : {};
    setSearchParams(nextParams);
  };

  return (
    <main>
      <SearchForm onSubmit={updateSearchParams} />
      {searchMovies.length > 0 && <MoviesList movies={searchMovies} />}

      {isLoading && (
        <ContainerLoader>
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        </ContainerLoader>
      )}

      {error && <span>There was an error! Please, reload this page!</span>}
      <Toaster position="top-right" />
    </main>
  );
};

export default Movies;