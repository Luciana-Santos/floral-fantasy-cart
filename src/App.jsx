import { useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { GlobalStyles, theme } from './GlobalStyles';
import items from './content.js';
import { ModalCartContext } from './store/ModalCartContext';

const allCategories = [
  'all',
  ...new Set(items.map((item) => item.categories).flat(1)),
];

const App = () => {
  // const [isModalCartShown, setisModalCartShown] = useState(false);
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  const { isModalCartShown } = useContext(ModalCartContext);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }

    const newItems = items.filter((item) => item.categories.includes(category));
    setMenuItems(newItems);
  };

  return (
    <ThemeProvider theme={theme}>
      {isModalCartShown ? <Cart /> : null}
      <GlobalStyles />
      <Header />
      <Main
        items={menuItems}
        categories={categories}
        filterItems={filterItems}
      />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
