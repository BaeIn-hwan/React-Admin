import { useState } from 'react';

import CInput from '@/components/form/CInput';
import CCheckbox from '@/components/form/CCheckbox';

const SampleForm = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [checkboxValue, setCheckboxValue] = useState<boolean>(true);
  const [mulitCheckboxValue, setMulitCheckboxValue] = useState<any>([]);
  const multiCheckEvent = (e: any) => {
    console.log(e);
    if (!e.target.checked) {
      const idx = mulitCheckboxValue.findIndex(
        (list) => list == e.target.value,
      );
      mulitCheckboxValue.splice(idx, 1);
      setMulitCheckboxValue([...mulitCheckboxValue]);
    } else {
      setMulitCheckboxValue([...mulitCheckboxValue, e.target.value]);
    }
  };
  const [radioValue, setRadioValue] = useState('1');

  return (
    <div className="form">
      <div>
        <CInput
          type="text"
          model={inputValue}
          disabled={checkboxValue}
          placeholder="입력하세요"
          _input={(word: string) => {
            setInputValue(word);
          }}
        />
        <br />
        입력값 : {inputValue}
      </div>

      <div style={{ marginTop: '30px' }}>
        <CCheckbox
          label="123"
          model={'test'}
          checked={checkboxValue}
          _change={(flag: boolean) => {
            setCheckboxValue(flag);
          }}
        />
        <br />
        입력값 : {checkboxValue ? '1' : '2'}
      </div>

      <div style={{ marginTop: '30px' }}>
        <label>
          <input
            type="checkbox"
            value="짱구"
            checked={mulitCheckboxValue.includes('짱구') || false}
            onChange={multiCheckEvent}
          />
          <span>짱구</span>
        </label>
        <label>
          <input
            type="checkbox"
            value="훈이"
            checked={mulitCheckboxValue.includes('훈이') || false}
            onChange={multiCheckEvent}
          />
          <span>훈이</span>
        </label>
        <label>
          <input
            type="checkbox"
            value="철수"
            checked={mulitCheckboxValue.includes('철수') || false}
            onChange={multiCheckEvent}
          />
          <span>철수</span>
        </label>
        <br />
        입력값 : {mulitCheckboxValue}
      </div>

      <div style={{ marginTop: '30px' }}>
        <label>
          <input
            type="radio"
            name="radioSample"
            value="1"
            checked={radioValue === '1'}
            onChange={(e) => {
              setRadioValue(e.target.value);
            }}
          />
          <span>1</span>
        </label>
        <label>
          <input
            type="radio"
            name="radioSample"
            value="2"
            checked={radioValue === '2'}
            onChange={(e) => {
              setRadioValue(e.target.value);
            }}
          />
          <span>2</span>
        </label>
        <label>
          <input
            type="radio"
            name="radioSample"
            value="3"
            checked={radioValue === '3'}
            onChange={(e) => {
              setRadioValue(e.target.value);
            }}
          />
          <span>3</span>
        </label>
        <br />
        입력값 : {radioValue}
      </div>
    </div>
  );
};

export default SampleForm;
