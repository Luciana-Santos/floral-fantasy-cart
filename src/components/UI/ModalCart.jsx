import { createPortal } from 'react-dom';
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

const ModalCart = ({ children, onClick }) => {
  return (
    <>
      {createPortal(<Backdrop onClick={onClick} />, portalElement)}
      {createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </>
  );
};
export default ModalCart;
