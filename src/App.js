import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './pages/components/Footer';
import Navbar from './pages/components/Navbar';
import Home from './pages/home/Home';
import SignUp from './pages/signup/SignUp';
import SignIn from './pages/signin/SignIn';
import Products from './pages/products/Products';
import Cart from './pages/cart/Cart';
import Account from './pages/account/Account';
import {ShopContextProvider} from './context/shop-context';
import SingleProductPage from './pages/single/SingleProductPage';
import OrderComplete from './pages/orderComplete/OrderComplete';

function App() {
  return (
    <div className="App">
      <ShopContextProvider> 
    <Router>
      <Navbar />
    <div className="container">
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/cart" element={<Cart /> } />
      <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<SingleProductPage />} />
      <Route path ="/account" element={<Account /> } />
      <Route path ="/checkout" element={<OrderComplete />} />
      </Routes>
    </div>
      <Footer />
    </Router>
    </ShopContextProvider>
    </div>
  );
}

export default App;
