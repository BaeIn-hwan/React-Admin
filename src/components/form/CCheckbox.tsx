import React from 'react';

import {
  CheckboxLabel,
  CheckBox,
  CheckBoxText,
  CheckBoxIcon,
} from '@/styled/form/Checkbox';

interface PropsCheckBox {
  label?: string | null;
  name?: string;
  checked?: boolean;
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
}: PropsCheckBox) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (_change && typeof _change === 'function') {
      const value = name ? e : e.target.checked;

      _change(value);
    }
  };

  return (
    <CheckboxLabel>
      <CheckBox
        name={name}
        value={model}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
      />
      <CheckBoxText>
        <CheckBoxIcon />
        {label}
      </CheckBoxText>
    </CheckboxLabel>
  );
};

export default CCheckbox;
