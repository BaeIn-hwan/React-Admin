import { Link, useNavigate } from 'react-router-dom';

import { getStorage, removeStorage } from '@/composables/storage';

import styles from '@/assets/scss/modules/header.module.scss';

const TheHeader = () => {
  const navigation = useNavigate();
  const usetoken = getStorage('session', 'userToken');

  const logout = () => {
    alert('로그아웃');
    removeStorage('session', 'userToken');
    navigation('/login');
  };

  return (
    <header className={styles['header']} id="header">
      <h1 className={styles['header__title']}>
        <Link to="/index">Title</Link>
      </h1>

      <nav className="gnb"></nav>
      {usetoken ? (
        <button type="button" onClick={logout}>
          로그아웃
        </button>
      ) : (
        <Link to="/login">로그인</Link>
      )}
      <Link to="/notice/list">공지사항</Link>
    </header>
  );
};

export default TheHeader;
