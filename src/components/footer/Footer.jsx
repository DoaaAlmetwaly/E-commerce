 import React from 'react'
 import { SiGooglemaps } from "react-icons/si";
 import { FaPhone } from "react-icons/fa6";
 import { IoMdMail } from "react-icons/io";
 import { FaSquareFacebook } from "react-icons/fa6";
 import { FaSquareTwitter } from "react-icons/fa6";
 import { FaLinkedin } from "react-icons/fa";
 import { FaInstagramSquare } from "react-icons/fa";
 import { FaPinterestSquare } from "react-icons/fa";
 import { Link } from 'react-router-dom';
 import { FaTwitter } from "react-icons/fa6";
 import { FaRegCopyright } from "react-icons/fa6";

 
 const Footer = () => {
   return (
    <>
      <footer className=' bg-black text-white py-5'>
        <div className="container py-5">
          <div className="row ">
            <div className="col-md-3">
              <h4 className=' ms-sm-3'>About ShopCart</h4>
              <p>Eduaid theme number one world class university in the world There are student are studing always in this university for all time.</p>
              <div className='d-flex'>
              <SiGooglemaps />
              <p className='ms-2'>New York, USA.</p>
              </div>
              <div className='d-flex'>
              <FaPhone />
              <p className='ms-2'>+880 123 456 789</p>
              </div>
              <div className='d-flex'>
              <IoMdMail />
              <p className='ms-2'>info@shopcart.com</p>
              </div>
              <div className=' d-flex mb-5 '>
              <FaSquareFacebook size={35} className='social-icons'/>
              <FaSquareTwitter  size={35}  className='social-icons'/>
              <FaLinkedin size={35} className='social-icons' />
              <FaInstagramSquare size={35} className='social-icons' />
              <FaPinterestSquare size={35} className='social-icons' />
              </div>
            </div>
            <div className="col-md-3">
              <h4 className='ms-4'>Categories</h4>
              <ul>
                <li className='mb-2 list-unstyled'> 
                <Link to={'/shop'} className=' text-white ' >All Products</Link></li>
                <li className='mb-2 list-unstyled'> <Link to={'/shop'} className=' text-white '>Shop</Link></li>
                <li className='mb-2 list-unstyled'><Link to={'/about'} className=' text-white '>About</Link></li>
                <li className='mb-2 list-unstyled'><Link to={'/'} className=' text-white '>Policy</Link></li>
                <li className='mb-2 list-unstyled'><Link to={'/about'} className=' text-white '>FAQs</Link></li>
              </ul>
              </div>
              
            <div className="col-md-3">
              <h4 className='ms-4'>Quick Links</h4>
              <ul>
                <li className='mb-2 list-unstyled'> 
                <Link to={'/shop'} className=' text-white ' >Summer Sessions</Link></li>
                <li className='mb-2 list-unstyled'> <Link to={'/'} className=' text-white '>Events</Link></li>
                <li className='mb-2 list-unstyled'><Link to={'/'} className=' text-white '>Gallery</Link></li>
                <li className='mb-2 list-unstyled'><Link to={'/'} className=' text-white '>Forums</Link></li>
                <li className='mb-2 list-unstyled'><Link to={'/'} className=' text-white '>Privacy Policy</Link></li>
                <li className='mb-2 list-unstyled'><Link to={'/'} className=' text-white '>Terms of Use</Link></li>
              </ul>

            </div>
            <div className="col-md-3">
              <h4 className=' ms-sm-3'>Recent Tweets</h4>
              <ul>
                <li className='mb-2 list-unstyled d-flex'> <FaTwitter size={60}  /> <p className='ms-3'>Aminur islam <br/>   
                   <a href="#" className=' text-white'>@ShopCart Greetings!  #HTML_Template</a>
                    Grab your item, 50% Big Sale Offer !!</p></li>
                    <li className='mb-2 list-unstyled d-flex'> <FaTwitter size={60} /> <p className='ms-3'>Somrat islam <br/>   
                   <a href="#" className=' text-white'>@ShopCartHey! #HTML_Template</a>
                    Grab your item, 50% Big Sale Offer !!</p></li>
              </ul>
            </div>


          </div>
        </div>
      </footer>
      <section className='text-black pt-4'>   
        <div className="container">
          <div className="row">
            <div className=' d-flex col-md-6 col-sm-12'>

        <i><FaRegCopyright /></i>
        <p className='ms-2 text-black-50'>2023 <a href="#" className=' text-black'>Shop Cart</a> Designed by <span className=' text-black'>XYZ </span> </p>
 </div>

 <div className="col-md-6">
        <ul className=' d-flex justify-content-md-end'>
          <li className=' list-unstyled me-3'><a href="#" className=' text-black-50'>Faculty </a></li>
          <li className=' list-unstyled me-3'><a href="#" className=' text-black-50'>Staff </a></li>
          <li className=' list-unstyled me-3'><a href="#" className=' text-black-50'>Students </a></li>
          <li className=' list-unstyled'><a href="#" className=' text-black-50'>Alumni </a></li>

        </ul>
            </div>

          </div>
        </div>
        </section>

        </>
   )
 }
 
 export default Footer