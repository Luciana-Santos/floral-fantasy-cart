import styled from 'styled-components';
import { ButtonStyled } from './Button.styled';

export const CardStyled = styled.li`
  flex: 1 1 260px;
  display: grid;
  gap: 0.625em;
  font-size: 1.125rem;
  border-radius: 0.25em;
  overflow: hidden;
  position: relative;
  max-width: 300px;

  img {
    border-radius: 0.25em;
    overflow: hidden;
  }
`;

export const CardDescrip = styled.div`
  display: flex;
  justify-content: space-between;
  padding-block: 0.375em;
  border-top: 1px solid ${({ theme }) => theme.colors.ltBlueGray};
  border-bottom: 1px solid ${({ theme }) => theme.colors.ltBlueGray};
`;

export const CardButton = styled(ButtonStyled)`
  width: 100%;
  background: ${({ theme }) => theme.colors.ltBlueGray};
  color: ${({ theme }) => theme.colors.dkTurquoise};

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;
