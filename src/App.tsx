import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Episode from './pages/podcast/episode/Episode';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Layout from './layout/Layout';
import Podcast from './pages/podcast/Podcast';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/podcast/:id" element={<Podcast />} errorElement={<ErrorPage />} />
          <Route
            path="/podcast/:id/episode/:id"
            element={<Episode />}
            errorElement={<ErrorPage />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
