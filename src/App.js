import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import  Blog from './pages/blog/Blog';
import Footer from './components/footer/Footer'
import { BrowserRouter ,Routes,Route } from 'react-router-dom';





function App() {
 
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route>
        <Route path="/" element={<Home/>} />
        <Route path="/blog" element={<Blog/>} />
      </Route>
    </Routes>
  <Footer/>
  </BrowserRouter>

  );
}

export default App;
