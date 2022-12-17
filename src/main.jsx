import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CartProvider from './store/CartContext';
import ModalCartProvider from './store/ModalCartContext';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ModalCartProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ModalCartProvider>
  </React.StrictMode>,
);
