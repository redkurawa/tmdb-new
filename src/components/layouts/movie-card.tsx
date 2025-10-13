import type { Movie } from '@/types/movie-list';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export const MovieCard = (movie: Movie) => {
  if (!movie) return;
  return (
    <div>
      <Link to={`/detail/${movie.id}`}>
        <motion.img
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt=''
          className='rounded-[8px]'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        />
      </Link>
      <div className='text-[16px] font-semibold sm:text-[18px]'>
        {movie.title}
      </div>
      <div className='text-[12px] font-normal text-neutral-400 sm:text-[14px]'>
        tmdb id : {movie.id}
      </div>
      <div className='text-[12px] font-normal text-neutral-400 sm:text-[14px]'>
        {movie.vote_average.toFixed(2)}/10
      </div>
    </div>
  );
};
