import { useContext, useState } from 'react';
import { CartContext } from '../../store/CartContext';
import {
  CartItemAction,
  CartItemInfo,
  CartItemStyled,
  MinusOneIcon,
  PlusOneIcon,
} from './CartItem.styled';

const CartItem = ({ data }) => {
  const { items, addItemToCart, removeItemFromCart } = useContext(CartContext);
  const { id, name, img, price } = data;

  const addNewItem = () => {
    addItemToCart({ id, name, img, price });
  };

  return (
    <CartItemStyled>
      <CartItemInfo>
        <div>
          <img src={data.img} alt={data.name} />
        </div>
        <p>
          {data.name} <span>{data.price}</span>
        </p>
      </CartItemInfo>

      <CartItemAction>
        <MinusOneIcon
          size="22"
          onClick={removeItemFromCart.bind(this, data.id)}
        />
        <span>{data.amount}</span>
        <PlusOneIcon size="22" onClick={addNewItem} />
      </CartItemAction>
    </CartItemStyled>
  );
};
export default CartItem;
