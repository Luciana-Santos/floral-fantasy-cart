import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

  img {
    width: 100%;
    display: block;
  }

  h1, h2, h3 {
    line-height: 1;
    font-weight: 400;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  body {
    min-height: 100vh;
    line-height: 1.5;
    font-family: ${({ theme }) => theme.fonts.mainFont};
    color: ${({ theme }) => theme.colors.body};
  }
`;

export const Container = styled.div`
  width: min(100% - 2rem, 70rem);
  margin-inline: auto;
`;

// minWidth: 640, 960, 1200
// maxWidth: 639.98, 959.98, 1199.98
export const theme = {
  fonts: {
    mainFont: 'Kurale, serif',
  },
  colors: {
    body: 'hsla(0, 0%, 8%, 1)',
    white: 'hsla(0, 0%, 100%, 1)',
    ltgray: 'hsla(190, 14%, 84%, 1)',
    mdGray: 'hsla(0, 0%, 51%, 1)',
    dkTurquoise: 'hsla(187, 100%, 10%, 1)',
  },
  breakpoints: {
    minWidth: {
      medium: '40em',
      large: '60em',
      xlarge: '75em',
    },
    maxWidth: {
      small: '39.99em',
      medium: '59.99em',
      large: '74.99em',
    },
  },
};
