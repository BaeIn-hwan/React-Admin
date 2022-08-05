export const scrollBox = (): {
  xScrollWidth: number;
  yScrollWidth: number;
} => {
  const outer = document.createElement('div');
  outer.setAttribute('class', 'scrollOuter');
  outer.setAttribute(
    'style',
    'position: fixed; top: 0; left: 0;overflow: scroll; width: 50px; height: 50px;',
  );
  const inner = document.createElement('div');
  inner.setAttribute('class', 'scrollInner');
  inner.setAttribute('style', 'width: 100%; height: 100%;');

  outer.appendChild(inner);
  document.body.appendChild(outer);

  const x = outer.offsetWidth - inner.offsetWidth;
  const y = outer.offsetHeight - inner.offsetHeight;

  document.body.removeChild(outer);

  return {
    xScrollWidth: x,
    yScrollWidth: y,
  };
};
