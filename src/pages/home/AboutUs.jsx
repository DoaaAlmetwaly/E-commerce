import React from 'react';
import { FiUsers } from "react-icons/fi";
import { FaUserGraduate } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
import personImg from '../../assets/images/instructor/01.png'

const countList = [
    {
    iconName: <FiUsers size={40}/>,
    count: '12600',
    text: 'Marchant Enrolled',
    },
    {
    iconName: <FaUserGraduate size={40}/>,
    count: '30',
    text: 'Certified Courses',
    },
    {
    iconName: <IoNotifications  size={40} />,
    count: '100',
    text: 'Rewards and GitCards',
    },
    ]
const AboutUs = () => {
  return (
   <section className='about pt-5'>
    <div className="container pt-5">
        <div className="row pt-5">
            <div className="col-md-4 pt-5">
                {
                    countList.map((val,i) =>(
                        <div key={i} className='count pt-4 d-flex' >
                          <div className='count-icon me-5'>
                            <i>{val.iconName}</i>
                          </div>
                            <div>
                            <CountUp end={val.count} className='text-white fs-1' />
                            <span className='text-white fs-1 ms-2'>+</span>
                            <p className='text-white'>{val.text}</p>
                            </div>
                        </div>

                    ))
                }

            </div>
           <div className='col-md-4 pt-5'>
            <img src={personImg} className='person' alt="" />
           </div>


            <div className="col-md-4 d-flex flex-column align-items-start pt-5 left-side">
              <h6 className=' text-black-50 pt-5'>Why Choose US </h6>
              <h2 className='text-end'>Become a Marchant</h2>
              <p className='mt-2'>Take courses on your any device with our app & learn all about business what you want. Just download & install & start to learn</p>
              <Link to={'/signup'} className='btn btn-light px-4 fw-semibold mx-3 mb-3 apply-btn'> Apply Now</Link>
            </div>
        </div>
    </div>
   </section>
  )
}

export default AboutUs



