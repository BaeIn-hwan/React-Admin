import { useNavigate } from 'react-router-dom';

const ErrorIndex = () => {
  const navigator = useNavigate();

  const goMain = () => {
    navigator(-1);
  };

  return (
    <div className="error">
      <p>요청하신 페이지를 찾을 수 없습니다.</p>
      <button type="button" onClick={goMain}>
        메인으로
      </button>
    </div>
  );
};

export default ErrorIndex;
