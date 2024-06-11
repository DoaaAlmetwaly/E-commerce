import React, { useState } from "react";
import productData from '../../products.json'
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import SelectedCategory from "../../components/SelectedCatergory";


const Banner = () => {
  const [search,setSearch]=useState("");
  const [filteredProduct,setFilteredProduct]=useState(productData);
 
 
 const handelSearch= (e)=>{
   const searchTerm= e.target.value;
   setSearch(searchTerm);
   const filtered=productData.filter((product)=>product.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
   setFilteredProduct(filtered);
 
 }
  return ( 
    <section className="Banner py-5 ">
      <div className="container pt-md-5">
        <div className="row pt-md-5">
          <div className="col-md-12 pt-md-3">
            <h1 className=" text-center">
              Search Your One From <span className=" text-warning"> Thousand</span> Of <br />Products</h1>
            <form className=" d-flex mt-3  input-group position-relative " >
            <SelectedCategory select= {"all"} />
               <input className=" form-control rounded-5 w-75 py-4" type="text" placeholder="Search Your Product" name="search" id="[search]" value={search} onChange={handelSearch}/>
                <span className=" position-absolute" id="basic-addon1"><CiSearch size={27}/></span> 
            
            </form>
        <p className=" text-center pt-4 text-black-50">We have the largest collection of products</p>
        <ul className=" list-unstyled d-flex flex-wrap">
          {
            search && filteredProduct.map((product,i)=> <li key={i} className="my-2 " >
              <Link to={`/shop/${product.id}`} className=" text-decoration-none text-black-50 ms-2 shadow-lg py-2 rounded-5 px-2">{product.name}</Link>
            </li>)
          }
        </ul>
 


          </div>
        </div>
      </div>

      <div></div>
   
    </section>
  );
};


export default Banner;

