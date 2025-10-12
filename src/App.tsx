import { Route, Routes } from 'react-router-dom';
import List from './components/pages/movie-list';
import ShowDetail from './components/pages/movie-detail';
// import movieDetail from './components/pages/movie-detail';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<List />} />
        <Route path='/detail/:id' element={<ShowDetail />} />
      </Routes>
    </>
  );
}

export default App;
