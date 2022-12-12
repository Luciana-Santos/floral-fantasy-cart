import styled from 'styled-components';
import { Container } from '../../GlobalStyles';

export const NavbarStyled = styled.nav`
  padding-block: 1.25rem;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background: ${({ theme }) => theme.colors.white};
  z-index: 999;
  box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.1);

  h1 a {
    color: ${({ theme }) => theme.colors.dkTurquoise};
  }
`;

export const NavContent = styled(Container)`
  display: flex;
  gap: 1.25rem;
  justify-content: space-between;
  align-items: center;
`;
