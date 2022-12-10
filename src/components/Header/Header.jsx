import Hero from './Hero';
import Navbar from './Navbar';

const Header = ({ onShowCart }) => {
  return (
    <header>
      <Navbar onShowCart={onShowCart} />
      <Hero />
    </header>
  );
};
export default Header;
