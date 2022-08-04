import styled from 'styled-components';

const Button = styled.button.attrs(({ type }) => {
  type: type || 'button';
})``;

const InputClearBtn = styled(Button)`
  overflow: hidden;
  position: absolute;
  top: 50%;
  right: 15px;
  width: 16px;
  height: 16px;
  margin-top: -8px;

  i {
    display: block;
    position: relative;
    width: 100%;
    height: 100%;

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 2px;
      height: 10px;
      margin: -5px 0 0 -1px;
      background: #111;
    }

    &:before {
      transform: rotate(45deg);
    }

    &:after {
      transform: rotate(-45deg);
    }
  }
`;

export { Button, InputClearBtn };
