import React from 'react';

import {
  RadioBoxLabel,
  RadioBox,
  RadioBoxIcon,
  RadioBoxText,
} from '@/styled/form/Radio';

interface CheckBoxProps {
  label?: string | null;
  name: string;
  checked: boolean;
  model?: string | number | readonly string[] | undefined;
  disabled?: boolean;
  _change?: Function;
}

const CRadio = ({
  label,
  name,
  model,
  checked,
  disabled,
  _change,
}: CheckBoxProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (_change && typeof _change === 'function') {
      _change(e.target.value);
    }
  };

  return (
    <RadioBoxLabel>
      <RadioBox
        name={name}
        value={model}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
      />
      <RadioBoxText>
        <RadioBoxIcon />
        {label}
      </RadioBoxText>
    </RadioBoxLabel>
  );
};

export default CRadio;
