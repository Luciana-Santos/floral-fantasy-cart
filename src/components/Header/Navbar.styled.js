import styled from 'styled-components';

export const NavbarStyled = styled.nav`
  padding-block: 1.25rem;
  display: flex;
  gap: 1.25rem;
  justify-content: space-between;
  align-items: center;

  h1 a {
    color: ${({ theme }) => theme.colors.dkTurquoise};
  }
`;
