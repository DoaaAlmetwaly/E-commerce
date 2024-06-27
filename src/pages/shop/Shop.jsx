import React, { useState } from 'react';
import PageHeader from '../../components/pageheader/PageHeader';
import ProductCard from './ProductCard';
import { FaList } from "react-icons/fa6";
import { FaListAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Data from '../../products.json'
const Shop = () => {
  const [ Gridlist,setGridList]=useState(true);
  const [ Products,setProducts]=useState(Data);

  
  

  return (

    <>
<PageHeader title='our shop page' curpage='Shop'/>
<div className="container py-5">
  <div className="row">
    <div className="col-lg-8 col-sm-12">
  
      <article>
        <div className='d-flex justify-content-between flex-wrap shop-title pt-3 px-3'>
          <p>Showing 01-12 of 139 Results</p>
           <div className={`${ Gridlist ? 'gridactive' : 'listactive'}`}>
            <Link to={"#!"} className='grid text-black-50' onClick= { ()=> setGridList(!Gridlist)}>   
            <i><FaList  size={20} className='me-2'/></i>
            </Link>
            <Link to={"#!"} className='list text-black-50'  onClick= { ()=> setGridList(!Gridlist)}>   
            <i><FaListAlt size={22} /></i>
            </Link>
           </div>
           <div>
            <ProductCard Gridlist={Gridlist} Products={Products} />
           </div>
        </div>
      </article>
    </div>
    <div className="col-lg-4">hgdd</div>

  </div>

</div>
    </>
  )
}

export default Shop

