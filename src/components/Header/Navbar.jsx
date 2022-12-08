import { Container } from '../../GlobalStyles';
import Cart from '../Cart/Cart';
import { NavbarStyled } from './Navbar.styled';

const Navbar = () => {
  return (
    <Container>
      <NavbarStyled>
        <h1>
          <a href="index.html">Floral Fantasy</a>
        </h1>

        <Cart />
      </NavbarStyled>
    </Container>
  );
};
export default Navbar;
