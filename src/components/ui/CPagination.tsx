import { useMemo, useState } from 'react';

import CButton from '../form/CButton';

import { Pagination } from '@/styled/ui/Pagination';

interface PropsPaging {
  pageInfo: PageInfo;
  handlePaging: Function;
}

interface PageInfo {
  list: number;
  limitList: number;
  totalList: number;
  showList: number;
  currentPage: number;
  showPageRow: number;
}

const CPagination = ({ pageInfo, handlePaging }: PropsPaging) => {
  /**
   * list : 리스트 시작 index
   * maxList: 리스트 마지막 index
   * totalList: 리스트 전체 갯수
   * showlist: 리스트 보여줄 갯수
   * currentPage: 현재 페이지 번호
   * showPageRow: 페이징 노출 갯수
   */
  console.log('pageInfo', pageInfo);
  const { list, limitList, totalList, showList, currentPage, showPageRow } =
    pageInfo;

  // 페이징 총 길이
  const pageLength = Math.ceil(totalList / showList);
  // 페이징 그룹
  let pageGroupNum = 1;
  let pageArray = [];

  const movePage = (e) => {
    handlePaging({
      list: list + showList,
      limitList: limitList + showList,
      totalList,
      showList,
      currentPage: currentPage + 1,
    });
  };

  return (
    <Pagination>
      <button
        type="button"
        onClick={(e) => {}}
        style={{ width: '20px', height: '20px', border: '1px solid #000' }}
      >
        1<span className="blind">First</span>
      </button>
      <button
        type="button"
        onClick={(e) => {}}
        style={{ width: '20px', height: '20px', border: '1px solid #000' }}
      >
        2<span className="blind">Prev</span>
      </button>

      {/* <ul style={{ display: 'flex' }}>
        {pageViewArray.map((list, index) => {
          return (
            <li key={index}>
              <a
                href="#"
                onClick={(e) => {
                  movePage(e, list);
                }}
              >
                {list}
              </a>
            </li>
          );
        })}
      </ul> */}

      <button
        type="button"
        onClick={(e) => {
          movePage(e);
        }}
        style={{ width: '20px', height: '20px', border: '1px solid #000' }}
      >
        3<span className="blind">Next</span>
      </button>
      <button
        type="button"
        onClick={(e) => {}}
        style={{ width: '20px', height: '20px', border: '1px solid #000' }}
      >
        4<span className="blind">Last</span>
      </button>
    </Pagination>
  );
};

export default CPagination;
