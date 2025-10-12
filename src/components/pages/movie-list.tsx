import GetM from '@/services/service';
import type { Movie } from '@/types/movie-list';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
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

  // const { data: upcoming } = useQuery({
  //   queryKey: ['tmdb/upcoming'],
  //   queryFn: async () => {
  //     const r = await GetM('movie/upcoming?language=en-US&page=83');
  //     console.log('[List] upcoming:', r);
  //     return r.data.results as Movie[];
  //   },
  // });

  const {
    data: upcoming,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ['tmdb/upcoming'],
    initialPageParam: 1,
    queryFn: async ({ pageParam }) => {
      const r = await GetM(`movie/upcoming?language=en-US&page=${pageParam}`);
      const res = (r.data?.results ?? []) as Movie[];
      console.log('[List] upcoming:', r.data);
      const nextOf = r.data?.page ? (pageParam as number) + 1 : undefined;
      return { res, nextOf };
    },
    getNextPageParam: (lastPage) => lastPage.nextOf,
  });

  if (status == 'pending') return <div>Loading</div>;
  if (status == 'error') return <div>Error</div>;

  if (!popular) return <div>Loading popular...</div>;
  if (!upcoming) return <div>Loading upcoming...</div>;

  const allUpcomingMovies = upcoming.pages.flatMap((page) => page.res);

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
                <CarouselItem key={d.id} className='basis-1/2 sm:basis-1/5'>
                  <MovieCard {...d} />
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

        <div className='grid grid-cols-2 gap-5 sm:grid-cols-5'>
          {allUpcomingMovies.map((d) => (
            <div key={d.id}>
              <MovieCard {...d} />
            </div>
          ))}
        </div>
        <div className='mx-auto my-10 flex w-full justify-center'>
          {hasNextPage ? (
            <button
              onClick={() => fetchNextPage()}
              disabled={isFetchingNextPage}
              className='mx-auto rounded bg-neutral-800 px-3 py-2 text-white disabled:opacity-60'
            >
              {isFetchingNextPage ? 'Loading FetchingNext …' : 'Load More'}
            </button>
          ) : (
            <div className='text-sm text-neutral-500'>
              Semua data sudah dimuat.
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default List;
