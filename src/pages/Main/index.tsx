import { useEffect, useState } from 'react';

import BreadCrumb from '@/layouts/includes/TheBreadCrumb';

import Pagination from '@/components/ui/Pagination';

import { ContentContainer } from '@/styled/Layout';

const MainIndex = () => {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [paging, setPaging] = useState({
    sPage: 1, // 리스트 첫 index
    ePage: 10, // 리스트 마지막 index
    currentPage: 1, // 현재 페이지
    displayPage: 10, // 리스트 노출 갯수
    totalCount: 100, // 토탈 리스트 갯수
  });

  const requestList = async () => {
    try {
      const response = await {
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        total: 150,
      };

      if (response) {
        setPaging({ ...paging, totalCount: response.total });
        setLoading(true);
      }
      console.log('response', response);
    } catch (err) {
      console.error('RequestList Error.. ', err);
    }
  };

  useEffect(() => {
    console.log('api 호출', paging);
    requestList();
  }, [paging.sPage]);

  if (!loading) {
    return <>loading...</>;
  }

  return (
    <ContentContainer className="main">
      <BreadCrumb />

      <Pagination
        sPage={paging.sPage}
        ePage={paging.ePage}
        currentPage={paging.currentPage}
        displayPage={paging.displayPage}
        totalCount={paging.totalCount}
        handleSetPaging={(data: any) => {
          console.log('data', data);
          setPaging(data);
        }}
      />
    </ContentContainer>
  );
};

export default MainIndex;
