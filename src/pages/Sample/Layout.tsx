import {
  ContentContainer,
  BoxContainer,
  BoxRow,
  BoxCol,
  BoxHeader,
  BoxTitle,
  BoxContent,
} from '@/styled/Layout';

const SampleLayout = () => {
  return (
    <ContentContainer className="sample-layout">
      <BoxContainer>
        <BoxRow colSize={3} gutter={10}>
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

          <BoxCol>
            <BoxHeader>
              <BoxTitle>50% 그리드</BoxTitle>
            </BoxHeader>

            <BoxContent>컨텐츠 내용</BoxContent>
          </BoxCol>
        </BoxRow>
      </BoxContainer>
    </ContentContainer>
  );
};

export default SampleLayout;
