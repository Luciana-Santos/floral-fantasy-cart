import { IoCart } from 'react-icons/io5';
import { CartButtonStyled } from './CartButton.styled';

const CartButton = ({ onClick }) => {
  return (
    <CartButtonStyled onClick={onClick}>
      <IoCart size={18} />
      <span>13</span>
    </CartButtonStyled>
  );
};
export default CartButton;
