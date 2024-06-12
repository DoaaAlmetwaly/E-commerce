import React from 'react'
import { FaWindows } from "react-icons/fa";
import { Link } from 'react-router-dom';



 

const HomeCartegory = () => {


  const categoryList = [
    {
    imgUrl: '01',
    imgAlt: 'category rajibraj91 rajibraj',
    iconName: <FaWindows />,
    title: 'DSLR Camera',
    },
    {
    imgUrl: '02',
    imgAlt: 'category rajibraj91 rajibraj',
    iconName: <FaWindows />,
    title: 'Shoes',
    },
    {
    imgUrl: '03',
    imgAlt: 'category rajibraj91 rajibraj',
    iconName: <FaWindows />,
    title: 'Photography',
    },
    {
    imgUrl: '04',
    imgAlt: 'category rajibraj91 rajibraj',
    iconName: <FaWindows />,
    title: 'Formal Dress',
    },
    {
    imgUrl: '05',
    imgAlt: 'category rajibraj91 rajibraj',
    iconName: <FaWindows />,
    title: 'Colorful Bags',
    },
    {
    imgUrl: '06',
    imgAlt: 'category rajibraj91 rajibraj',
    iconName: <FaWindows />,
    title: 'Home Decor',
    },
    ]
  
  return (
  <section className='py-5'>
    <p className= " text-center text-warning text-uppercase pt-5 catPargraph">Choose Any Products</p>
    <h2 className='text-center text-capitalize pb-5'>Buy Everything with Us</h2>
    <div className="container">
      <div className="row">
          {
            categoryList.map((val,i) => (
              <div className='col-md-4  position-relative pb-4 category-inner' key={i}>
                <Link to="/shop" className="link">
                <img src={require('../../assets/images/category/'+ val.imgUrl+'.jpg')} className=' w-100' alt="" />
                <div className=' d-flex position-absolute categoryItems '>
                <div className='bg-warning py-1 px-2 rounded-circle'>

                <FaWindows className='text-black' size={18} />
                </div>
        
                 <Link to="/shop"><h6 className='ms-3 mt-2 text-white'>{val.title}</h6> </Link>
                
                </div>
                
                </Link>
                 </div>
              
            ))
          }
      </div>
  <div className='text-center py-3'>

      <Link to="/shop" class="btn btn-outline-warning text-capitalize text-black px-4 py-2  " tabindex="-1" role="button" aria-disabled="true">get started now</Link>
  </div>

      </div>
  </section>
  )
}

export default HomeCartegory
