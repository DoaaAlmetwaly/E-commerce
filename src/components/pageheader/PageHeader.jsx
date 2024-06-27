import React from 'react';
import { Link } from 'react-router-dom';

const PageHeader = ({title,curpage}) => {
  return (
    <section className='py-5 header'>

<div className="container py-5">
    <div className="row py-5">
        <div className="col-md-12 py-5">
            <h2 className=' text-center pt-5'>{title}</h2>
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb justify-content-center pt-3">
      <li className="breadcrumb-item"><Link to={'/'} className=' text-black'>Home</Link></li>
      <li className="breadcrumb-item active text-black-50 " aria-current="page">{curpage}</li>
     
    </ol>
  </nav>
</div>

        </div>
    </div>
    </section>

  )
}

export default PageHeader