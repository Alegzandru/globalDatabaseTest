import { CartContextProvider } from 'Cart.context';
import Cart from 'Cart/cart';
import Header from 'Header/Header';
import List from 'List/list';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

render(
  <div style={{paddingBottom: "200px", paddingLeft: "10px"}}>
    <CartContextProvider>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <List></List>
          </Route>
          <Route path="/cart">
            <Cart></Cart>
          </Route>
        </Switch>
      </Router>
    </CartContextProvider>
  </div>
, document.getElementById('root'));
