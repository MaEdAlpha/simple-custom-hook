import {useState, useEffect} from 'react';

const useCounter = (isForward = true) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
     let increment = isForward ? +1: -1;
      const interval = setInterval( () => {
        setCounter((prevCounter) => prevCounter + increment);
      }, 1000);
  
      return () => clearInterval(interval);
    }, [isForward]);

    return counter; 
};

export default useCounter;