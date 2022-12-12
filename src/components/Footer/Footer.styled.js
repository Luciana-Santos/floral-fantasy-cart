import styled from 'styled-components';

export const FooterStyled = styled.footer`
  background: ${({ theme }) => theme.colors.dkTurquoise};
  padding-block: 1rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.6);

  a {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.white};
  }
`;
