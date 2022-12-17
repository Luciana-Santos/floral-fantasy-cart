import { useContext, useEffect, useState } from 'react';
import { IoCart } from 'react-icons/io5';
import { CartContext } from '../../store/CartContext';
import { ButtonStyled } from '../UI/Button.styled';

const CartButton = ({ onClick }) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const { items } = useContext(CartContext);

  const totalItems = items.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);

  useEffect(() => {
    if (items.length === 0) return;
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <ButtonStyled
      color="dkTurquoise"
      isActive={btnIsHighlighted}
      marginInline="none"
      onClick={onClick}
    >
      <IoCart size={18} />
      <span>{totalItems}</span>
    </ButtonStyled>
  );
};
export default CartButton;
