import GetM from '@/services/service';
import type { MovieDetail } from '@/types/movie-detail';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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

  if (!detail) return <div>Loading details ...</div>;

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
        <div className='mx-auto flex w-full max-w-300 border'>
          <div
            className=''
            style={{ width: 'clamp(7.25rem, 15vw + 1rem, 16.25rem)' }}
          >
            <img
              src={`https://image.tmdb.org/t/p/original${detail.poster_path}`}
              alt={detail.title}
            />
          </div>
          <div
            className='mb-4 font-bold text-white'
            style={{ fontSize: 'clamp(1.5rem, 5vw, 3rem)' }}
          >
            {detail.title}
          </div>
        </div>
      </div>
      <div
        className='font-bold'
        style={{ fontSize: 'clamp(1.5rem, 5vw - 1rem, 2.25rem)' }}
      >
        Overview
      </div>
      <div
        className=''
        style={{ fontSize: 'clamp(0.875rem, 4vw - 1rem, 1rem)' }}
      >
        {detail.overview}
      </div>
    </>
  );
};

export default ShowDetail;
