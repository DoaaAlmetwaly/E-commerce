import React from 'react'
import { Link } from 'react-router-dom'

const clientsList = [
    {
    imgUrl: 'avater',
    imgAlt: 'education thumb rajibraj91 rajibraj',
    text: 'Join with Us',
    },
    {
    imgUrl: 'avater',
    imgAlt: 'education thumb rajibraj91 rajibraj',
    text: 'Join with Us',
    },
    {
    imgUrl: 'avater',
    imgAlt: 'education thumb rajibraj91 rajibraj',
    text: 'Join with Us',
    },
    {
    imgUrl: 'avater',
    imgAlt: 'education thumb rajibraj91 rajibraj',
    text: 'Join with Us',
    },
    {
    imgUrl: 'avater',
    imgAlt: 'education thumb rajibraj91 rajibraj',
    text: 'Join with Us',
    },
    {
    imgUrl: 'avater',
    imgAlt: 'education thumb rajibraj91 rajibraj',
    text: 'Join with Us',
    },
    {
    imgUrl: 'avater',
    imgAlt: 'education thumb rajibraj91 rajibraj',
    text: 'Join with Us',
    },
    ]
const Clients = () => {
  return (
   <section className='py-5'>
    <div className="container py-5">
        <div className="row py-5">
            <div className="col-md-12">
                <h1 className='text-center'>
                More Then 60,000 Customers
                </h1>
                <p className='text-center text-black-50'>Buy products on your any device with our app & enjoy your time what <br /> you want. Just download & install & start to shopping</p>
                
                    <div className="clients">
                    {
                        clientsList.map((val,i) => (
                        <div key={i} className='client-list'>
                            <Link to={"/signup"} className="client-content text-black-50 px-3 py-2">
                            <span>{val.text}</span>
                            </Link>
                            <div className='client-thumb'>

                             <img src={require('../../assets/images/clients/'+ val.imgUrl+'.jpg')}  alt="" />
                            </div>
                        </div>
                        ))
                    }
                    </div>

      
            </div>
        </div>
    </div>
   </section>
  )
}

export default Clients