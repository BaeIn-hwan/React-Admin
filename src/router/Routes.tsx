import { useRoutes } from 'react-router-dom';

// layout
import DefaultLayout from '@/layouts/DefaultLayout';
import AuthLayout from '@/layouts/AuthLayout';

// pages
import MainIndex from '@/pages/Main';

import NoticeList from '@/pages/notice/List';
import NoticeDetail from '@/pages/notice/Detail';

import Login from '@/pages/Login';

import SignIndex from '@/pages/signUp';

const Router = () => {
  return useRoutes([
    {
      path: '/',
      element: <DefaultLayout />,
      children: [
        {
          element: <MainIndex />,
          index: true,
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
  ]);
};

export default Router;
