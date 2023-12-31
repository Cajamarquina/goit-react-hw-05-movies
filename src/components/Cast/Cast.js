import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ColorRing } from 'react-loader-spinner';
import { Toaster } from 'react-hot-toast';

import { fetchMovieCredits } from 'API';
import { ContainerLoader } from 'components/ContainerLoader/ContainerLoader.styled';
import {
  ActorImage,
  CastContainer,
  ActorName,
  ActorCharacter,
} from './Cast.styled';

const Cast = () => {
  const [movieCredits, setMovieCredits] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  useEffect(() => {
    if (!movieId) return;

    async function fetchAllMovieCredits() {
      try {
        setIsLoading(true);
        setError(false);
        const creditsById = await fetchMovieCredits(movieId);
        const limitedCredits = creditsById.cast.slice(0, 16);
        setMovieCredits(limitedCredits);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchAllMovieCredits();
  }, [movieId]);

  return (
    <CastContainer>
      <ul>
        {movieCredits.map(actor => (
          <li key={actor.cast_id}>
            <ActorImage
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                  : defaultImg
              }
              alt={actor.name}
              width={150}
            />
            <ActorName>{actor.name}</ActorName>
            <ActorCharacter>Character: {actor.character}</ActorCharacter>
          </li>
        ))}
      </ul>
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
    </CastContainer>
  );
};

export default Cast;