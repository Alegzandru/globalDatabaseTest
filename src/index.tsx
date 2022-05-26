import { CartContextProvider } from 'Cart.context';
import Cart from 'Cart/cart';
import List from 'List/list';
import React from 'react';
import { render } from 'react-dom';

render(
  <div style={{paddingBottom: "200px"}}>
    <CartContextProvider>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header/>}>
            <Route index element={<List/>} />
            <Route path="cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
      <List></List>
      <Cart></Cart>
    </CartContextProvider>
  </div>
, document.getElementById('root'));
