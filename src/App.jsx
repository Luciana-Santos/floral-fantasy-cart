import { ThemeProvider } from 'styled-components';
import Header from './components/Header/Header';
import { GlobalStyles, theme } from './GlobalStyles';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
      </>
    </ThemeProvider>
  );
};
export default App;
