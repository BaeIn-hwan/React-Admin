import styled, { css } from 'styled-components';

interface BoxRowProps {
  colSize?: number;
  gutter?: number;
}

const BoxContent = styled.div`
  padding: 10px;
  border-radius: inherit;
`;

const BoxTitle = styled.strong`
  display: block;
  font-size: 18px;
  font-weight: 600;
`;

const BoxHeader = styled.div`
  position: relative;
  padding: 15px 10px;
  border-bottom: 1px solid #000;
  background: #999;
`;

const BoxCol = styled.div`
  overflow: hidden;
  border: 1px solid #000;
  border-radius: 5px;
`;

const BoxRow = styled.div<BoxRowProps>`
  display: flex;
  ${({ gutter }) =>
    gutter
      ? css`
          justify-content: space-between;
        `
      : null}

  ${BoxCol} {
    ${({ colSize = 1, gutter }) => {
      if (gutter) {
        return css`
          justify-content: space-between;
          width: calc(${100 / colSize}% - ${gutter / (colSize - 1)}px);
        `;
      } else {
        return css`
          width: ${100 / colSize}%;
        `;
      }
    }};
  }
`;

const BoxContainer = styled.div`
  margin-top: 20px;

  &:first-of-type {
    margin-top: 0;
  }
`;

const ContentContainer = styled.div`
  padding: 16px;
`;

export {
  ContentContainer,
  BoxContainer,
  BoxRow,
  BoxCol,
  BoxHeader,
  BoxTitle,
  BoxContent,
};
