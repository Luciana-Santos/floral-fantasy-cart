import { createContext, useState } from 'react';

export const ModalCartContext = createContext();

const ModalCartProvider = ({ children }) => {
  const [isModalCartShown, setisModalCartShown] = useState(false);

  const openCartHandler = () => {
    setisModalCartShown(true);
  };

  const closeCartHandler = () => {
    setisModalCartShown(false);
  };

  return (
    <ModalCartContext.Provider
      value={{ isModalCartShown, openCartHandler, closeCartHandler }}
    >
      {children}
    </ModalCartContext.Provider>
  );
};
export default ModalCartProvider;
