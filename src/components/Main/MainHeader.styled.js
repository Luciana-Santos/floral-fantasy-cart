import styled from 'styled-components';

export const MainHeaderStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 1.25em;
  font-size: clamp(1rem, 4vw, 1.25rem);
  justify-content: center;
  color: ${({ theme }) => theme.colors.mdGray};
  border-top: 0.0625em solid ${({ theme }) => theme.colors.ltBlueGray};
  border-bottom: 0.0625em solid ${({ theme }) => theme.colors.ltBlueGray};

  li {
    cursor: pointer;
    padding-block: 0.5em;
    transition: all 0.3s;
    text-transform: capitalize;
  }

  li:hover {
    color: ${({ theme }) => theme.colors.dkTurquoise};
  }
`;
