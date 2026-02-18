import GetM from '@/services/service';
import type { MovieDetail } from '@/types/movie-detail';
import dayjs from 'dayjs';
import { CalendarDays } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DetailStats from '../layouts/movie-detail-stats';
import MovieCast from '../layouts/movie-cast';
import { MovieHeader } from '../layouts/movie-header';

const ShowDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [detail, setDetail] = useState<MovieDetail>();
  const [query, setQuery] = useState('');
  // console.log(id);

  useEffect(() => {
    try {
      const getDetail = async () => {
        const r = await GetM(`movie/${id}`);
        console.log(r.data);
        setDetail(r.data);
        // return r.data:detail as MovieDetail;
      };
      if (id) {
        getDetail();
      }
      // getDetail();
    } catch (e: any) {
      console.error(e);
    }
  }, [id]);

  if (!detail) return <div>Loading movie info ...</div>;

  return (
    <>
      <MovieHeader
        query={query}
        setQuery={setQuery}
        onSearch={() => navigate('/?search=' + query)}
        onClearSearch={() => navigate('/')}
      />
      <div className='relative z-0'>
        {/* Backdrop covers entire screen including behind header */}
        <div
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${detail.backdrop_path})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: 'clamp(400px, 50vw, 810px)',
            maxWidth: '1440px',
          }}
          className='mx-auto flex items-end px-2 sm:px-0'
        >
          <div className='mx-auto flex w-full max-w-300 gap-8 rounded-md pt-20'>
            <div
              className=''
              style={{ width: 'clamp(7.25rem, 15vw + 1rem, 16.25rem)' }}
            >
              <img
                src={`https://image.tmdb.org/t/p/original${detail.poster_path}`}
                alt={detail.title}
                className='rounded-md border-3 border-neutral-300'
              />
            </div>
            <div className='flex-1'>
              <div
                className='text-outline mb-4 w-full font-bold text-white'
                style={{ fontSize: 'clamp(1.5rem, 5vw, 3rem)' }}
              >
                {detail.title}
              </div>
              <div
                className='text-outline flex items-center gap-2'
                style={{ fontSize: 'clamp(0.875rem, 4vw - 1rem, 1rem)' }}
              >
                <CalendarDays className='' />
                {dayjs(detail.release_date).format('DD MMMM YYYY')}
              </div>
              <DetailStats {...detail} className='hidden sm:grid' />
            </div>
          </div>
        </div>

        {/* below hero image */}
        <div className='mx-auto w-full max-w-300 px-2 sm:px-0'>
          <DetailStats {...detail} className='grid sm:hidden' />
          <div
            className='mt-0 font-bold sm:mt-5'
            style={{ fontSize: 'clamp(1.5rem, 5vw - 1rem, 2.25rem)' }}
          >
            Production
          </div>
          {detail.video}
          <div className='grid grid-cols-3 gap-4'>
            {detail.production_companies.map((p) => (
              <div key={p.id} className='flex items-center gap-3'>
                {p.logo_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w92${p.logo_path}`}
                    alt={p.name}
                    className='h-12 w-12 object-contain'
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                ) : (
                  <div className='flex h-12 w-12 items-center justify-center rounded bg-neutral-800 text-xs text-neutral-400'>
                    {p.name.substring(0, 2).toUpperCase()}
                  </div>
                )}
                <div className='min-w-0'>
                  <div className='truncate text-sm'>{p.name}</div>
                  <div className='text-xs text-neutral-400'>
                    {p.origin_country}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            className='mt-0 font-bold sm:mt-5'
            style={{ fontSize: 'clamp(1.5rem, 5vw - 1rem, 2.25rem)' }}
          >
            Overview
          </div>
          <div
            className='text-neutral-400'
            style={{ fontSize: 'clamp(0.875rem, 4vw - 1rem, 1rem)' }}
          >
            {detail.overview}
          </div>
          {/* <div
          className='mt-0 font-bold sm:mt-5'
          style={{ fontSize: 'clamp(1.5rem, 5vw - 1rem, 2.25rem)' }}
        >
          Cast & Crew
        </div> */}
          <MovieCast id={detail.id} />
          <div>{detail.revenue}</div>
        </div>
      </div>
    </>
  );
};

export default ShowDetail;
