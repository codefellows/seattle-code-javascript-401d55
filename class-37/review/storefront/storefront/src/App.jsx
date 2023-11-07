import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Categories from './components/Categories/Categories';
import {Provider} from 'react-redux';
import Products from './components/Products/Products';
import store from './store';
import './App.css'

function App() {
  const storeName = 'Clothing Store';
  return (
  
    <Provider store ={store}>
      <Header storeName={storeName}/>
      <Categories />
      <Products />
      <Footer />
    </Provider>
  )
}

export default App
