import styled from 'styled-components';

export const HeroStyled = styled.section`
  padding-top: 3.75rem;
  display: flex;
  gap: 1.875rem;
  flex-direction: column;
  text-align: center;
  background: url('../../assets/header-img.jpg') no-repeat;
  background-position: center;
  background-size: cover;
  height: 40vh;

  h2 {
    font-size: clamp(1.5rem, 4vw, 2.75rem);
    color: ${({ theme }) => theme.colors.dkTurquoise};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.minWidth.large}) {
    padding-top: 5.625rem;
    height: 80vh;
    background-position: bottom;
  }
`;
