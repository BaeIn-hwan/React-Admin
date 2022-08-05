import styled from 'styled-components';

const GridWrapper = styled.div`
  display: table;
  table-layout: fixed;
  border-collapse: collapse;
  width: 100%;
  max-width: ${({ maxWidth }: { maxWidth: string }) => maxWidth || '100%'};
`;

const GridHeader = styled.div``;

const GridBody = styled.div``;

const GridFooter = styled.div``;

const GridNumber = styled.div``;

export { GridWrapper, GridHeader, GridBody, GridFooter };
