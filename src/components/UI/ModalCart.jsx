import { useContext } from 'react';
import { createPortal } from 'react-dom';
import { ModalCartContext } from '../../store/ModalCartContext';
import { BackdropStyled, ModalOverlayStyled } from './ModalCart.styled';

const Backdrop = ({ onClick }) => {
  return <BackdropStyled onClick={onClick}></BackdropStyled>;
};

const ModalOverlay = ({ children }) => {
  return (
    <div>
      <ModalOverlayStyled>{children}</ModalOverlayStyled>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const ModalCart = ({ children }) => {
  const { closeCartHandler } = useContext(ModalCartContext);

  return (
    <>
      {createPortal(<Backdrop onClick={closeCartHandler} />, portalElement)}
      {createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </>
  );
};
export default ModalCart;
