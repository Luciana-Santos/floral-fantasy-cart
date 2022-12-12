import {
  CartItemAction,
  CartItemInfo,
  CartItemStyled,
  MinusOneIcon,
  PlusOneIcon,
} from './CartItem.styled';

const CartItem = () => {
  return (
    <CartItemStyled>
      <CartItemInfo>
        <div>
          <img
            src="https://raw.githubusercontent.com/Luciana-Santos/floral-fantasy/master/public/assets/shop_item-img%20(4).jpg"
            alt=""
          />
        </div>
        <p>
          Flower 4 <span>$24.99</span>
        </p>
      </CartItemInfo>

      <CartItemAction>
        <PlusOneIcon size="22" /> <span>2</span> <MinusOneIcon size="22" />
      </CartItemAction>
    </CartItemStyled>
  );
};
export default CartItem;
