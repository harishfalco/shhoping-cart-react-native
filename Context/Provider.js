import React, {useState} from 'react';
import PackageContext from './Context';

const Provider = props => {
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);

  const value = {
    count,
    setCount,
    price,
    setPrice,
  };

  return (
    <PackageContext.Provider value={value}>
      {props.children}
    </PackageContext.Provider>
  );
};

export default Provider;
