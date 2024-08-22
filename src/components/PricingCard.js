import React from 'react'
import { Link } from 'react-router-dom'

export default function PricingCard() {
  return (
    <>
    <div className='pricing'>
        <h4 className='skill-heading'>Services</h4>
        <div className='card-container'>
        <div className='card'>
                <h3>-Documantion of Project-</h3>
                <span className='bar'></span>
                <p className='btc'>₹ 300</p>
                <p>- 7 days -</p>
                <p>- 40 pages -</p>
                <p>- Featured -</p>
                <p>- Terms & Condition Apply -</p>
                <Link to='/contact' className='btn'>
                    CONTACT NOW
                </Link>
            </div>
            
            <div className='card'>
                <h3>-Web Designing-</h3>
                <span className='bar'></span>
                <p className='btc'>₹ 500</p>
                <p>- 1 Week -</p>
                <p>- 3 pages -</p>
                <p>- Featured -</p>
                <p>- Responsive Design -</p>
                <Link to='/contact' className='btn'>
                    CONTACT NOW
                </Link>
            </div>
           
            <div className='card'>
                <h3>-Web Development-</h3>
                <span className='bar'></span>
                <p className='btc'>₹ 5000</p>
                <p>- 2 Month -</p>
                <p>- 5 pages -</p>
                <p>- Featured -</p>
                <p>- Responsive & Functional Website -</p>
                <Link to='/contact' className='btn'>
                    CONTACT NOW
                </Link>
            </div>

            
        </div>
    </div>
    </>
  )
}
