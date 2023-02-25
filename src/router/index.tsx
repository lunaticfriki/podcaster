import { lazy, Suspense } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));
const Layout = lazy(() => import('../layout/Layout'));
const ErrorPage = lazy(() => import('../pages/ErrorPage'));
const Podcast = lazy(() => import('../pages/podcast/Podcast'));
const Episode = lazy(() => import('../pages/podcast/episode/Episode'));

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
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
        path="/podcast/:id/episode/:episodeId"
        element={
          <Suspense>
            <Episode />
          </Suspense>
        }
      />
    </Route>,
  ),
);
