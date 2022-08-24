import { useEffect, useState } from 'react';

import requests from '@/apis/requests';

import BreadCrumb from '@/layouts/includes/TheBreadCrumb';
import BoardList from '@/components/ui/ListLayout';

const NoticeList = () => {
  const [noticeList, setNoticeList] = useState({
    headers: [
      {
        key: 'name',
        title: '이름',
        width: '100px',
        align: 'left',
      },
      {
        key: 'email',
        title: '이메일',
        width: '200px',
        align: 'left',
      },
      {
        key: 'phone',
        title: '핸드폰',
        width: '200px',
        align: 'left',
      },
      {
        key: 'company.name',
        title: '회사명',
        width: '300px',
        align: 'left',
      },
    ],
    body: [],
  });

  const [page, setPage] = useState(1);

  return (
    <div className="board-list">
      <BreadCrumb />
    </div>
  );
};

export default NoticeList;
