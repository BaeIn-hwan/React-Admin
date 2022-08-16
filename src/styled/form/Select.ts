import styled from 'styled-components';

const SelectLabel = styled.label`
  display: inline-block;
  position: relative;
  font-size: 0;
`;

const SelectText = styled.span`
  display: block;
  padding: 10px;
  border: 1px solid #000;
  font-size: 14px;
`;

const SelectBox = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

export { SelectLabel, SelectText, SelectBox };
