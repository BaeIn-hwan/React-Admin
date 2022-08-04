import { useEffect, useState } from 'react';

import BoardList from '@/components/ui/ListLayout';
import requests from '@/apis/requests';

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

  useEffect(() => {
    requestBoardList();
  }, []);

  const requestBoardList = async () => {
    try {
      const response = await requests({
        method: 'get',
        url: `https://jsonplaceholder.typicode.com/users`,
      });

      if (response && response.data && response.data.length) {
        setNoticeList({ ...noticeList, body: response.data });
      }
    } catch (err) {
      console.error('RequestBoardList Error.. ', err);
    }
  };

  const data = (
    <div>
      <span>테스트</span>
    </div>
  );

  return (
    <div className="board-list">
      {/* {data.map((list) => {
        return (
          <div>
            {data.map((list2) => (
              <div key={list2}>{list}</div>
            ))}
          </div>
        );
      })} */}
      {data}
      <BoardList
        gridData={noticeList}
        gridOption={{
          height: '500px',
          gridOrder: true,
          verticalScroll: false,
          horizonScroll: false,
        }}
      />
    </div>
  );
};

export default NoticeList;
