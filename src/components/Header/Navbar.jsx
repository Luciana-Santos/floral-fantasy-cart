import { Container } from '../../GlobalStyles';
import Cart from '../Cart/Cart';
import { NavbarStyled } from './Navbar.styled';

const Navbar = () => {
  return (
    <Container>
      <NavbarStyled>
        <h1>Floral Fantasy</h1>

        <Cart />
      </NavbarStyled>
    </Container>
  );
};
export default Navbar;
