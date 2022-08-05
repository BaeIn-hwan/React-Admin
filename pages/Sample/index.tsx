import { Outlet } from 'react-router-dom';

const SampleIndex = () => {
  return (
    <div>
      <h1>샘플 메인</h1>
      <Outlet />
    </div>
  );
};

export default SampleIndex;
