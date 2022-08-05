import { Navigate, Outlet } from 'react-router-dom';

import { getStorage } from '@/composables/storage';

import TheHeader from '@/layouts/includes/TheHeader';
import TheFooter from '@/layouts/includes/TheFooter';

const DefaultLayout = () => {
  const userToken = getStorage('session', 'userToken');

  if (userToken) {
    return (
      <div className="wrapper">
        <TheHeader />

        <main className="container">
          <Outlet />
        </main>

        <TheFooter />
      </div>
    );
  } else {
    return <Navigate to="/login" replace />;
  }
};

export default DefaultLayout;
