import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
   <section className='register pt-lg-5 py-md-2'>
    <div className="container pt-lg-5 py-md-2">
        <div className="row  py-md-2 ">
            <div className="col-lg-8 col-sm-12 pt-md-5">
                <h6 className=' text-warning text-capitalize pt-5 fs-5 '>save the day</h6>
                <p className=' fs-1 text-capitalize text-white'>join on day long free workshop for <br/> <span className='fw-bolder'>advance <span className='text-warning'>mastering</span></span> on sales </p>
                <p className='text-capitalize text-white pb-4'>limited time offer! hurry up </p>
            </div>
            <div className="col-lg-4 registerform p-5 col-sm-12">
           

                    <h3 className='text-capitalize text-center py-4 '>register now</h3>
                    <input type="text" className='w-100 my-2 p-2'  placeholder='Username'  />
                    <input type="email" className='w-100 my-2 p-2' placeholder='Email'  />
                    <input type="number" className='w-100 my-2 p-2' placeholder='Phone'   />
                    <div className='py-4 text-center'>

                    <Link to={'/signup'} className = 'btn btn-warning  px-4 py-2 fw-bold'  >Register Now</Link>
                    </div>
        
          
                
            </div>
        </div>
    </div>

   </section>
  )
}

export default Register
