import { CardButton, CardDescrip, CardStyled } from './Card.styled';
import { ButtonStyled } from './Button.styled';

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
      <CardButton>Buy</CardButton>
    </CardStyled>
  );
};
export default Card;
