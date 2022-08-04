import { Link } from 'react-router-dom';

const breadCrumb = () => {
  return (
    <nav className="breadCrumb">
      <h2 className="blind">Breadcrumb</h2>

      <ul className="breadCrumb__list">
        <li className="breadCrumb__item">
          <Link to="/" className="breadCrumb__link">
            Home
          </Link>
        </li>

        <li className="breadCrumb__item">
          <Link to="/" className="breadCrumb__link">
            One Depth
          </Link>
        </li>

        <li className="breadCrumb__item">
          <Link to="/" className="breadCrumb__link">
            Two Depth
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default breadCrumb;
