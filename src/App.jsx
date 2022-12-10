import { ThemeProvider } from 'styled-components';
import Footer from './components/Footer/Footer';
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
        <Footer />
      </>
    </ThemeProvider>
  );
};

export default App;
