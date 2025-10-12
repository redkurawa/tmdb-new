import type { MovieDetail } from '@/types/movie-detail';
import { Video } from 'lucide-react';

type DetailStatsProps = MovieDetail & {
  className?: string; // Menambahkan prop opsional className
};

const DetailStats = ({ className, ...d }: DetailStatsProps) => {
  return (
    <div className={`grid w-full grid-cols-3 gap-x-5 py-6 ${className || ''}`}>
      <div
        className='flex flex-col items-center gap-2 rounded-2xl bg-black/30 p-5 text-center'
        style={{ fontSize: 'clamp(0.875rem, 4vw - 1rem, 1rem)' }}
      >
        <img src='/icons/star.svg' alt='star' />
        Rating
        <div>{d.vote_average.toFixed(2)}/10</div>
      </div>
      <div
        className='flex flex-col items-center gap-2 rounded-2xl bg-black/30 p-5 text-center'
        style={{ fontSize: 'clamp(0.875rem, 4vw - 1rem, 1rem)' }}
      >
        <Video className='size-8 fill-white' />
        Genre
        {d.genres.length > 1 ? (
          d.genres.length > 4 ? (
            <div className='grid grid-cols-2 gap-x-10'>
              {d.genres.map((g) => (
                <div key={g.id}>{g.name}</div>
              ))}
            </div>
          ) : (
            d.genres.map((g) => <div key={g.id}>{g.name}</div>)
          )
        ) : (
          <div>{d.genres[0].name}</div>
        )}
      </div>
      <div
        className='flex flex-col items-center gap-2 rounded-2xl bg-black/30 p-5 text-center'
        style={{ fontSize: 'clamp(0.875rem, 4vw - 1rem, 1rem)' }}
      >
        <img src='/icons/age.svg' alt='star' />
        Age Limit
        <div>{d.adult ? 'Adult' : 'All age'}</div>
      </div>
    </div>
  );
};

export default DetailStats;
