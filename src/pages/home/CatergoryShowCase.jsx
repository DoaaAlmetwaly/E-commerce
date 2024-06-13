import React, { useState } from 'react'
import shap1 from '../../assets/images/shape-img/icon/01.png';
import shap2 from '../../assets/images/shape-img/icon/02.png'
import { Link } from 'react-router-dom';
import Ratting from './Ratting';

const ProductData = [
{
imgUrl: '01',
cate: 'Shoes',
title: 'Nike Premier X',
author: 'assets/images/course/author/01.jpg',
brand: 'Nike',
price: '$199.00',
id: 1,
},
{
imgUrl: '02',
cate: 'Bags',
title: 'Asthetic Bags',
author: 'assets/images/course/author/02.jpg',
brand: 'D&J Bags',
price: '$199.00',
id: 2,
},
{
imgUrl: '03',
cate: 'Phones',
title: 'iPhone 12',
author: 'brand/apple.png',
brand: 'Apple',
price: '$199.00',
id: 3,
},
{
imgUrl: '04',
cate: 'Bags',
title: 'Hiking Bag 15 Nh100',
author: 'assets/images/course/author/04.jpg',
brand: 'Gucci',
price: '$199.00',
id: 4,
},
{
imgUrl: '05',
cate: 'Shoes',
title: 'Outdoor Sports Shoes',
author: 'assets/images/course/author/05.jpg',
brand: 'Nike',
price: '$199.00',
id: 5,
},
{
imgUrl: '06',
cate: 'Beauty',
title: 'COSRX Snail Mucin',
author: 'assets/images/course/author/06.jpg',
brand: 'Zaara',
price: '$199.00',
id: 6,
},
{
imgUrl: '07',
cate: 'Bags',
title: 'Look Less Chanel Bag ',
author: 'assets/images/course/author/01.jpg',
brand: 'Gucci',
price: '$199.00',
id: 7,
},
{
imgUrl: '08',
cate: 'Shoes',
title: 'Casual Sneakers',
author: 'assets/images/course/author/02.jpg',
brand: 'Bata',
price: '$199.00',
id: 8,
},
]




const CatergoryShowCase = () => {
    const [items,setItems]=useState(ProductData);
    const filterItem =(cateItems)=>{
      const updateData= ProductData.filter((element)=>{
        return element.cate===cateItems;
      })
      setItems(updateData)
    }
  return (
    <section className="categoryshow position-relative py-5">
      <div className="course-shape one position-absolute">
        <img src={shap1} alt="" />
      </div>
      <div className="course-shape two position-absolute">
        <img src={shap2} className="" alt="" />
      </div>
      <div className="container py-5">
        <div className="row py-5">
          <div className="bg-white mt-5 d-md-flex d-sm-block ">
            <h2 className="text-capitalize py-md-3 ms-md-2 text-center">our products</h2>
            <ul className="d-flex  ms-md-auto mt-4  justify-content-center ms-sm-4 list-unstyled text-sm-center">
              <li className="me-4" onClick={() => setItems(ProductData)}>
                All
              </li>
              <li className="me-4" onClick={() => filterItem("Shoes")}>
                Shoes
              </li>
              <li className="me-4" onClick={() => filterItem("Bags")}>
                Bags
              </li>
              <li className="me-4" onClick={() => filterItem("Phones")}>
                Phones
              </li>
              <li className="me-4" onClick={() => filterItem("Beauty")}>
                Beauty
              </li>
            </ul>
          </div>
        
            {
                items.map((prod)=> <div className='col-lg-3 col-md-6 pt-5'  key={prod.id}>
                  <div className="card">

                    <img src={require('../../assets/images/categoryTab/'+ prod.imgUrl+'.jpg')} className='w-100 prod-image' alt="" />
                    <div className='bg-warning d-flex pt-2 px-2'>

                  <h6><a href='#!' className='title text-black'> {prod.cate}</a></h6>  
                    <Ratting/>
                    </div>
                  <div className="prod-title"> <h6 className='pt-3 px-2'> <Link to={`/shop${prod.id}`} className='text-black'> {prod.title}</Link></h6> </div>
                 <hr className="text-black-50 mt-2 mb-2"/>
                  <div className='d-flex justify-content-between mx-2'><Link to={'/'} className='me-5 text-black' >{prod.brand}</Link>
                  <p className=' text-warning price'>{prod.price} </p>
                  </div>
                  </div>


                </div>
            )}
     
        </div>
      </div>
    </section>
  );
}

export default CatergoryShowCase
