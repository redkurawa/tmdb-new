import { Search, Tv } from 'lucide-react';
import { Input } from '../ui/input';

type Props = {
  query: string;
  setQuery: (val: string) => void;
  onSearch: () => void;
};

export const MovieHeader = ({ query, setQuery, onSearch }: Props) => {
  // const [query, setQuery] = useState('');
  // const [results, setResults] = useState<Movie[]>([]);
  // const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   console.log(query);
  //   const fetchMovies = async () => {
  //     if (query.length >= 2) {
  //       const r = await GetM(`/search/movie?query=${query}`);
  //       console.log(r);
  //       setResults(r.data.results);
  //       setIsOpen(true);
  //     } else {
  //       setIsOpen(false);
  //       setResults([]);
  //     }
  //   };

  //   const delayDebounce = setTimeout(fetchMovies, 500); // debounce 500ms

  //   return () => clearTimeout(delayDebounce);
  // }, [query]);

  return (
    <div className='fixed top-0 left-1/2 z-10 flex h-22.5 w-full max-w-300 -translate-x-1/2 items-center justify-between'>
      <div className='flex w-100 items-center justify-between'>
        <div className='flex items-center gap-3'>
          <Tv className='size-10 fill-white' />
          <div className='text-[29px] font-semibold'>Movie</div>
        </div>
        <div className='hidden md:block'>Home</div>
        <div className='hidden md:block'>Favorite</div>
      </div>
      <div className='flex h-14 max-w-45 items-center gap-2 rounded-2xl bg-black/10 p-4'>
        <Search />
        <Input
          placeholder='Search Movie'
          className='w-full border-0 p-0 text-neutral-400 placeholder:text-neutral-200'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              onSearch();
            }
          }}
        />
      </div>
      {/* {isOpen && results.length > 0 && (
        <div className='absolute top-full z-20 mt-2 w-full max-w-45 rounded-md bg-white shadow-lg'>
          {results.map((movie) => (
            <div
              key={movie.id}
              className='cursor-pointer px-4 py-2 hover:bg-neutral-100'
              onClick={() => {
                console.log('Selected:', movie.title);
                setQuery(movie.title);
                setIsOpen(false);
              }}
            >
              {movie.title}
            </div>
          ))}
        </div>
      )} */}
    </div>
  );
};
