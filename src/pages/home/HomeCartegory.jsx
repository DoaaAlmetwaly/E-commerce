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
    <h2 className='text-center text-capitalize'>Buy Everything with Us</h2>
    <div className="container">
      <div className="row">
          {
            categoryList.map((val,i) => (
              <div className='col-md-4 ' key={i}>
                <Link to="/shop">
                <img src={require('../../assets/images/category/'+ val.imgUrl+'.jpg')} className=' w-100' alt="" />
                <div className=' d-flex'>
                <FaWindows className='bg-warning  text-black' />
                 <Link to="/shop" className='text-decoration-none'><h6 className='ms-3'>{val.title}</h6> </Link>
                
                </div>
                
                </Link>
                 </div>
              
            ))
          }
      </div>
      </div>
  </section>
  )
}

export default HomeCartegory
