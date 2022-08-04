import styled from 'styled-components';

const CheckboxWrapper = styled.label`
  display: inline-block;
  cursor: pointer;
`;

const CheckBox = styled.input.attrs({
  type: 'checkbox',
  className: 'blind',
})`
  &:focus + span {
    &:before {
      outline: 5px auto Highlight;
      outline: 5px auto -webkit-focus-ring-color;
    }
  }

  &:checked + span {
    &:before {
      border: 1px solid var(--point-color);
      background: var(--point-color);
    }
  }
`;

const CheckBoxText = styled.span`
  position: relative;
  display: flex;
  align-items: center;

  &:before {
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    margin-right: 8px;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }
`;

export { CheckboxWrapper, CheckBox, CheckBoxText };
