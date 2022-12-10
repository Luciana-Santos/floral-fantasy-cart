import ModalCart from '../UI/ModalCart';
import CartItem from './CartItem';

const Cart = () => {
  return (
    <ModalCart>
      <h3>Your Cart</h3>
      <ul>
        <CartItem />
      </ul>

      <div>
        <h4>Total</h4>
        <span>$195.65</span>
      </div>
    </ModalCart>
  );
};
export default Cart;
