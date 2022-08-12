import React from 'react';

import { Button } from '@/styled/Button';

interface PropsButton {
  type: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  classess?: string;
  _click?: Function;
  styledName?: undefined;
  children?: React.ReactElement | string | number | boolean;
}

const CButton = ({
  type,
  disabled,
  classess,
  _click,
  children,
  styledName,
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
      as={styledName}
    >
      {children}
    </Button>
  );
};

export default CButton;
