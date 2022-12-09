import { ThemeProvider } from 'styled-components';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { GlobalStyles, theme } from './GlobalStyles';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Main />
      </>
    </ThemeProvider>
  );
};
export default App;
