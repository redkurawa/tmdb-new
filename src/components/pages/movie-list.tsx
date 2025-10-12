import GetM from '@/services/service';
import type { Movie } from '@/types/movie-list';
import { useQuery } from '@tanstack/react-query';
import { MovieCard } from '../layouts/movie-card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';

const List = () => {
  const { data: popular } = useQuery({
    queryKey: ['tmdb/popular'],
    queryFn: async () => {
      const r = await GetM('movie/popular');
      console.log('[List] popular:', r.data);
      return r.data.results as Movie[];
    },
  });

  const { data: upcoming } = useQuery({
    queryKey: ['tmdb/upcoming'],
    queryFn: async () => {
      const r = await GetM('movie/upcoming');
      console.log('[List] upcoming:', r.data);
      return r.data.results as Movie[];
    },
  });

  if (!popular) return <div>Loading popular...</div>;
  if (!upcoming) return <div>Loading upcoming...</div>;

  return (
    <>
      {/* hero */}
      <div
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${popular[0].backdrop_path})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',

          // height: '80vh',
          height: 'clamp(400px, 50vw, 800px)',
          maxWidth: '1440px',
        }}
        className='mx-auto flex items-center'
      >
        <div className='mx-auto w-full max-w-300'>
          <div
            className='mb-4 font-bold'
            style={{ fontSize: 'clamp(1.5rem, 5vw, 3rem)' }}
          >
            {popular[0].title}
          </div>
          <div
            className='text-neutral-400'
            style={{ fontSize: 'clamp(0.875rem, 4vw - 1rem, 1rem)' }}
          >
            {popular[0].overview}
          </div>
        </div>
      </div>
      <div className='mx-auto w-full max-w-300'>
        <h1
          className='font-bold'
          style={{ fontSize: 'clamp(1.5rem, 5vw - 1rem, 2.25rem)' }}
        >
          Trending Now
        </h1>
        <div className=''>
          <Carousel className='w-full'>
            <CarouselContent>
              {popular.map((d) => (
                <CarouselItem key={d.id} className='basis-1/3 sm:basis-1/5'>
                  <MovieCard {...d} />
                  {/* {d.title} */}
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <h1
          className='font-bold'
          style={{ fontSize: 'clamp(1.5rem, 5vw - 1rem, 2.25rem)' }}
        >
          New Release
        </h1>
        <div className='grid grid-cols-3 gap-5 sm:grid-cols-5'>
          {upcoming.map((d) => (
            <div key={d.id}>
              <MovieCard {...d} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default List;
