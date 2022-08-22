import CModal from '@/components/ui/CModal';

import { ModalText, ModalButton } from '@/styled/ui/Modal';

const CAlert = ({ isOpen, handleClose }) => {
  return (
    <CModal isOpen={isOpen}>
      <>
        <ModalText>내용</ModalText>
        <ModalButton>
          <button type="button" onClick={handleClose}>
            확인
          </button>
        </ModalButton>
      </>
    </CModal>
  );
};

export default CAlert;
