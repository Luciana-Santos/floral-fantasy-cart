import styled from 'styled-components';

export const CartStyled = styled.div`
  background: ${({ theme }) => theme.colors.ltBlueGray};
  display: flex;
  gap: 0.375rem;
  align-items: center;
  padding-inline: 0.5rem;
  padding-block: 0.25rem;
  border-radius: 0.25rem;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.mdBlueGray};
  }

  span {
    font-size: 1.25rem;
  }
`;
