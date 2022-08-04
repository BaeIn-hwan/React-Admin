import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { getStorage } from '@/composables/storage';

const AuthLayout = () => {
  const location = useLocation();
  const userToken = getStorage('session', 'userToken');

  console.log(location);

  if (userToken) {
    return <Navigate to="/" replace />;
  } else {
    return <Outlet />;
  }
};

export default AuthLayout;
