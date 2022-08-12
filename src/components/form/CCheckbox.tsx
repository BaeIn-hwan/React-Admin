import React from 'react';

import {
  CheckboxWrapper,
  CheckBox,
  CheckBoxText,
  CheckBoxIcon,
} from '@/styled/Checkbox';

interface CheckBoxProps {
  label?: string | null;
  name?: string;
  checked: boolean;
  model?: string | number | readonly string[] | undefined;
  disabled?: boolean;
  _change?: Function;
}

const CCheckbox = ({
  label,
  name,
  model,
  checked,
  disabled,
  _change,
}: CheckBoxProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (_change && typeof _change === 'function') {
      const value = name ? e : e.target.checked;

      _change(value);
    }
  };

  return (
    <CheckboxWrapper>
      <CheckBox
        name={name}
        value={model}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
      />
      <CheckBoxText>
        <CheckBoxIcon></CheckBoxIcon>
        {label}
      </CheckBoxText>
    </CheckboxWrapper>
  );
};

export default CCheckbox;
