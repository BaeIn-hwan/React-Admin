import { useMemo, useState } from 'react';

import CButton from '../form/CButton';

const setPageArray = () => {
  console.log(123);
};

const renderPageList = (a: number, b: number[][]) => {
  let html = [];

  for (let i = 0; i < b[a - 1].length; i++) {
    html.push(
      <li key={i}>
        <button type="button">{b[a - 1][i]}</button>
      </li>,
    );
  }

  return html;
};

const Pagination = ({
  sPage,
  ePage,
  currentPage,
  displayPage,
  totalCount,
  handleSetPaging,
}: any) => {
  const pageMove = (a, b, c) => {
    handleSetPaging({
      sPage: a,
      ePage: b,
      currentPage: c,
      displayPage,
      totalCount,
    });
  };

  console.log(sPage, ePage, currentPage, displayPage, totalCount);

  const pageTotal = Math.ceil(totalCount / displayPage);
  const pageGroup = Math.ceil(pageTotal / displayPage);
  const pageTotalArray = [];
  const pageGroupArray = [];

  for (let i = 1; i <= pageTotal; i++) {
    pageTotalArray.push(i);
  }

  console.log(pageTotalArray);

  for (let j = 0; j < pageGroup; j++) {
    pageGroupArray.push(
      pageTotalArray.slice(j * displayPage, (j + 1) * displayPage),
    );
  }

  console.log(pageGroupArray);

  return (
    <div className="pagination">
      <CButton
        type="button"
        disabled={currentPage === 1 ? true : false}
        _click={() => {
          pageMove(1, displayPage, 1);
        }}
      >
        처음
      </CButton>

      <CButton
        type="button"
        disabled={currentPage === 1 ? true : false}
        _click={() => {
          pageMove(sPage - displayPage, ePage - displayPage, currentPage - 1);
        }}
      >
        이전
      </CButton>

      <ul>
        {pageGroupArray[currentPage - 1].map((item, index) => {
          return (
            <li key={index}>
              <button type="button">{item}</button>
            </li>
          );
        })}
      </ul>
      <CButton
        type="button"
        disabled={currentPage === pageGroup ? true : false}
        _click={() => {
          pageMove(sPage + displayPage, ePage + displayPage, currentPage + 1);
        }}
      >
        다음
      </CButton>

      <CButton
        type="button"
        disabled={currentPage === pageGroup ? true : false}
        _click={() => {
          pageMove(sPage + displayPage, ePage + displayPage, currentPage + 1);
        }}
      >
        마지막
      </CButton>
    </div>
  );
};

export default Pagination;
