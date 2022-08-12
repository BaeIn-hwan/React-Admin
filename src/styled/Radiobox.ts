import styled from 'styled-components';

const RadioBoxText = styled.span`
  position: relative;
  display: flex;
  align-items: center;
`;

const RadioBoxIcon = styled.i`
  display: block;
  position: relative;
  width: 20px;
  height: 20px;
  margin-right: 8px;
  border: 1px solid #ccc;
  border-radius: 50%;
  box-sizing: border-box;
`;

const RadioBox = styled.input.attrs({
  type: 'checkbox',
  className: 'blind',
})`
  &:focus + span {
    ${RadioBoxIcon} {
      outline: 5px auto Highlight;
      outline: 5px auto -webkit-focus-ring-color;
    }
  }

  &:checked + span {
    ${RadioBoxIcon} {
      border: 1px solid var(--point-color);

      &:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 14px;
        height: 14px;
        margin: -7px 0 0 -7px;
        border-radius: 50%;
        background: var(--point-color);
        box-sizing: border-box;
      }
    }
  }
`;

const RadioBoxWrapper = styled.label`
  display: inline-block;
  vertical-align: baseline;
  cursor: pointer;
`;

export { RadioBoxWrapper, RadioBox, RadioBoxIcon, RadioBoxText };
