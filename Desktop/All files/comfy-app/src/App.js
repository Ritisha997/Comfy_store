import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Sidebar from './components/Sidebar';
import SingleProduct from './components/SingleProduct';
import logo from './logo.svg';


function App() {
  return (
    
    <Router>
    <Sidebar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Products' element={<Products/>}/>
        <Route path='/singleProduct/:id' element={<SingleProduct/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </Router>
   
  );
}

export default App;
