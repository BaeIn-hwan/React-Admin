import { useMemo, useState } from 'react';

import { Pagination } from '@/styled/ui/Pagination';

import { PageInfo } from '@/interface/common/common';

interface PropsPaging {
  pageInfo: PageInfo;
  handlePaging: Function;
}

const CPagination = ({ pageInfo, handlePaging }: PropsPaging) => {
  /**
   * list : 리스트 시작 index
   * limitList: 리스트 마지막 index
   * totalList: 리스트 전체 갯수
   * currentPage: 현재 페이지 번호
   * showPageRow: 페이징 노출 갯수
   */
  const { limitList, totalList, currentPage, showPageRow } = pageInfo;

  /** 페이지 전체 길이 */
  const pageLength = Math.ceil(totalList / limitList);
  /** 페이지 전체 길이의 마지막 */
  const pageLastIndex = Math.ceil(pageLength / showPageRow);
  /** 페이지 노출 group 갯수 */
  let pageGrounNum = Math.ceil(currentPage / showPageRow);
  /** 노출할 페이지 배열 */
  let pages: number[] | [] = [];

  const eventClick = (current: number) => {
    handlePaging({
      list: 1 + limitList * (current - 1),
      limitList,
      totalList,
      currentPage: current,
      showPageRow,
    });
  };

  const setPagination = () => {
    let pageRow = [];

    for (let i = 1; i <= pageLength; i++) {
      pageRow.push(i);
    }

    pages = pageRow.slice(
      (pageGrounNum - 1) * showPageRow,
      showPageRow * pageGrounNum,
    );
  };

  setPagination();

  return (
    <Pagination>
      <button
        type="button"
        disabled={1 >= pageGrounNum ? true : false}
        onClick={() => eventClick(1)}
        style={{ width: '20px', height: '20px', border: '1px solid #000' }}
      >
        &lt;&lt;
        <span className="blind">First</span>
      </button>

      <button
        type="button"
        disabled={1 >= currentPage ? true : false}
        onClick={() => eventClick(currentPage - 1)}
        style={{ width: '20px', height: '20px', border: '1px solid #000' }}
      >
        &lt;
        <span className="blind">Prev</span>
      </button>

      <ul style={{ display: 'flex' }}>
        {pages.map((list, index) => {
          return (
            <li
              key={index}
              onClick={() => eventClick(list)}
              style={{
                width: '20px',
                height: '20px',
                border: '1px solid #000',
                background: currentPage === list ? 'gray' : '',
              }}
            >
              <a
                href="#"
                style={{
                  display: 'block',
                  textAlign: 'center',
                  lineHeight: '18px',
                }}
                onClick={(e) => {}}
              >
                {list}
              </a>
            </li>
          );
        })}
      </ul>

      <button
        type="button"
        disabled={pageLength <= currentPage ? true : false}
        onClick={() => eventClick(currentPage + 1)}
        style={{ width: '20px', height: '20px', border: '1px solid #000' }}
      >
        &gt;
        <span className="blind">Next</span>
      </button>

      <button
        type="button"
        disabled={pageLastIndex <= pageGrounNum ? true : false}
        onClick={() => eventClick(pageLength)}
        style={{ width: '20px', height: '20px', border: '1px solid #000' }}
      >
        &gt;&gt;
        <span className="blind">Last</span>
      </button>
    </Pagination>
  );
};

export default CPagination;
