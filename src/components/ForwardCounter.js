
import useCounter from '../hooks/use-counter';

import Card from './Card';

const ForwardCounter = () => {
  // call custom hook. state and effect is not shared across components.
  // logic shared, not concrete state. separate instances created each time you call a custom hook.
  const counter = useCounter(); 

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
