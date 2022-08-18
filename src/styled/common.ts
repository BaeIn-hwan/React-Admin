import { css } from 'styled-components';

const singleLine = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const multiLine = css`
  -webkit-box-orient: vertical;
  display: block;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
`;

export { singleLine, multiLine };
