import styled from 'styled-components';

const ToggleIcon = styled.div`
  position: relative;
  min-width: 50px;
  min-height: 18px;
  border-radius: 10px;
  background: #eee;

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 0;
    border-radius: 50%;
    background: #aaa;
    transform: translate3d(0, -50%, 0);
  }
`;

const ToggleBox = styled.input.attrs({
  type: 'checkbox',
  className: 'blind',
})`
  & + ${ToggleIcon}:before {
    width: ${(props) => props.width || '24px'};
    height: ${(props) => props.height || '24px'};
  }

  &:checked + ${ToggleIcon} {
    &:before {
      left: calc(100% - ${(props) => props.width || '24px'});
      background: var(--point-color);
    }
  }
`;

const ToggleBoxLabel = styled.label`
  display: inline-block;
  vertical-align: baseline;
  cursor: pointer;
`;

export { ToggleIcon, ToggleBoxLabel, ToggleBox };
