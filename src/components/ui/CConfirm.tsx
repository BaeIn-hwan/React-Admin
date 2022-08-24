import CModal from '@/components/ui/CModal';

import { ModalText, ModalButton } from '@/styled/ui/Modal';

interface PropsAlert {
  isBackground?: boolean;
  isBackgroundClose?: boolean;
  content: string;
  cancel?: string;
  success?: string;
  _click: Function;
}

const CConfirm = ({
  isBackground,
  isBackgroundClose,
  content,
  cancel,
  success,
  _click,
}: PropsAlert) => {
  const handleCancel = () => {
    _click(false);
  };

  const handleSuccess = () => {
    _click(true);
  };

  return (
    <CModal
      isBackground={isBackground}
      isBackgroundClose={isBackgroundClose}
      _click={_click}
    >
      <>
        <ModalText>{content}</ModalText>
        <ModalButton>
          <button type="button" onClick={handleCancel}>
            {cancel || '취소'}
          </button>
          <button type="button" onClick={handleSuccess}>
            {success || '확인'}
          </button>
        </ModalButton>
      </>
    </CModal>
  );
};

export default CConfirm;
