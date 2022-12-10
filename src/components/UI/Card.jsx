import { Flex } from '../../GlobalStyles';
import { CardButton, CardDescrip, CardStyled } from './Card.styled';
import { IoAddCircle, IoRemoveCircle } from 'react-icons/io5';

const Card = ({ data }) => {
  const { id, name, img, price } = data;

  return (
    <CardStyled>
      <div>
        <img src={img} alt={name} />
      </div>
      <CardDescrip>
        <h4>{name}</h4>
        <p>${price}</p>
      </CardDescrip>
    </CardStyled>
  );
};
export default Card;
