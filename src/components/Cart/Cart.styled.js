import styled from 'styled-components';

export const CartStyled = styled.div`
  padding-block: 1rem;
  display: grid;
  gap: 20px;

  h3 {
    text-align: center;
    font-size: 24px;
    color: ${({ theme }) => theme.colors.dkTurquoise};
  }

  ul li:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.ltBlueGray};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.minWidth.medium}) {
    padding-inline: 30px;
  } ;
`;

export const CartTotalPrice = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;

  h4 {
    text-transform: uppercase;
  }

  span {
    font-size: 18px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.dkTurquoise};
  }
`;
