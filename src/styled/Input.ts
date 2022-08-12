import styled from 'styled-components';

const Input = styled.input.attrs(({ type, ref }) => ({
  type: type || 'text',
  ref: ref,
}))`
  width: 100%;
  min-height: 30px;
  padding: 0 16px;
  border: 1px solid var(--border-default);

  ${(props: { customStyle: { [key: string]: string } | undefined }) =>
    props.customStyle}

  &:focus {
    border: 1px solid var(--border-focus);
  }

  &:disabled {
    background: #ccc;
  }

  &.error {
    border: 1px solid red;
  }
`;

const InputError = styled.span`
  display: block;
  margin-top: 6px;
  font-size: 12px;
  color: #ff0000;
`;

export { Input, InputError };
