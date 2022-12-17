import { useContext } from 'react';
import { CartContext } from '../../store/CartContext';
import { CardButton, CardDescrip, CardStyled } from './Card.styled';

const Card = ({ data }) => {
  const { id, name, img, price } = data;

  const { addItemToCart } = useContext(CartContext);

  const addItemHandler = () => {
    addItemToCart({ id, name, img, price });
  };

  return (
    <CardStyled>
      <div>
        <img src={img} alt={name} />
      </div>
      <CardDescrip>
        <h4>{name}</h4>
        <p>${price}</p>
      </CardDescrip>
      <CardButton onClick={addItemHandler}>Buy</CardButton>
    </CardStyled>
  );
};
export default Card;
