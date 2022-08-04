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

// import {
//   MutableRefObject,
//   useEffect,
//   useRef,
//   useState,
//   useCallback,
// } from 'react';

// import { GridWrapper, GridHeader, GridBody, GridFooter } from '@/styled/Board';
// import { scrollBox } from '@/composables/common';

// interface BoardListPorps {
//   headers: any[] | [];
//   body: any[] | [];
// }

// const loading = () => {};

// const BoardList = (props: any) => {
//   const [deviceScroll, setDeviceScroll] = useState<{
//     scrollX: number;
//     scrollY: number;
//   }>({
//     scrollX: 0,
//     scrollY: 0,
//   });
//   const [list, setList] = useState<any>([]);
//   const [num, setNum] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//   const horizonBar = useRef() as MutableRefObject<HTMLDivElement>;
//   const verticalBar = useRef() as MutableRefObject<HTMLDivElement>;

//   const wheelEvent = () => {
//     let moveY = 0;

//     document.querySelector('.i-grid')?.addEventListener('wheel', function (e) {
//       console.log(e);
//     });
//   };

//   useEffect(() => {
//     setList(props);

//     wheelEvent();
//   }, []);

//   useEffect(() => {
//     const { xScrollWidth, yScrollWidth } = scrollBox();

//     setDeviceScroll({
//       scrollX: xScrollWidth,
//       scrollY: yScrollWidth,
//     });
//   }, []);

//   return (
//     <div style={{ height: '100%' }}>
//       {/* <div
//         className="i-grid"
//         style={{ width: '1000px', height: props.height, margin: '0 auto' }}
//       >
//         <div className="i-grid__row i-grid__header">
//           <div className="i-grid__number">
//             <table>
//               <colgroup>
//                 <col style={{ width: '36px' }} />
//               </colgroup>

//               <tbody>
//                 <tr>
//                   <td>&nbsp;</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>

//           <div className="i-grid__content">
//             <table>
//               <colgroup>
//                 <col style={{ width: '100px' }} />
//                 <col style={{ width: '100px' }} />
//                 <col style={{ width: '100px' }} />
//                 <col style={{ width: '100px' }} />
//                 <col style={{ width: '100px' }} />
//                 <col style={{ width: '100px' }} />
//                 <col style={{ width: '100px' }} />
//                 <col style={{ width: '100px' }} />
//                 <col style={{ width: '100px' }} />
//                 <col style={{ width: '100px' }} />
//               </colgroup>

//               <thead>
//                 <tr>
//                   <th>제목01</th>
//                   <th>제목02</th>
//                   <th>제목03</th>
//                   <th>제목04</th>
//                   <th>제목05</th>
//                   <th>제목06</th>
//                   <th>제목07</th>
//                   <th>제목08</th>
//                   <th>제목09</th>
//                   <th>제목10</th>
//                 </tr>
//               </thead>
//             </table>
//           </div>
//         </div>

//         <div
//           className="i-grid__row i-grid__body"
//           style={{ height: `${props.height - 18 - 31}px` }}
//         >
//           <div className="i-grid__number">
//             <table>
//               <colgroup>
//                 <col style={{ width: '36px' }} />
//               </colgroup>

//               <tbody>
//                 {num.map((num) => {
//                   return (
//                     <tr key={num}>
//                       <td>{num}</td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>
//           </div>

//           <div className="i-grid__content">
//             <table>
//               <colgroup>
//                 <col style={{ width: '100px' }} />
//                 <col style={{ width: '100px' }} />
//                 <col style={{ width: '100px' }} />
//                 <col style={{ width: '100px' }} />
//                 <col style={{ width: '100px' }} />
//                 <col style={{ width: '100px' }} />
//                 <col style={{ width: '100px' }} />
//                 <col style={{ width: '100px' }} />
//                 <col style={{ width: '100px' }} />
//                 <col style={{ width: '100px' }} />
//               </colgroup>
//               <tbody>
//                 {num.map((num, index) => {
//                   return (
//                     <tr key={index}>
//                       <td>제목01</td>
//                       <td>제목02</td>
//                       <td>제목01</td>
//                       <td>제목02</td>
//                       <td>제목01</td>
//                       <td>제목02</td>
//                       <td>제목01</td>
//                       <td>제목02</td>
//                       <td>제목01</td>
//                       <td>제목02</td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         <div className="i-grid__scroll">
//           {}
//           <div className="i-grid__scroll-container i-grid__scroll-container--vertical">
//             <div
//               className="i-grid__scroll-bar"
//               ref={verticalBar}
//               style={{ top: '4px', left: 0, width: '50px', height: '8px' }}
//             ></div>
//           </div>

//           <div className="i-grid__scroll-container i-grid__scroll-container--horizon">
//             <div
//               className="i-grid__scroll-bar"
//               ref={horizonBar}
//               style={{ top: 0, left: '4px', width: '8px', height: '50px' }}
//             ></div>
//           </div>
//         </div>
//       </div> */}
//     </div>
//   );
// };

// export default BoardList;
