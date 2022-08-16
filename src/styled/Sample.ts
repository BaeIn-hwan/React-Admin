import styled from 'styled-components';

const SampleContent = styled.div`
  margin-top: 15px;

  & > div {
    margin-top: 25px;

    &:first-of-type {
      margin-top: 0;
    }
  }
`;

const SampleSummary = styled.summary`
  font-size: 20px;
  cursor: pointer;
`;

const SampleDetails = styled.details`
  margin-top: 50px;

  &:first-of-type {
    margin-top: 0;
  }
`;

const SampleWrapper = styled.div`
  padding: 16px;
`;

export { SampleContent, SampleSummary, SampleDetails, SampleWrapper };
