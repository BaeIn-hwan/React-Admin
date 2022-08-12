import React, { useState } from 'react';

import CInput from '@/components/form/CInput';
import CCheckbox from '@/components/form/CCheckbox';
import CRadioBox from '@/components/form/CRadiobox';

const InputComponent = () => {
  const [inputValue01, setInputValue01] = useState<string>('');
  const [inputValue02, setInputValue02] = useState<string>('');
  const [inputValue03, setInputValue03] = useState<string>('');

  return (
    <>
      <div>
        <CInput
          type="text"
          model={inputValue01}
          placeholder="Default"
          _input={(word: string) => {
            setInputValue01(word);
          }}
        />
        <br />
        입력값 : {inputValue01}
      </div>

      <div>
        <CInput
          type="text"
          disabled={true}
          model={inputValue02}
          placeholder="Disabled"
          _input={(word: string) => {
            setInputValue02(word);
          }}
        />
        <br />
        입력값 : {inputValue02}
      </div>

      <div>
        <CInput
          type="text"
          model={inputValue03}
          classess={inputValue03 === '' ? 'error' : ''}
          placeholder="Error"
          _input={(word: string) => {
            setInputValue03(word);
          }}
        />
        <br />
        입력값 : {inputValue03}
      </div>
    </>
  );
};

const CheckBoxComponent = () => {
  const [singleValue, setSingleValue] = useState<boolean>(true);
  const [multiValue, setMultiValue] = useState<string[]>(['유리']);

  const multiCheckEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    let copyMulitCheckboxValue = [...multiValue];

    if (!e.target.checked) {
      const idx = multiValue.findIndex((list: any) => list == e.target.value);

      copyMulitCheckboxValue.splice(idx, 1);
      setMultiValue([...copyMulitCheckboxValue]);
    } else {
      setMultiValue([...copyMulitCheckboxValue, e.target.value]);
    }
  };

  return (
    <>
      <div>
        <CCheckbox
          label="123"
          model={'test'}
          checked={singleValue}
          _change={(flag: boolean) => {
            setSingleValue(flag);
          }}
        />
      </div>

      <div>
        <CCheckbox
          label="짱구"
          model={'짱구'}
          name="짱구는 못말려"
          checked={multiValue.includes('짱구') || false}
          _change={multiCheckEvent}
        />
        <CCheckbox
          label="훈이"
          model={'훈이'}
          name="짱구는 못말려"
          checked={multiValue.includes('훈이') || false}
          _change={multiCheckEvent}
        />
        <CCheckbox
          label="철수"
          model={'철수'}
          name="짱구는 못말려"
          checked={multiValue.includes('철수') || false}
          _change={multiCheckEvent}
        />
        <CCheckbox
          label="유리"
          model={'유리'}
          name="짱구는 못말려"
          checked={multiValue.includes('유리') || false}
          _change={multiCheckEvent}
        />
        <CCheckbox
          label="맹구"
          model={'맹구'}
          name="짱구는 못말려"
          checked={multiValue.includes('맹구') || false}
          _change={multiCheckEvent}
        />
        <br />
        선택값 :{multiValue && multiValue.length ? multiValue.join(', ') : '[]'}
      </div>
    </>
  );
};

const RadioBoxComponent = () => {
  const [singleValue, setSingleValue] = useState<string | null>(null);

  return (
    <>
      <div>
        <CRadioBox
          label="1"
          model={'1'}
          name="radioTest"
          checked={singleValue === '1'}
          _change={(flag: string) => {
            setSingleValue(flag);
          }}
        />
        <CRadioBox
          label="2"
          model={'2'}
          name="radioTest"
          checked={singleValue === '2'}
          _change={(flag: string) => {
            setSingleValue(flag);
          }}
        />
        <CRadioBox
          label="3"
          model={'3'}
          name="radioTest"
          checked={singleValue === '3'}
          _change={(flag: string) => {
            setSingleValue(flag);
          }}
        />
        <br />
        선택값 :{singleValue}
      </div>
    </>
  );
};

const SampleForm = () => {
  const [mulitCheckboxValue, setMulitCheckboxValue] = useState<any>([]);

  const multiCheckEvent = (e: any) => {
    let copyMulitCheckboxValue = [...mulitCheckboxValue];

    if (!e.target.checked) {
      const idx = mulitCheckboxValue.findIndex(
        (list: any) => list == e.target.value,
      );

      copyMulitCheckboxValue.splice(idx, 1);
      setMulitCheckboxValue([...copyMulitCheckboxValue]);
    } else {
      setMulitCheckboxValue([...copyMulitCheckboxValue, e.target.value]);
    }
  };

  const [radioValue, setRadioValue] = useState('1');

  return (
    <div className="form">
      <details open={true}>
        <summary>INPUT</summary>
        <div>
          <InputComponent />
        </div>
      </details>

      <details open={true} style={{ marginTop: '50px' }}>
        <summary>CHECKBOX</summary>
        <div>
          <CheckBoxComponent />
        </div>
      </details>

      <details open={true} style={{ marginTop: '50px' }}>
        <summary>RADIOBOX</summary>
        <div>
          <RadioBoxComponent />
        </div>
      </details>
    </div>
  );
};

export default SampleForm;
