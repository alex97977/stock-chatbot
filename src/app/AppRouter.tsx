import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Loader from '@/components/loader/Loader';

const Home = lazy(() => import('@/features/home/components/Home'));

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Suspense fallback={<Loader />}>
          <Home />
        </Suspense>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
};
export default AppRouter;
