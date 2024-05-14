//membership page


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NavSignedIn from "../components/signedInNav";

const Membership = () => {
    
    const [children, setChildren] = useState(0); // Initialize with a default value of 0
    const [adults, setAdults] = useState(0); // Initialize with a default value of 0
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Post data to backend (you can keep this part if needed)
            await axios.post("http://localhost:8081/memberships", {
                adults: adults,
                children: children
            });
            // Navigate to the TicketBookingPage and pass state
            navigate("/payment", {
                state: { adults, children }
            });
        } catch (error) {
            console.error('Error booking ticket:', error)
        }
    };

    const handleAdultsChange = (e) => {
        const value = parseInt(e.target.value);
        if (!isNaN(value)) {
            setAdults(value);
        } else {
            setAdults(0);
        }
    };

    const handleChildrenChange = (e) => {
        const value = parseInt(e.target.value);
        if (!isNaN(value)) {
            setChildren(value);
        } else {
            setChildren(0);
        }
    };

    
    return(
        <>
            <div>
                <NavSignedIn/>
            </div>
            <div className="booking-details-container">
                <h1>Memberships</h1>
                <p className="tickets-info">Your contribution helps towards making a safer environment to animals</p>
                <p className="tickets-info">Your donations make our research possible</p>
                <p className="tickets-info">A family membership constitutes 2 adults and 2 children</p>
            </div>
            <div className="booking-details-container">
                <h2>Prices:</h2>
                <p>Adults: £100 per person</p>
                <p>Children: £50 per person</p>
            </div>
            <form className="booking-details-container" onSubmit={handleSubmit}>
                <label>
                    Number of Adults:
                    <input
                        className="quantity-input"
                        type="number"
                        value={adults}
                        onChange={handleAdultsChange}
                    />
                </label>
                <label>
                    Number of Children:
                    <input
                        className="quantity-input"
                        type="number"
                        value={children}
                        onChange={handleChildrenChange}
                    />
                </label>
                <button className="booking-button" type="submit">Submit Membership</button>
            </form>
        </>
    )
}

export default Membership