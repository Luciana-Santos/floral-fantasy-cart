import styled from 'styled-components';
import { ButtonStyled } from './Button.styled';

export const CardStyled = styled.li`
  flex: 1 1 270px;
  display: grid;
  gap: 10px;
  font-size: 18px;
  border-radius: 4px;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 4px;
    overflow: hidden;
  }
`;

export const CardDescrip = styled.div`
  display: flex;
  justify-content: space-between;
  padding-block: 6px;
  border-top: 1px solid ${({ theme }) => theme.colors.ltBlueGray};
  border-bottom: 1px solid ${({ theme }) => theme.colors.ltBlueGray};
`;

export const CardButton = styled(ButtonStyled)`
  margin: 0;
`;
