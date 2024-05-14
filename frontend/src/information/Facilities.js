//info about facilities


import React from 'react';
import './facilities.css';
import lion2 from "../images/lion2.jpg"
import NavSignedOut from '../components/navbar';
import exhibit from "../images/exhibit.jpg"
import Playground from "../images/Playground.jpg"
import Trail from "../images/trail.jpg"
import Visitor from "../images/Visitor_centre.jpg"
import parking from "../images/parking.jpg"
import picnic from "../images/picnic.jpg"
import gift_shop from "../images/giftshop.jpg"
import dining from "../images/restaraunt.jpg"
import toilet from "../images/restrooms.jpg"
import access from "../images/access.jpg"
import first_aid from "../images/first_aid.jpg"

const FacilitiesPage = () => {
    return (
        <>
        <div>
            <NavSignedOut/>
        </div>
        <div className="facilities-container">
            <h2>Facilities at Riget Zoo Adventures</h2>
            <ul>
                <li>
                    <h3>Visitor Center</h3>
                    <p>Start your adventure at our visitor center, where you can pick up maps, <br/>purchase tickets, and learn about the day's events and animal feedings.</p>
                    <img src={Visitor} className='lion_img' alt='lion'></img>
                </li>
                <li>
                    <h3>Animal Exhibits</h3>
                    <p>Explore our diverse range of animal exhibits, <br/>carefully designed to mimic natural habitats <br/>and provide enriching environments for our residents.</p>
                    <img src={lion2} className='lion_img' alt='lion'></img>
                </li>
                <li>
                    <h3>Education Center</h3>
                    <p>Dive deeper into the world of wildlife conservation at our education center, <br/>featuring interactive exhibits, informative displays, <br/>and engaging presentations led by our expert educators.</p>
                    <img src={exhibit} className='lion_img' alt='lion'></img>
                </li>
                <li>
                    <h3>Discovery Trail</h3>
                    <p>Wander along our discovery trail, <br/>winding through lush landscapes and offering glimpses of various animal habitats, <br/>from tropical rainforests to arid deserts.</p>
                    <img src={Trail} className='lion_img' alt='lion'></img>
                </li>
                <li>
                    <h3>Playgrounds</h3>
                    <p>Let your little ones burn off energy at our playgrounds, <br/>equipped with slides, swings, and climbing structures inspired by the animal kingdom.</p>
                    <img src={Playground} className='lion_img' alt='lion'></img>
                </li>
                <li>
                    <h3>Picnic Areas</h3>
                    <p>Take a break and enjoy a scenic picnic at one of our designated picnic areas,<br/> surrounded by nature and the sounds of wildlife.</p>
                    <img src={picnic} className='lion_img' alt='lion'></img>
                </li>
                <li>
                    <h3>Gift Shop</h3>
                    <p>Commemorate your visit with a souvenir from our gift shop, <br/>offering a variety of merchandise including plush toys,<br/> apparel, books, and eco-friendly gifts.</p>
                    <img src={gift_shop} className='lion_img' alt='lion'></img>
                </li>
                <li>
                    <h3>Dining Facilities</h3>
                    <p>Refuel with delicious bites at our onsite cafes and snack bars,<br/> serving a selection of refreshments, snacks,<br/> and light meals to satisfy hungry adventurers.</p>
                    <img src={dining} className='lion_img' alt='lion'></img>
                </li>
                <li>
                    <h3>Restrooms</h3>
                    <p>Conveniently located restrooms are scattered throughout the zoo grounds for your comfort and convenience.</p>
                    <img src={toilet} className='lion_img' alt='lion'></img>
                </li>
                <li>
                    <h3>First Aid Stations</h3>
                    <p>Your safety is our priority, <br/>and our first aid stations are manned by trained staff members <br/>ready to assist with any medical needs that may arise during your visit.</p>
                    <img src={first_aid} className='lion_img' alt='lion'></img>
                </li>
                <li>
                    <h3>Wheelchair Access</h3>
                    <p>Riget Zoo Adventures is accessible to all visitors, with wheelchair ramps and accessible pathways <br/>ensuring that everyone can enjoy a seamless and inclusive experience.</p>
                    <img src={access} className='lion_img' alt='lion'></img>
                </li>
                <li>
                    <h3>Parking</h3>
                    <p>Ample parking facilities are available onsite, with designated parking areas for cars, buses, and bicycles.</p>
                    <img src={parking} className='lion_img' alt='lion'></img>
                </li>
            </ul>
        </div>
        </>
    );
}

export default FacilitiesPage;