import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

const PaginationList = ({
  currentPageNo,
  setCurrentPageNo,
  pageSize,
  totalRecords,
  getCurentPageData,
  tablePagination
}) => {
  let items = [];
  const lastPage = Math.ceil(totalRecords / pageSize);
  for (let number = 1; number <= lastPage; number++) {
    items.push(
      <Pagination.Item
        onClick={() => {
          setCurrentPageNo(number);
          getCurentPageData(number, pageSize);
        }}
        key={number}
        active={number === currentPageNo}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div
      className={`${
        !tablePagination ? 'pagination-container' : 'pagination-table'
      }`}
    >
      <Pagination>
        <Pagination.First
          className={`${currentPageNo === 1 && 'page-link-disable'}`}
          onClick={() => {
            if (currentPageNo > 1) {
              setCurrentPageNo(1);
              getCurentPageData(1, pageSize);
            }
          }}
        />
        <Pagination.Prev
          className={`${currentPageNo === 1 && 'page-link-disable'}`}
          onClick={() => {
            if (currentPageNo > 1) {
              setCurrentPageNo(currentPageNo - 1);
              getCurentPageData(currentPageNo - 1, pageSize);
            }
          }}
        />
        {items}
        <Pagination.Next
          className={`${currentPageNo === lastPage && 'page-link-disable'}`}
          onClick={() => {
            if (currentPageNo < lastPage) {
              setCurrentPageNo(currentPageNo + 1);
              getCurentPageData(currentPageNo + 1, pageSize);
            }
          }}
        />
        <Pagination.Last
          className={`${currentPageNo === lastPage && 'page-link-disable'}`}
          onClick={() => {
            if (currentPageNo < lastPage) {
              setCurrentPageNo(lastPage);
              getCurentPageData(lastPage, pageSize);
            }
          }}
        />
      </Pagination>
    </div>
  );
};

export default PaginationList;
