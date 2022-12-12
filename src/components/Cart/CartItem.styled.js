import styled from 'styled-components';
import { IoAddCircle, IoRemoveCircle, IoClose } from 'react-icons/io5';

export const CartItemStyled = styled.li`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  padding-block: 10px;
`;

export const CartItemInfo = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  img {
    height: 60px;
    object-fit: cover;
    object-position: center;
    border-radius: 4px;
  }

  p {
    display: flex;
    flex-direction: column;
  }

  span {
    font-weight: bold;
  }
`;

export const CartItemAction = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    font-size: 18px;
  }
`;

export const PlusOneIcon = styled(IoAddCircle)`
  color: ${({ theme }) => theme.colors.dkTurquoise};
  cursor: pointer;
`;

export const MinusOneIcon = styled(IoRemoveCircle)`
  color: ${({ theme }) => theme.colors.dkTurquoise};
  cursor: pointer;
`;

export const BtnCloseCart = styled(IoClose)`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 30px;
  cursor: pointer;
`;
