import React from 'react';

import { ToggleIcon, ToggleBox, ToggleBoxLabel } from '@/styled/form/Toggle';

interface ToggleBoxProps {
  model?: string | number | readonly string[] | undefined;
  checked?: boolean;
  disabled?: boolean;
  _change?: Function;
}

const CCheckbox = ({ model, checked, disabled, _change }: ToggleBoxProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (_change && typeof _change === 'function') {
      _change(e.target.checked);
    }
  };

  return (
    <ToggleBoxLabel>
      <ToggleBox
        value={model}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
      />
      <ToggleIcon />
    </ToggleBoxLabel>
  );
};

export default CCheckbox;
