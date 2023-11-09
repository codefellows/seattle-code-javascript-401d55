import './App.css'
import { Provider } from 'react-redux';
import store from './store';
import Categories from './components/categories';
import Products from './components/products';

function App() {
  return (
    <>
      <Provider store={store}>
        <h1>Welcome to the storefront</h1>
        <Categories />
        <Products />
      </Provider>
    </>
  )
}

export default App
