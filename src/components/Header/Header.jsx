import { HeaderStyled } from './Header.styled';
import Hero from './Hero';
import Navbar from './Navbar';

const Header = () => {
  return (
    <HeaderStyled>
      <Navbar />
      <Hero />
    </HeaderStyled>
  );
};
export default Header;
