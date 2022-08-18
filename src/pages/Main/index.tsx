import { useEffect, useState } from 'react';

import BreadCrumb from '@/layouts/includes/TheBreadCrumb';

import Pagination from '@/components/ui/CPagination';

import { ContentContainer } from '@/styled/Layout';
import requests from '@/apis/requests';

const MainIndex = () => {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState<any>([]);
  const [paging, setPaging] = useState({
    list: 1,
    limitList: 10,
    totalList: 0,
    showList: 10,
    currentPage: 1,
    showPageRow: 5,
  });

  const requestList = async () => {
    try {
      const response = await requests({
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: 'get',
      });

      console.log('response', response);

      if (response && response.data && response.data.length) {
        setList(response.data);
        setPaging({ ...paging, totalList: response.data.length });
        setLoading(true);
      }
    } catch (err) {
      console.error('RequestList Error.. ', err);
    }
  };

  useEffect(() => {
    // console.log('api 호출', paging);
    requestList();
  }, [paging.list]);

  if (!loading) {
    return <>loading...</>;
  }

  return (
    <ContentContainer className="main">
      <BreadCrumb />

      <Pagination
        pageInfo={paging}
        handlePaging={(data: any) => {
          const copyPaging = { ...paging };

          Object.assign(copyPaging, data);

          setLoading(false);
          setPaging(copyPaging);
        }}
      />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="red">
        {list.map((item, index) => {
          return (
            <div key={index} style={{ marginTop: '20px' }}>
              <div>{item.title}</div>
              <div>{item.body}</div>
            </div>
          );
        })}
      </div>
    </ContentContainer>
  );
};

export default MainIndex;
