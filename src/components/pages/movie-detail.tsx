import GetM from '@/services/service';
import type { MovieDetail } from '@/types/movie-detail';
import dayjs from 'dayjs';
import { CalendarDays } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailStats from '../layouts/movie-detail-stats';
import MovieCast from '../layouts/movie-cast';

const ShowDetail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState<MovieDetail>();
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
        <div className='mx-auto flex w-full max-w-300 gap-8 rounded-md'>
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
          Overview
        </div>
        <div
          className='text-neutral-400'
          style={{ fontSize: 'clamp(0.875rem, 4vw - 1rem, 1rem)' }}
        >
          {detail.overview}
        </div>
        <div
          className='mt-0 font-bold sm:mt-5'
          style={{ fontSize: 'clamp(1.5rem, 5vw - 1rem, 2.25rem)' }}
        >
          Cast & Crew
        </div>
        <MovieCast id={detail.id} />
        <div>{detail.revenue}</div>
      </div>
    </>
  );
};

export default ShowDetail;
