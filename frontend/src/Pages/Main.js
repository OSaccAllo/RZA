//page when logged out


import React from 'react';
import tiger from "../images/tiger.mp4"
import './Main.css'
import { Link } from 'react-router-dom';
import NavSignedOut from '../components/navbar';
import CookieConsent from "react-cookie-consent";
import Footer from '../components/footer';

function Main() {
    return(
        <>
      <div>
        <NavSignedOut/>
      </div>
      <div>

      </div>
      <div className='lion2'>
        <video alt="Lion" className='lion2' loop autoPlay muted>
          <source src={tiger} type="video/mp4"/>
        </video>
        <Link to="/tickets">
          <button className="img_button">Book Tickets</button>
        </Link>
      </div>
      {/* takes user to the tickets page */}
      <CookieConsent debug={true} >This site uses cookies.             {'       '}<Link to='/cookie' className='cookie'>Cookies info</Link></CookieConsent>
      <div className='footer'>
        <Footer/>
      </div>
      </>
    );
}
export default Main;