import styled from 'styled-components';

const CheckBoxText = styled.span`
  position: relative;
  display: flex;
  align-items: center;
`;

const CheckBoxIcon = styled.i`
  display: block;
  position: relative;
  width: 20px;
  height: 20px;
  margin-right: 8px;
  border: 1px solid #ccc;
  box-sizing: border-box;
`;

const CheckBox = styled.input.attrs({
  type: 'checkbox',
  className: 'blind',
})`
  &:focus + span {
    ${CheckBoxIcon} {
      outline: 5px auto Highlight;
      outline: 5px auto -webkit-focus-ring-color;
    }
  }

  &:checked + span {
    ${CheckBoxIcon} {
      border: 1px solid var(--point-color);

      &:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 14px;
        height: 14px;
        margin: -7px 0 0 -7px;
        background: var(--point-color);
        box-sizing: border-box;
      }
    }
  }
`;

const CheckboxWrapper = styled.label`
  display: inline-block;
  vertical-align: baseline;
  cursor: pointer;
`;

export { CheckboxWrapper, CheckBox, CheckBoxIcon, CheckBoxText };
