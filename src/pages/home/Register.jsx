import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
   <section className='register py-5'>
    <div className="container py-5">
        <div className="row py-4 ">
            <div className="col-md-8">
                <h6 className=' text-warning text-capitalize '>save the day</h6>
                <p className=' fs-3 text-capitalize text-white'>join on day long free workshop for <span className='fw-bolder'>advance <span className='text-warning'>mastering</span></span> on sales </p>
                <p className='text-capitalize text-white'>limited time offer! hurry up </p>
            </div>
            <div className="col-md-4 registerform">
           

                    <h4 className='text-capitalize text-center py-4 '>register now</h4>
                    <input type="text" className='w-100 my-2'  placeholder='Username'  />
                    <input type="email" className='w-100 my-2' placeholder='Email'  />
                    <input type="number" className='w-100 my-2' placeholder='Phone'   />
                    <div className='py-4 text-center'>

                    <Link to={'/signup'} className = 'btn btn-warning  px-3 py-1'  >Register Now</Link>
                    </div>
        
          
                
            </div>
        </div>
    </div>

   </section>
  )
}

export default Register
