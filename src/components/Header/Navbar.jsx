import { Container } from '../../GlobalStyles';
import CartButton from '../Cart/CartButton';
import { NavbarStyled } from './Navbar.styled';

const Navbar = ({ onShowCart }) => {
  return (
    <Container>
      <NavbarStyled>
        <h1>
          <a href="index.html">Floral Fantasy</a>
        </h1>

        <CartButton onClick={onShowCart} />
      </NavbarStyled>
    </Container>
  );
};
export default Navbar;
