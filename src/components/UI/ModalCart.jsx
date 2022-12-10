import { createPortal } from 'react-dom';
import { BackdropStyled, ModalOverlayStyled } from './ModalCart.styled';

const Backdrop = (props) => {
  return <BackdropStyled></BackdropStyled>;
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
  return (
    <>
      {createPortal(<Backdrop />, portalElement)}
      {createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </>
  );
};
export default ModalCart;
