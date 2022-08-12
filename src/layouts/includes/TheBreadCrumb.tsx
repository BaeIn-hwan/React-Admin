import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import {
  BreadCrumb,
  BreadCrumbList,
  BreadCrumbItem,
  BreadCrumbLink,
  BreadCrumbItemSkeleton,
  BreadCrumbLinkSkeleton,
} from '@/styled/BreadCrumb';
import test from '@/json/location.json';

const breadCrumb = () => {
  const location = useLocation();
  const [paths, setPaths] = useState<string[] | []>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const setPathInfo = () => {
    const fullLocation = test as { location: any };
    const path = location.pathname
      .split('/')
      .filter((depth: string) => (depth !== '' ? depth : null))
      .map((depth: string) => {
        return fullLocation?.location.filter((list) => {
          return list.engName === depth;
        });
      });

    setPaths(path);
  };

  useEffect(() => {
    // setPathInfo();
    setLoading(true);
  }, [location]);

  if (!loading) {
    return (
      <BreadCrumb>
        <h2 className="blind">Breadcrumb</h2>

        <BreadCrumbList>
          <BreadCrumbItemSkeleton>
            <BreadCrumbLinkSkeleton></BreadCrumbLinkSkeleton>
          </BreadCrumbItemSkeleton>
          <BreadCrumbItemSkeleton>
            <BreadCrumbLinkSkeleton></BreadCrumbLinkSkeleton>
          </BreadCrumbItemSkeleton>
          <BreadCrumbItemSkeleton>
            <BreadCrumbLinkSkeleton></BreadCrumbLinkSkeleton>
          </BreadCrumbItemSkeleton>
        </BreadCrumbList>
      </BreadCrumb>
    );
  }

  return (
    <BreadCrumb>
      <h2 className="blind">Breadcrumb</h2>

      <BreadCrumbList>
        <BreadCrumbItem>
          <BreadCrumbLink to="/index">Home</BreadCrumbLink>
        </BreadCrumbItem>

        <BreadCrumbItem>
          <BreadCrumbLink to="/index">Home</BreadCrumbLink>
        </BreadCrumbItem>

        {/* {paths.map((path: string, idx: number) => {
          return (
            <li className="breadCrumb__item" key={idx}>
              <Link to="/" className="breadCrumb__link">
                {path.korName}
              </Link>
            </li>
          );
        })} */}
      </BreadCrumbList>
    </BreadCrumb>
  );
};

export default breadCrumb;
