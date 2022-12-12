import ModalCart from '../UI/ModalCart';
import { CartStyled, CartTotalPrice } from './Cart.styled';
import CartItem from './CartItem';
import { BtnCloseCart } from './CartItem.styled';

const Cart = ({ onCartClose }) => {
  return (
    <ModalCart onClick={onCartClose}>
      <BtnCloseCart onClick={onCartClose} />
      <CartStyled>
        <h3>Your Cart</h3>
        <ul>
          <CartItem />
          <CartItem />
          <CartItem />
        </ul>

        <CartTotalPrice>
          <h4>Total:</h4>
          <span>$195.65</span>
        </CartTotalPrice>
      </CartStyled>
    </ModalCart>
  );
};
export default Cart;
