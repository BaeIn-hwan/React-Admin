import { Navigate, useRoutes } from 'react-router-dom';

// layout
import DefaultLayout from '@/layouts/DefaultLayout';
import AuthLayout from '@/layouts/AuthLayout';

// pages
import MainIndex from '@/pages/Main';

import NoticeList from '@/pages/notice/List';
import NoticeDetail from '@/pages/notice/Detail';

import Login from '@/pages/Login';

import SignIndex from '@/pages/SignUp';

import SampleIndex from '@/pages/Sample';
import SampleForm from '@/pages/Sample/Form';

const Router = () => {
  return useRoutes([
    {
      path: '/',
      element: <DefaultLayout />,
      children: [
        {
          element: <Navigate replace to="/index" />,
          path: '/',
        },
        {
          element: <MainIndex />,
          index: true,
          path: '/index',
        },
        {
          element: <NoticeList />,
          path: '/notice/list',
        },
        {
          element: <NoticeDetail />,
          path: '/notice/detail',
        },
      ],
    },
    {
      path: '/',
      element: <AuthLayout />,
      children: [
        {
          path: 'login',
          element: <Login />,
          index: true,
        },
        {
          path: 'signUp',
          element: <SignIndex />,
        },
      ],
    },
    {
      path: '/sample',
      element: <SampleIndex />,
      children: [
        {
          path: 'index',
          element: <SampleIndex />,
          index: true,
        },
        {
          path: 'form',
          element: <SampleForm />,
        },
      ],
    },
  ]);
};

export default Router;
