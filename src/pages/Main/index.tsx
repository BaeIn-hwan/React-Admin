import { useState } from 'react';

import CPagination from '@/components/ui/CPagination';

import { ContentContainer } from '@/styled/Layout';

import { PageInfo } from '@/interface/common/common';

const MainIndex = () => {
  const [pagination, setPagination] = useState<PageInfo>({
    list: 1,
    limitList: 20,
    totalList: 201,
    currentPage: 1,
    showPageRow: 5,
  });

  return (
    <ContentContainer className="main">
      <CPagination
        pageInfo={pagination}
        handlePaging={(pageInfo: PageInfo) => setPagination(pageInfo)}
      ></CPagination>
    </ContentContainer>
  );
};

export default MainIndex;
