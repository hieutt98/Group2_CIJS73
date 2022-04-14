import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login'
import Register from './components/Register'
import About from './components/About';
import Profile from './components/Profile';
import Product from './components/Product';
import Cart from './components/Cart';
import Invoice from './components/Invoice';

import './App.css';
import Home from './components/Home';
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector(state => state.user.user);
  //console.log(user);
  return (
    <div className="App">
      <h1>React Router</h1>
      <Routes>
        <Route path="/auth">
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>
        <Route path="/" element={<Home />} />
        {!user ?

          <Route>
            <Route path='products/:id' element={<Navigate replace to="/auth/login" />} />
            <Route path='invoices/:id' element={<Navigate replace to="/auth/login" />} />
            <Route path='cart' element={<Navigate replace to="/auth/login" />} />
            <Route path='profile' element={<Navigate replace to="/auth/login" />} />
            <Route path='about' element={<Navigate replace to="/auth/login" />} />
          </Route>
          :
          <Route>
            <Route path='products/:id' element={<Product />} />
            <Route path='invoices/:id' element={<Invoice />} />
            <Route path='cart' element={<Cart />} />
            <Route path='profile' element={<Profile />} />
            <Route path='about' element={<About />} />
          </Route>
        }
      </Routes>
    </div>
  );
}

export default App;
