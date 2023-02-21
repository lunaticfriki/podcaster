import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Suspense, lazy } from 'react';

const Episode = lazy(() => import('./pages/podcast/episode/Episode'));
const Home = lazy(() => import('./pages/Home'));
const Podcast = lazy(() => import('./pages/podcast/Podcast'));
const Layout = lazy(() => import('./layout/Layout'));
const ErrorPage = lazy(() => import('./pages/ErrorPage'));

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 60 * 24,
        cacheTime: 1000 * 60 * 60 * 24,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route
              path="/*"
              element={
                <Suspense>
                  <ErrorPage />
                </Suspense>
              }
            />
            <Route
              path="/"
              element={
                <Suspense>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="/podcast/:id"
              element={
                <Suspense>
                  <Podcast />
                </Suspense>
              }
            />
            <Route
              path="/podcast/:id/episode/:id"
              element={
                <Suspense>
                  <Episode />
                </Suspense>
              }
            />
          </Routes>
        </Layout>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
