import CModal from '@/components/ui/CModal';

import { ModalText, ModalButton } from '@/styled/ui/Modal';

interface PropsAlert {
  isBackgroundClose?: boolean;
  content: string;
  _click: Function;
}

const CAlert = ({ isBackgroundClose, content, _click }: PropsAlert) => {
  const handleClose = () => {
    _click(false);
  };

  return (
    <CModal isBackgroundClose={isBackgroundClose} _click={_click}>
      <>
        <ModalText>{content}</ModalText>
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
