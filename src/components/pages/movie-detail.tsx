import GetM from '@/services/service';
import type { MovieDetail } from '@/types/movie-detail';
import { CalendarDays, Video } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import dayjs from 'dayjs';

const ShowDetail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState<MovieDetail>();
  console.log(id);

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
        className='mx-auto flex items-end'
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
            <div className='text-outline flex items-center gap-2'>
              <CalendarDays className='' />
              {dayjs(detail.release_date).format('DD MMMM YYYY')}
            </div>
            <div className='grid w-full grid-cols-3 gap-x-5 py-6'>
              <div className='flex flex-col items-center gap-2 rounded-2xl bg-black/30 p-5 text-center text-[16px]'>
                <img src='/icons/star.svg' alt='star' />
                Rating
                <div>{detail.vote_average.toFixed(2)}/10</div>
              </div>
              <div className='flex flex-col items-center gap-2 rounded-2xl bg-black/30 p-5 text-center text-[16px]'>
                <Video className='size-8 fill-white' />
                Genre
                {detail.genres.length > 1 ? (
                  detail.genres.length > 4 ? (
                    <div className='grid grid-cols-2 gap-x-10'>
                      {detail.genres.map((g) => (
                        <div key={g.id}>{g.name}</div>
                      ))}
                    </div>
                  ) : (
                    detail.genres.map((g) => <div key={g.id}>{g.name}</div>)
                  )
                ) : (
                  <div>{detail.genres[0].name}</div>
                )}
              </div>
              <div className='flex flex-col items-center gap-2 rounded-2xl bg-black/30 p-5 text-center text-[16px]'>
                <img src='/icons/age.svg' alt='star' />
                Age Limit
                <div>{detail.adult ? 'Adult' : 'All age'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* below hero image */}
      <div className='mx-auto w-full max-w-300'>
        <div
          className='font-bold'
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
      </div>
    </>
  );
};

export default ShowDetail;
