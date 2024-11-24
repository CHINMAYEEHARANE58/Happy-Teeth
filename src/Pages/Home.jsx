import React from 'react'
import homebg from '../assets/homebg.png'
import logo from '../assets/logo dental clinic.png'
import search from '../assets/search.png'
import './Home.css'

export default function Home() {
  return (
    <div id='homeapage'>
        {/* navbar */}
      <nav>
        <div className='nav-content'>
            <img className='logo' src= {logo} alt="" />
            <div className='navigation'>
                <h5>HOME</h5>
                <h5>ABOUT</h5>
                <h5>SERVICES</h5>
                <h5>TESTIMONIALS</h5>
                <h5>RECEIPT</h5>
                <h5>CONTACT US</h5>

                <div>
                    <h5>BOOK AN APPOINTMENT</h5>
                </div>

                <img src={search}/>
            </div>
        </div>
        <div className='blue-line'>

        </div>
      </nav>

      <div className='landing'>
        <img className='homebg' src={homebg}/>
        <div className='text'>
            <div className='text1'>
                <h2 className='title'>Smile Brighter, Live Healthier.</h2>
                <h2 className='moto'>Your trusted partner for creating healthy, beautiful smiles.</h2>
            </div>
            <div className='greenline'>

            </div>
            <div className='descrip'>
                <h2>Don't let a dental problem hold you back, we at <b>Happy Teeth</b> are than just a dentists, we're your partners in oral health. 
Let us show you how much we care!</h2>
                <button><b>MAKE AN APPOINTMENT!</b></button>
            </div>
        </div>
      </div>
    </div>
  )
}
