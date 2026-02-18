import { ArrowLeft, Search, Tv, X } from 'lucide-react';
import { Input } from '../ui/input';

type Props = {
  query: string;
  setQuery: (val: string) => void;
  onSearch: () => void;
  onClearSearch?: () => void;
};

export const MovieHeader = ({
  query,
  setQuery,
  onSearch,
  onClearSearch,
}: Props) => {
  return (
    <div
      className='fixed top-0 left-1/2 flex h-22.5 w-full max-w-300 -translate-x-1/2 items-center justify-between'
      style={{ zIndex: 9999 }}
    >
      <div className='flex w-100 items-center justify-between'>
        <div className='flex items-center gap-3'>
          <Tv className='size-10 fill-white' />
          <div className='text-[29px] font-semibold'>Movie</div>
        </div>
        <div
          className='hidden cursor-pointer hover:text-white md:block'
          onClick={onClearSearch ? () => onClearSearch() : undefined}
        >
          {onClearSearch ? (
            <div className='hover-back-btn flex items-center gap-2'>
              <ArrowLeft className='size-5' />
              Back
            </div>
          ) : (
            'Home'
          )}
        </div>
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
        {query && (
          <button
            onClick={() => setQuery('')}
            className='ml-1 rounded-full p-1 hover:bg-black/20'
          >
            <X className='size-4' />
          </button>
        )}
      </div>
    </div>
  );
};
