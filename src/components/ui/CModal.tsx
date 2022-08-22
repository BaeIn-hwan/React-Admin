import ReactDOM from 'react-dom';

import { ModalDim, ModalWrapper } from '@/styled/ui/Modal';
import React from 'react';

interface PropsModal {
  isBackgroundClose?: boolean;
  _click: Function;
  children: React.ReactElement;
}

const CModal = ({ isBackgroundClose = true, _click, children }: PropsModal) => {
  const handleClose = (e: React.MouseEvent<HTMLElement>) => {
    if (isBackgroundClose) {
      _click(false);
    }
  };

  return ReactDOM.createPortal(
    <ModalDim onClick={handleClose}>
      <ModalWrapper onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalWrapper>
    </ModalDim>,
    document.body,
  );
};

export default CModal;
