import { IoCart } from 'react-icons/io5';
import { CartStyled } from './Cart.styled';

const Cart = () => {
  return (
    <CartStyled>
      <IoCart size={18} />
      <span>13</span>
    </CartStyled>
  );
};
export default Cart;
