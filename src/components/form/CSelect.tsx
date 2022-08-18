import { SelectLabel, SelectText, SelectBox } from '@/styled/form/Select';

interface PropsSelect {
  model: string;
  placeholder: string;
  width?: string;
  maxWidth?: string;
  options: [];
  _change: Function;
}

const CSelect = ({
  model,
  placeholder,
  width,
  maxWidth,
  options,
  _change,
}: any) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (_change && typeof _change === 'function') {
      _change(e.target.value);
    }
  };

  return (
    <SelectLabel style={{ width, maxWidth }}>
      <SelectText>{model === '' ? placeholder : model}</SelectText>

      <SelectBox placeholder={placeholder} onChange={handleChange}>
        <option value="">{placeholder}</option>
        {options.map((option: any, index: number) => (
          <option value={option.value} key={index}>
            {option.option}
          </option>
        ))}
      </SelectBox>
    </SelectLabel>
  );
};

export default CSelect;
