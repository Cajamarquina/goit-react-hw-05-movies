import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ColorRing } from 'react-loader-spinner';
import { Toaster } from 'react-hot-toast';

import { fetchMovieReviews } from 'API';
import { ContainerLoader } from 'components/ContainerLoader/ContainerLoader.styled';
import {
  ReviewsContainer,
  NoReviewsMessage,
  AuthorName,
  ReviewContent,
} from './Reviews.styled';

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    async function fetchAllMovieReviews() {
      try {
        setIsLoading(true);
        setError(false);
        const reviewsById = await fetchMovieReviews(movieId);
        if (reviewsById.results && reviewsById.results.length > 0) {
          setMovieReviews(reviewsById.results);
        } else {
          setMovieReviews([]);
        }
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchAllMovieReviews();
  }, [movieId]);

  return (
    <ReviewsContainer>
      <ul>
        {movieReviews.length > 0 ? (
          movieReviews.map(review => (
            <li key={review.id}>
              <AuthorName>{review.author}</AuthorName>
              <ReviewContent>{review.content}</ReviewContent>
            </li>
          ))
        ) : (
          <NoReviewsMessage>
            We don't have any reviews for this movie.
          </NoReviewsMessage>
        )}
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
    </ReviewsContainer>
  );
};

export default Reviews;