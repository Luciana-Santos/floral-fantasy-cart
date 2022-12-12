import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { GlobalStyles, theme } from './GlobalStyles';

const App = () => {
  const [isModalCartShown, setisModalCartShown] = useState(false);

  const openCartHandler = () => {
    setisModalCartShown(true);
  };

  const closeCartHandler = () => {
    setisModalCartShown(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        {isModalCartShown ? <Cart onCartClose={closeCartHandler} /> : null}
        <GlobalStyles />
        <Header onShowCart={openCartHandler} />
        <Main />
        <Footer />
      </>
    </ThemeProvider>
  );
};

export default App;
