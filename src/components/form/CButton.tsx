import React from 'react';

import { Button } from '@/styled/CButton';

interface PropsButton {
  type: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  classess?: string;
  _click?: Function;
  target?: any;
  children: React.ReactElement | string;
}

const CButton = ({
  type,
  disabled,
  classess,
  _click,
  children,
  target,
}: PropsButton) => {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (_click && typeof _click === 'function') {
      _click(e);
    }
  };

  return (
    <Button
      type={type}
      disabled={disabled}
      className={classess}
      onClick={handleClick}
      as={target}
    >
      {children}
    </Button>
  );
};

export default CButton;