import { useRef, useState, useEffect } from 'react';

const withDimension = (Component) => {
  return function WithDimension(props) {
    console.log('props', props);
    const [width, setWidth] = useState(null);
    const [height, setHeight] = useState(null);

    const compRef = useRef(null);

    useEffect(() => {
      if (compRef.current) {
        setWidth(compRef.current.offsetWidth);
        setHeight(compRef.current.offsetHeight);
      }
    }, [compRef]);

    return <Component ref={compRef} width={width} height={height} {...props} />;
  };
};

export default withDimension;
