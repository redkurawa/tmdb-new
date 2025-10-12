import type { Movie } from '@/types/movie-list';
import { Link } from 'react-router-dom';

export const MovieCard = (movie: Movie) => {
  if (!movie) return;
  return (
    <div>
      <Link to={`/detail/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt=''
          className='rounded-[8px]'
        />
      </Link>
      <div
        className='font-semibold'
        style={{ fontSize: 'clamp(1rem, 2vw - 0.75rem, 1.125rem)' }}
      >
        {movie.title}
      </div>
      <div
        className='font-normal text-neutral-400'
        style={{ fontSize: 'clamp(1rem, 2vw - 0.75rem, 1.125rem)' }}
      >
        {movie.vote_average.toFixed(2)}/10
      </div>
    </div>
  );
};
