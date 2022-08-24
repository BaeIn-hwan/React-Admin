import React from 'react';

interface PropsFile {
  accept: string;
  fileFormat?: string;
  fileSize: number;
  maxCount?: number;
  isMultiple?: boolean;
  fileList: [];
  _change: Function;
}

const CFile = ({
  accept,
  fileFormat,
  fileSize,
  maxCount,
  isMultiple,
  fileList,
  _change,
}: PropsFile) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    const defaultSize = 1024;
    const defaultFormat = 'jpg|jpeg';
    const defaultCount = 1;

    const targetSize = Number(target.dataset.size) ?? defaultSize;
    const targetFormat = target.dataset.format ?? defaultFormat;
    const maxFileCount = Number(target.dataset.maxcount ?? defaultCount);
    const maxFileSize = targetSize * defaultSize ** 2;
    let saveFile = [];
    let maxCount = 0;

    if (target.files && target.files.length) {
      for (let i = 0, filesLength = target.files.length; i < filesLength; i++) {
        const fileValue = target.files[i];

        if (maxCount >= maxFileCount || maxFileCount <= fileList.length) {
          alert(`등록 가능한 갯수는 ${maxFileCount}개 입니다.`);
          continue;
        }

        // File Size
        if (fileValue.size > maxFileSize) {
          alert(`첨부파일은 ${targetSize}MB 이내로 등록 가능합니다.`);
          continue;
        }

        // File Type
        if (!fileValue.type.match(targetFormat.toLocaleLowerCase())) {
          alert(`파일 확장자는 ${targetFormat.split('|')}만 가능합니다.`);
          continue;
        }

        // File Name
        if (
          fileValue.name.substring(
            fileValue.name.indexOf('.') + 1,
            fileValue.name.lastIndexOf('.'),
          ).length > 1
        ) {
          alert(`허용된 확장자가 아닙니다.\n파일명을 다시 확인해주세요.`);
          continue;
        }

        maxCount++;
        saveFile.push(fileValue);
      }
    }

    _change(e, saveFile);

    e.target.value = '';
  };

  return (
    <input
      type="file"
      data-format={fileFormat}
      data-size={fileSize}
      data-maxcount={maxCount}
      onChange={handleChange}
      accept={accept}
      multiple={isMultiple}
    />
  );
};

export default CFile;
