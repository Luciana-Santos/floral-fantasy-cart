import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from './GlobalStyles';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <h1>Let's get started!</h1>
      </>
    </ThemeProvider>
  );
};
export default App;
