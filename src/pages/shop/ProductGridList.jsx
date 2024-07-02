// ProductGridList.js
import React from 'react';
import { Link } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import Ratting from "../home/Ratting";

const ProductGrid = ({ Products }) => (
  <div className="row">
   {Products.map((prod,i )=> (
      <div key={i} className="col-lg-4 col-md-6 col-sm-12 mb-3">
      <div className='card mt-3' >
            <div className='image-container position-relative overflow-hidden ' >
              <img src={prod.img} className='w-100 h-auto'  alt="" />
              <div className='overlay' >
                <Link to={`/shop/${prod.id}`} className=" text-white m-2 ">
                  <i className="icon-font ">
                    <IoEyeOutline size={15} />
                  </i>
                </Link>
                <Link to={"!#"} className=" text-white m-2">
                  
                  <i className="icon-font">
                    <FaHeart size={15} />
                  </i>
                </Link>
                <Link to={"/cart-page"} className=" text-white m-2">
                  
                  <i className="icon-font">
                    <FaShoppingCart size={15} />
                  </i>
                </Link>
              </div>
            </div>
            <div>
              <h5 className='text-center pt-3' >
                <Link
                  to={`/shop/${prod.id}`}
                  className="text-black product-title"
                >
               
                  {prod.name}
                </Link>
              </h5>
              <div className=" text-center text-warning">
                <Ratting />
              </div>
              <h6 className=" text-center py-2 fw-bold"> ${prod.price}</h6>
            </div>
          </div>

         
        </div>
        
      ))}
    </div>
  );

const ProductList = ({ Products }) => (
  <div className="row">
   {Products.map((prod,i )=> (
      <div key={i} className="col-12 mb-3">
      <div className='mt-3 d-flex flex-wrap ' >
            <div className='image-container position-relative overflow-hidden' >
              <img src={prod.img}  alt="" style={{width:250, height:250}}  />
              <div className='overlay' style={{width:250, height:250}} >

                <Link to={`/shop/${prod.id}`} className=" text-white m-2 ">
                  <i className="icon-font ">
                    <IoEyeOutline size={15} />
                  </i>
                </Link>
                <Link to={"!#"} className=" text-white m-2">
                  
                  <i className="icon-font">
                    <FaHeart size={15} />
                  </i>
                </Link>
                <Link to={"/cart-page"} className=" text-white m-2">
                  
                  <i className="icon-font">
                    <FaShoppingCart size={15} />
                  </i>
                </Link>
              </div>
            </div>
            <div className='pt-5 mt-5 ms-3'>
              
              <h5 className='text-center ' >
                <Link
                  to={`/shop/${prod.id}`}
                  className="text-black product-title "
                >
               
                  {prod.name}
                </Link>
              </h5>
              <div className="text-warning">
                <Ratting />
              </div>
              <h6 className="py-2 fw-bold ms-1"> ${prod.price}</h6>
            </div>
          </div>

         
        </div>
        
      ))}
    </div>
  );
export { ProductGrid, ProductList };
