import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './pages/components/Footer';
import Navbar from './pages/components/Navbar';
import Home from './pages/home/Home';
import SignUp from './pages/signup/SignUp';
import SignIn from './pages/signin/SignIn';
import Products from './pages/products/Products';
import Cart from './pages/cart/Cart';
import {ShopContextProvider} from './context/shop-context';

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
      <Route path="/products" element={<Products />} />
      <Route path="/cart" element={<Cart /> } />
      </Routes>
    </div>
      <Footer />
    </Router>
    </ShopContextProvider>
    </div>
  );
}

export default App;
