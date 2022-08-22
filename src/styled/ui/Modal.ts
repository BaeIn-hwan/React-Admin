import styled from 'styled-components';

const ModalButton = styled.div`
  margin-top: 10px;
  text-align: center;
`;

const ModalText = styled.p`
  font-size: 16px;
  text-align: center;
`;

const ModalContent = styled.div``;

const ModalWrapper = styled.div`
  min-width: 300px;
  min-height: 150px;
  padding: 16px;
  background: #fff;
`;

const ModalDim = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(0 0 0 / 60%);
`;

export { ModalButton, ModalText, ModalWrapper, ModalDim };
