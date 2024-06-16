import { forwardRef } from 'react';
import withDimension from './WithDimension';

const Comp1 = (props, forwardedRefFromParent) => {
  console.log('forwardedRefFromParent ', forwardedRefFromParent);
  const { width, height, randomNumber } = props;
  return (
    <div className="comp1" ref={forwardedRefFromParent}>
      Hey! I am comp1 and my width is {width} and height is {height} and random
      number is {randomNumber}
    </div>
  );
};

export default withDimension(forwardRef(Comp1));
