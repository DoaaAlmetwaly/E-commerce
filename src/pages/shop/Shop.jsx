import React, { useState } from 'react';
import { ProductGrid, ProductList } from './ProductGridList';
import PageHeader from '../../components/pageheader/PageHeader';
import { FaList } from "react-icons/fa6";
import { FaListAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Data from '../../products.json'
import Paginstion from './Paginstion';
const Shop = () => {

    const [viewType, setViewType] = useState('grid'); 
    const [Products,setProducts]=useState(Data);
      const handleGridClick = () => {
        setViewType('grid');
      };
    
      const handleListClick = () => {
        setViewType('list');
      };
       const [currentPage,setCurrentPage]=useState(1);
       const productsPerPage=12;
       const indexOfLastProduct=productsPerPage *currentPage;
       const indexOfFirstProduct=indexOfLastProduct - productsPerPage;
       const currentProduct=Products.slice(indexOfFirstProduct,indexOfLastProduct);
       const pagination =(pageNumber)=>{
        setCurrentPage(pageNumber)
       }



      return (
        <>
         <PageHeader title='our shop page' curpage='Shop'/>
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-8 col-sm-12">
      
          <article>
            <div className='d-flex justify-content-between flex-wrap shop-title pt-3 px-3'>
              <p>Showing 01-12 of 139 Results</p>
               <div>
              <Link className={` text-black-50  ${viewType === 'grid'? 'active' : ''}`}
                onClick={handleGridClick}  >
                <i><FaList  size={20} className={`me-2 ${viewType === 'grid'? 'active-icon' : ''} `}/></i>
                </Link>
                <Link className={` text-black-50  ${viewType === 'list' ? 'active' : ''}`}
                onClick={handleListClick}  > 
                <i><FaListAlt size={22} className= {viewType === 'list' ? 'active-icon' : ''} /></i>
                </Link>
               </div>
               {viewType === 'grid' ? (
          <ProductGrid Products={Products} />
        ) : (
          <ProductList Products={Products} />
        )}
            </div>
            <Paginstion
            productsPerPage={productsPerPage}
            totalProducts={Products.length}
            pagination={pagination}
            activePage={currentPage}
            />
          </article>
        </div>
        <div className="col-lg-4">hgdd</div>
    
      </div>
    
    </div>
    </>
      );
    };
    export default Shop