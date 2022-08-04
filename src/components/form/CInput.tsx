import React, { useState } from 'react';

import CButton from '@/components/form/CButton';
import { Input, InputError } from '@/styled/CInput';

interface PropsInput {
  type: string;
  id?: string;
  classess?: string;
  target?: object;
  placeholder?: string;
  maxLength?: number;
  disabled?: boolean;
  model: string;
  autoComplete?: string;
  styles?: { [key: string]: string };
  _input?: Function;
  _change?: Function;
  _keyup?: Function;
  _keydown?: Function;
}

const CInput = ({
  type,
  id,
  classess,
  target,
  placeholder,
  maxLength,
  disabled,
  autoComplete,
  model,
  styles,
  _input,
  _change,
  _keyup,
  _keydown,
}: PropsInput) => {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (_input && typeof _input === 'function') {
      _input(e.target.value);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (_change && typeof _change === 'function') {
      _change(e.target.value);
    }
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (_keyup && typeof _keyup === 'function') {
      _keyup(e);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (_keydown && typeof _keydown === 'function') {
      _keydown(e);
    }
  };

  return (
    <>
      <Input
        type={type}
        id={id}
        className={classess}
        ref={target}
        placeholder={placeholder}
        maxLength={maxLength}
        disabled={disabled}
        autoComplete={autoComplete}
        customStyle={styles}
        value={model}
        onInput={handleInput}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        onKeyDown={handleKeyDown}
      />
    </>
  );
};

export default CInput;
