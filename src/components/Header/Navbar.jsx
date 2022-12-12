import CartButton from '../Cart/CartButton';
import { NavbarStyled, NavContent } from './Navbar.styled';

const Navbar = ({ onShowCart }) => {
  return (
    <NavbarStyled>
      <NavContent>
        <h1>
          <a href="index.html">Floral Fantasy</a>
        </h1>

        <CartButton onClick={onShowCart} />
      </NavContent>
    </NavbarStyled>
  );
};
export default Navbar;
