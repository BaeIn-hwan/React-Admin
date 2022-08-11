import CButton from '@/components/form/CButton';
import BreadCrumb from '@/layouts/includes/TheBreadCrumb';
import {
  ContentContainer,
  BoxContainer,
  BoxRow,
  BoxCol,
  BoxHeader,
  BoxTitle,
  BoxContent,
} from '@/styled/Layout';
import { useState } from 'react';

const MainIndex = () => {
  const [counter, setCounter] = useState(0);

  const upCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <ContentContainer className="main">
      <BreadCrumb />

      <BoxContainer>
        <BoxRow>
          <BoxCol>
            <BoxHeader>
              <BoxTitle>100% 그리드</BoxTitle>
            </BoxHeader>

            <BoxContent>
              <CButton type="button" _click={upCounter}>
                {counter}
              </CButton>
            </BoxContent>
          </BoxCol>
        </BoxRow>
      </BoxContainer>

      <BoxContainer>
        <BoxRow colSize={2}>
          <BoxCol>
            <BoxHeader>
              <BoxTitle>50% 그리드</BoxTitle>
            </BoxHeader>

            <BoxContent>컨텐츠 내용</BoxContent>
          </BoxCol>

          <BoxCol>
            <BoxHeader>
              <BoxTitle>50% 그리드</BoxTitle>
            </BoxHeader>

            <BoxContent>컨텐츠 내용</BoxContent>
          </BoxCol>
        </BoxRow>
      </BoxContainer>

      <BoxContainer>
        <BoxRow colSize={2} gutter={10}>
          <BoxCol>
            <BoxHeader>
              <BoxTitle>여백 있는 50% 그리드</BoxTitle>
            </BoxHeader>

            <BoxContent>컨텐츠 내용</BoxContent>
          </BoxCol>

          <BoxCol>
            <BoxHeader>
              <BoxTitle>여백 있는 50% 그리드</BoxTitle>
            </BoxHeader>

            <BoxContent>컨텐츠 내용</BoxContent>
          </BoxCol>
        </BoxRow>
      </BoxContainer>

      <div style={{}}>
        <div></div>
      </div>
    </ContentContainer>
  );
};

export default MainIndex;
