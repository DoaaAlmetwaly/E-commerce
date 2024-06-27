import React from 'react'

const ProductCard = ({Products ,GridList}) => {

    return (

<div className={`row ${GridList ? 'grid' : 'list'}`}> 

{
    Products.map((prod,i)=>(
            <div key={i} className='col-lg-4 col-md-6 col-sm-12'>
                <div className="card mb-5">
<img src={prod.img} alt="" />
                </div>

                 </div>
     ) )



}
    </div>
  )
}

export default ProductCard
