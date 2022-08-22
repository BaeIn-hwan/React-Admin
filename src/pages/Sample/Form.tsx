import React, { useRef, useState } from 'react';

import CInput from '@/components/form/CInput';
import CCheckbox from '@/components/form/CCheckbox';
import CRadioBox from '@/components/form/CRadio';
import CButton from '@/components/form/CButton';
import CToggle from '@/components/form/CToggle';
import CSelect from '@/components/form/CSelect';
import CFile from '@/components/form/CFile';

import {
  SampleContent,
  SampleSummary,
  SampleDetails,
  SampleWrapper,
} from '@/styled/Sample';

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
  interface TermsProps {
    label: string;
    isChecked: boolean;
    isRequired?: boolean;
  }

  const [singleValue, setSingleValue] = useState<boolean>(true);
  const [multiValue, setMultiValue] = useState<string[]>(['유리']);
  const [terms, setTerms] = useState<TermsProps[]>([
    {
      label: '약관01(필수)',
      isChecked: false,
      isRequired: true,
    },
    {
      label: '약관02(필수)',
      isChecked: false,
      isRequired: true,
    },
    {
      label: '약관03',
      isChecked: true,
    },
  ]);

  const multiCheckEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    let copyMulitCheckboxValue = [...multiValue];

    if (!e.target.checked) {
      const idx = multiValue.findIndex(
        (list: string) => list == e.target.value,
      );

      copyMulitCheckboxValue.splice(idx, 1);
      setMultiValue([...copyMulitCheckboxValue]);
    } else {
      setMultiValue([...copyMulitCheckboxValue, e.target.value]);
    }
  };

  const termsAllCheckEvent = (flag: boolean) => {
    const copyTerms = [...terms];

    copyTerms.forEach((item: TermsProps) => {
      item.isChecked = flag;
    });

    setTerms(copyTerms);
  };

  const termsCheckEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const copyTerms = [...terms];
    const target = copyTerms.find((item) => item.label === e.target.value);
    if (target?.hasOwnProperty('isChecked')) {
      target.isChecked = e.target.checked;
    }

    Object.assign([...copyTerms], target);

    setTerms(copyTerms);
  };

  const termsSubmit = () => {
    for (let i = 0; i < terms.length; i++) {
      if (terms[i].isRequired && !terms[i].isChecked) {
        alert('필수 항목을 체크해주세요.');
        return;
      }
    }

    alert('Success');
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
        <br />
        선택값 : {singleValue === true ? 'true' : 'false'}
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
        선택값 :{' '}
        {multiValue && multiValue.length ? multiValue.join(', ') : '[]'}
      </div>

      <div>
        <CCheckbox
          label="전체동의"
          model={String(terms.every((item: TermsProps) => item.isChecked))}
          checked={terms.every((item: TermsProps) => item.isChecked)}
          _change={termsAllCheckEvent}
        />
        <br />

        {terms.map((item: TermsProps, index: number) => {
          return (
            <CCheckbox
              key={index}
              label={item.label}
              model={item.label}
              name="약관"
              checked={item.isChecked}
              _change={termsCheckEvent}
            />
          );
        })}
        <br />
        <CButton type="button" _click={termsSubmit}>
          확인
        </CButton>
      </div>
    </>
  );
};

const ToggleBoxComponent = () => {
  const [toggleValue, setToggleValue] = useState<boolean>(false);
  return (
    <>
      <div>
        <CToggle
          checked={toggleValue}
          _change={(flag: boolean) => {
            setToggleValue(flag);
          }}
        />
        <br />
        상태값 : {toggleValue ? 'true' : 'false'}
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

const SelectBoxComponent = () => {
  const [selectValue, setSelectValue] = useState<string>('');
  const selectOptions = [
    {
      option: '메뉴01',
      value: '메뉴01',
    },
    {
      option: '메뉴02',
      value: '메뉴02',
    },
  ];

  return (
    <>
      <div>
        <CSelect
          model={selectValue}
          placeholder={'선택하세요.'}
          width="200px"
          maxWidth="200px"
          options={selectOptions}
          _change={(value: string) => setSelectValue(value)}
        />
        <br />
        선택값 : {selectValue}
      </div>
    </>
  );
};

const FileComponent = () => {
  const [singleFile, setSingleFile] = useState<[]>([]);
  const [multiFile, setMultiFile] = useState<[]>([]);

  const fileUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    beforeFileList: [],
    fileList: [],
    setFile: Function,
  ) => {
    setFile([...beforeFileList, ...fileList]);
  };

  const fileRemove = (
    e: React.MouseEvent<HTMLElement>,
    beforeFileList: [],
    setFileList: Function,
    idx: number,
  ) => {
    let copyFileList = [...beforeFileList];

    copyFileList.splice(idx, 1);

    setFileList(copyFileList);
  };

  return (
    <>
      <div>
        <CFile
          fileFormat="jpg|jpeg|png"
          fileSize={3}
          fileList={singleFile}
          accept="image/jpg, image/jpeg, image/png, image/gif"
          _change={(e: React.ChangeEvent<HTMLInputElement>, newFile: []) => {
            fileUpload(e, singleFile, newFile, setSingleFile);
          }}
        />

        <div>
          {singleFile.map((item: any, index: number) => {
            return (
              <div key={index}>
                <span>{item.name}</span>
                <button
                  type="button"
                  onClick={(e) => {
                    fileRemove(e, singleFile, setSingleFile, index);
                  }}
                >
                  삭제
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <CFile
          fileFormat="jpg|jpeg|png"
          fileSize={3}
          fileList={multiFile}
          maxCount="3"
          accept="image/jpg, image/jpeg, image/png, image/gif"
          isMultiple={true}
          _change={(e: React.ChangeEvent<HTMLInputElement>, newFile: []) => {
            fileUpload(e, multiFile, newFile, setMultiFile);
          }}
        />
        <div>
          {multiFile.map((item: any, index: number) => {
            return (
              <div key={index}>
                <span>{item.name}</span>
                <button
                  type="button"
                  onClick={(e) => {
                    fileRemove(e, multiFile, setMultiFile, index);
                  }}
                >
                  삭제
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

const SampleForm = () => {
  return (
    <SampleWrapper>
      <SampleDetails>
        <SampleSummary>Input</SampleSummary>

        <SampleContent>
          <InputComponent />
        </SampleContent>
      </SampleDetails>

      <SampleDetails>
        <SampleSummary>CheckBox</SampleSummary>

        <SampleContent>
          <CheckBoxComponent />
        </SampleContent>
      </SampleDetails>

      <SampleDetails>
        <SampleSummary>Toggle</SampleSummary>

        <SampleContent>
          <ToggleBoxComponent />
        </SampleContent>
      </SampleDetails>

      <SampleDetails>
        <SampleSummary>RadioBox</SampleSummary>

        <SampleContent>
          <RadioBoxComponent />
        </SampleContent>
      </SampleDetails>

      <SampleDetails>
        <SampleSummary>SelectBox</SampleSummary>

        <SampleContent>
          <SelectBoxComponent />
        </SampleContent>
      </SampleDetails>

      <SampleDetails open={true}>
        <SampleSummary>Input File</SampleSummary>

        <SampleContent>
          <FileComponent />
        </SampleContent>
      </SampleDetails>
    </SampleWrapper>
  );
};

export default SampleForm;
