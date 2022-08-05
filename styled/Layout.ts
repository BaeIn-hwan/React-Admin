import styled, { css } from 'styled-components';

interface BoxRowProps {
  colSize?: number;
  gutter?: number;
  flexDirection?: string;
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

const BoxRow = styled.div`
  display: flex;
  ${({ gutter }: BoxRowProps) => {
    if (gutter) {
      return css`
        margin: 0 -${gutter}px;
      `;
    }
  }}

  ${BoxCol} {
    ${({ colSize = 1, gutter }: BoxRowProps) => {
      if (gutter) {
        return css`
          flex: 0 0 calc(${100 / colSize}% - ${gutter * 2}px);
          margin: 0 ${gutter}px;
        `;
      } else {
        return css`
          flex: 0 0 ${100 / colSize}%;
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
