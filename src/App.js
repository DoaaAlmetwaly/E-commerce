import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import  Blog from './pages/blog/Blog';
import Footer from './components/footer/Footer'
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import Shop from './pages/shop/Shop';





function App() {
 
  return (
    <BrowserRouter>
    <Navbar/>
    <div className=" min-vh-100">

    <Routes>
      <Route>
        <Route path="/" element={<Home/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/shop" element={<Shop/>} />
        
      </Route>
    </Routes>
    </div>
  <Footer/>
  </BrowserRouter>

  );
}

export default App;
