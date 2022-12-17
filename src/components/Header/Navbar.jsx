import { useContext } from 'react';
import { ModalCartContext } from '../../store/ModalCartContext';
import CartButton from '../Cart/CartButton';
import { NavbarStyled, NavContent } from './Navbar.styled';

const Navbar = () => {
  const { openCartHandler } = useContext(ModalCartContext);

  return (
    <NavbarStyled>
      <NavContent>
        <h1>
          <a href="index.html">Floral Fantasy</a>
        </h1>

        <CartButton onClick={openCartHandler} />
      </NavContent>
    </NavbarStyled>
  );
};
export default Navbar;
