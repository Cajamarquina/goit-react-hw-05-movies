import { Outlet, useParams, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef, Suspense } from 'react';
import { ColorRing } from 'react-loader-spinner';
import { Toaster } from 'react-hot-toast';
import { TbCircleArrowLeft } from 'react-icons/tb';
import { fetchMovieDetails } from 'API';
import { ContainerLoader } from 'components/ContainerLoader/ContainerLoader.styled';
import { MovieOverview } from 'components/MovieOverview/MovieOverview';
import {
  InfoListItem,
  AdditionalInfo,
  DescWrapper,
  BackLink,
} from 'components/MovieDetails.styled';

const MovieDetails = () => {
  const [moviesDetails, setMoviesDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  useEffect(() => {
    if (!movieId) return;

    async function fetchAllMovieDetails() {
      try {
        setIsLoading(true);
        setError(false);
        const MovieById = await fetchMovieDetails(movieId);
        setMoviesDetails(MovieById);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchAllMovieDetails();
  }, [movieId]);

  return (
    <main>
      <BackLink to={backLinkLocationRef.current}>
        {' '}
        <TbCircleArrowLeft />
        Go back
      </BackLink>
      <MovieOverview data={moviesDetails} />
      <DescWrapper>
        <AdditionalInfo>Additional information</AdditionalInfo>
        <ul>
          <InfoListItem>
            <BackLink to="cast">Cast</BackLink>
          </InfoListItem>
          <InfoListItem>
            <BackLink to="reviews">Reviews</BackLink>
          </InfoListItem>
        </ul>
      </DescWrapper>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
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

export default MovieDetails;