import { useMemo } from 'react';
import createRenderer from './create_renderer';

const MixedText = ({
  children,
  ...components
}) => {
  const render = useMemo(() => createRenderer(components), [components]);

  return render(children);
};

export default MixedText;
