// App.js
import React from 'react';
import Banner from './components/Banner';
import Category from './components/Category';
import Product from './components/Product';

const App = () => {
  return (
    <div className="App">
      <Banner />
      <Category />
      <Product />
    </div>
  );
};

export default App;
