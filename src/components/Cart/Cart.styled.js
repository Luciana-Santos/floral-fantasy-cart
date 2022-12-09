import styled from 'styled-components';
import { ButtonStyled } from '../UI/Button.styled';

export const CartStyled = styled(ButtonStyled)`
  background: ${({ theme }) => theme.colors.ltBlueGray};
  display: flex;
  gap: 0.375rem;
  align-items: center;
  padding-inline: 0.5rem;
  padding-block: 0.25rem;
  border-radius: 0.25rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.dkTurquoise};
  transition: all 0.35s;
  margin: 0;

  &:after {
    background: ${({ theme }) => theme.colors.dkTurquoise};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }

  span {
    font-size: 1.25rem;
  }
`;
