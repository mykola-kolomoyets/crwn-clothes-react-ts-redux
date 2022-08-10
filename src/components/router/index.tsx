import { FC, Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from '@layout';

const Categories = lazy(() => import('@views/categories'));
const Shop = lazy(() => import('@views/shop'));

const Login = lazy(() => import('@views/login'));

const Router: FC = () => (
  <Suspense fallback={<h1>Loading...</h1>}>
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Categories />} />
        <Route path="shop" element={<Shop />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  </Suspense>
);

export default Router;
