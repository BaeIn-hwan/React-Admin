import React, {
  MutableRefObject,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';

import { GridWrapper, GridHeader, GridBody, GridFooter } from '@/styled/Board';
import { scrollBox } from '@/composables/common';

interface GridHeaderData {
  key: string;
  title: string | React.ReactNode;
  width: string;
  align?: string;
  styleClass?: object;
  headers?: GridHeaderData[];
}

interface GridOption {
  height?: string;
  gridOrder?: boolean;
  verticalScroll?: boolean;
  horizonScroll?: boolean;
}

interface GridData {
  headers: GridHeaderData[] | [];
  body: any[] | [];
}

interface BoardListProp {
  gridData: GridData;
  gridOption: GridOption;
}

const loadingLayout = () => {
  return <div>Loading...</div>;
};

const BoardList = ({ gridData, gridOption }: BoardListProp) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>({});
  const [options, setOptions] = useState<GridOption>({
    height: '300px',
    gridOrder: false,
    verticalScroll: true,
    horizonScroll: true,
  });

  useEffect(() => {
    Object.assign(options, gridOption);
  }, []);

  useEffect(() => {
    setData(gridData);
    console.log(data);
    if (Object.keys(data) && Object.keys(data).length) {
      setLoading(true);
    }
  }, [gridData]);

  if (!loading) {
    return loadingLayout();
  }

  return (
    <div style={{ height: options.height }}>
      <div style={{ height: '100%' }}>
        <div>
          <div>
            {options.gridOrder ? (
              <div>
                <table>
                  <colgroup>
                    <col style={{ width: '30px' }} />
                  </colgroup>

                  <tbody>
                    <tr>
                      <th>&nbsp;</th>
                    </tr>
                  </tbody>
                </table>
              </div>
            ) : null}

            <div>
              <table>
                <colgroup>
                  {data.headers.map((list: GridHeaderData, index: number) => {
                    return (
                      <col
                        key={index}
                        style={{ width: `${parseInt(list.width)}px` }}
                      />
                    );
                  })}
                </colgroup>

                <tbody>
                  <tr>
                    {data.headers.map((list: GridHeaderData, index: number) => {
                      return <th key={index}>{list.title}</th>;
                    })}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div>
          <div>
            {options.gridOrder ? (
              <div>
                <table>
                  <colgroup>
                    <col style={{ width: '30px' }} />
                  </colgroup>

                  <tbody>
                    {data.body.map((list: any, index: number) => {
                      return (
                        <tr key={index}>
                          <th>{index + 1}</th>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            ) : null}

            <div>
              <table>
                <colgroup>
                  {data.headers.map((list: GridHeaderData, index: number) => {
                    return (
                      <col
                        key={index}
                        style={{ width: `${parseInt(list.width)}px` }}
                      />
                    );
                  })}
                </colgroup>

                <tbody>
                  {data.body.map((list: any, index: number) => {
                    return (
                      <tr key={index}>
                        {data.headers.map((head: any, index2: number) => {
                          return <td key={index2}>{list[head.key]} </td>;
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="scrollbar">
          {options.verticalScroll ? (
            <div className="scrollbar scrollbar--vertical">
              <div>수직선</div>
            </div>
          ) : null}

          {options.verticalScroll ? (
            <div className="scrollbar scrollbar--horizon">
              <div>수평선</div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default BoardList;
