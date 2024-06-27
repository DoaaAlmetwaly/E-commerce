

import React from 'react'
import { Link } from 'react-router-dom'
import appstore from '../../assets/images/app/01.jpg'
import googleplay from '../../assets/images/app/02.jpg'

const AppSection = () => {
  return (
  <section className='py-5'>
    <div className="container pt-5">
        <div className="row pt-5">
            <div className="col-md-12 text-center">
                <Link to={'/signup'} className='btn btn-outline-warning text-black text-capitalize my-4'> 
                sign up for free
                </Link>
                <h1 className=' text-capitalize'>shop anytime, anywhere</h1>
                <p className=' text-capitalize text-black-50'>take shop on your any device with our app & learn all time what you <br/> want. just download & install & start to learn</p>
                <div className=' d-md-flex justify-content-center apps'>
                    <img src={appstore} className='me-md-5 mb-2' alt="" />
                    <img src={googleplay} className='mb-2' alt="" />

                </div>
            </div>
        </div>
    </div>
  </section>
  )
}

export default AppSection