//Thankyou for membership page


import { useLocation } from "react-router-dom";
import NavScrollExample from "../components/navbar";

const Thanks = () => {
    
    const location = useLocation();
    const { adults, children } = location.state;
    const adultTotal = adults * 10;
    const childTotal = children * 5;
    
    return(
        <>
           <div>
                <NavScrollExample/>
            </div>
            <div className="booking-details-container">
                <h1>Thank you for your purchase!</h1>
                <p>if you would like to change your booking, please contact customer support.</p>
            </div>
            <div>
                <div className="booking-details-container">
                    <h1>Booking Details</h1>
                    <p></p>
                    <p>Adults: {adults}</p>
                    <p>Children: {children}</p>
                    <p>Total: £{adultTotal + childTotal}</p>
                    {/* Add more content as needed */}

                </div>
            </div> 
        </>
    )
}

export default Thanks