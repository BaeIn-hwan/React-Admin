import ReactDOM from 'react-dom';

import { ModalDim, ModalWrapper } from '@/styled/ui/Modal';
import React from 'react';

interface PropsModal {
  isBackground?: boolean;
  isBackgroundClose?: boolean;
  _click: Function;
  children: React.ReactElement;
}

const CModal = ({
  isBackground = true,
  isBackgroundClose = true,
  _click,
  children,
}: PropsModal) => {
  const handleClose = () => {
    if (isBackgroundClose) {
      _click(false);
    }
  };

  return ReactDOM.createPortal(
    <ModalDim isBackground={isBackground} onClick={handleClose}>
      <ModalWrapper onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalWrapper>
    </ModalDim>,
    document.body,
  );
};

export default CModal;
