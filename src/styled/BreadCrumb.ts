import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BreadCrumbLink = styled(Link)`
  display: block;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;

const BreadCrumbLinkSkeleton = styled.span`
  display: block;
  min-width: 40px;
  min-height: 14px;
  background: #f7f7f7;
`;

const BreadCrumbItem = styled.li`
  &:not(:first-child) {
    position: relative;
    margin-left: 8px;
    padding-left: 14px;

    &:before {
      content: '>';
      position: absolute;
      min-width: 8px;
      height: 100%;
      top: 0;
      left: 0;
      font-size: 14px;
    }
  }
`;

const BreadCrumbItemSkeleton = styled(BreadCrumbItem)`
  &:not(:first-child) {
    position: relative;
    margin-left: 8px;
    padding-left: 14px;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      background: #f7f7f7;
    }
  }
`;

const BreadCrumbList = styled.ul`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
`;

const BreadCrumb = styled.nav`
  margin-bottom: 25px;
`;

export {
  BreadCrumb,
  BreadCrumbList,
  BreadCrumbItem,
  BreadCrumbLink,
  BreadCrumbItemSkeleton,
  BreadCrumbLinkSkeleton,
};
