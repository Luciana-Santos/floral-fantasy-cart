import { useContext } from 'react';
import { Flex } from '../../GlobalStyles';
import { CartContext } from '../../store/CartContext';
import { ModalCartContext } from '../../store/ModalCartContext';
import { ButtonStyled } from '../UI/Button.styled';
import ModalCart from '../UI/ModalCart';
import { CartStyled, CartTotalPrice } from './Cart.styled';
import CartItem from './CartItem';
import { BtnCloseCart } from './CartItem.styled';

const Cart = () => {
  const { closeCartHandler } = useContext(ModalCartContext);
  const { items, totalAmount, removeAll } = useContext(CartContext);

  const totalAmountFormated = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(totalAmount);

  const hasItems = items.length >= 1;

  return (
    <ModalCart>
      <BtnCloseCart onClick={closeCartHandler} />
      <CartStyled>
        <h3>Your Cart</h3>
        <ul>
          {items.map((item) => {
            return <CartItem key={item.id} data={item} />;
          })}
        </ul>

        <CartTotalPrice>
          <h4>Total:</h4>
          <span>{totalAmountFormated}</span>
        </CartTotalPrice>

        {hasItems ? (
          <Flex gap="20px" justSelf="end">
            <ButtonStyled
              onClick={removeAll}
              marginInline="none"
              justSelf="end"
            >
              Remove All
            </ButtonStyled>
            <ButtonStyled marginInline="none" background="dkTurquoise">
              Order
            </ButtonStyled>
          </Flex>
        ) : null}
      </CartStyled>
    </ModalCart>
  );
};
export default Cart;
