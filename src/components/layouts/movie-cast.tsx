import GetM from '@/services/service';
import type { Cast } from '@/types/movie-credit';
import { useQuery } from '@tanstack/react-query';

interface CastProps {
  id: number;
}

const MovieCast = ({ id }: CastProps) => {
  const { data } = useQuery({
    queryKey: ['movie/cast'],
    queryFn: async () => {
      const r = await GetM(`movie/${id}/credits`);
      console.log('credit :', r.data.cast);
      return r.data.cast as Cast[];
    },
  });

  return (
    <div className='grid grid-cols-1 sm:grid-cols-3'>
      {data?.map((d, i) => (
        <div key={i} className='flex gap-4'>
          <img
            src={
              d.profile_path
                ? `https://image.tmdb.org/t/p/w185${d.profile_path}`
                : d.gender == 1
                  ? '/icons/female-s.png'
                  : d.gender == 2
                    ? '/icons/male-s.png'
                    : '/icons/avatar-s2.png'
            }
            alt={d.name}
            className='mb-2 h-[160px] w-[120px] rounded-lg object-cover'
          />
          <div className='flex flex-grow flex-col justify-center'>
            <div className='text-neutral-25 text-base font-semibold'>
              {d.name}
            </div>
            <div className='text-base text-neutral-400'>as {d.character}</div>
            <div className='text-base text-neutral-400'>
              popular : {d.popularity.toFixed(2)}/10
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieCast;
