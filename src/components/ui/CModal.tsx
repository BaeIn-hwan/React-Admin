import { ModalDim, ModalWrapper } from '@/styled/ui/Modal';

const CModal = ({ isOpen, children }: { children: React.ReactElement }) => {
  if (!isOpen) return;

  return (
    <ModalDim>
      <ModalWrapper>{children}</ModalWrapper>
    </ModalDim>
  );
};

export default CModal;
