//this is a copy of the BookingDate page for when signed in


import axios from "axios"
import { useState } from 'react';
import { useNavigate } from "react-router-dom"
import "../tickets/booking.css"

import NavSignedIn from "../components/signedInNav"

const Signedincalendar = () => {
    const navigate = useNavigate();
    const [selectedDate, setSelectedDate] = useState('')
    const [children, setChildren] = useState(0); // Initialize with a default value of 0
    const [adults, setAdults] = useState(0); // Initialize with a default value of 0

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

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Post data to backend (you can keep this part if needed)
            await axios.post("http://localhost:8081/tickets", {
                date: selectedDate,
                adults: adults,
                children: children
            });
            // Navigate to the TicketBookingPage and pass state
            navigate("/signed_In_book-tickets", {
                state: { selectedDate, adults, children }
            });
        } catch (error) {
            console.error('Error booking ticket:', error)
        }
    };

    return (
        <>
        <div>
            <NavSignedIn/>
        </div>
        <div className="booking-details-container">
            <h1>Tickets</h1>
            <p className="tickets-info">At least 1 adult must be present</p>
            <p className="tickets-info">A family constitutes as 2 adults and 2 children</p>
        </div>
        <div className="booking-details-container">
            <h2>Prices:</h2>
            <p>Adults: £10 per person</p>
            <p>Children: £5 per person</p>
        </div>
        <form className="booking-details-container" onSubmit={handleSubmit}>
            <label>
                Select Date:
                <input
                    className="date-input"
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                />
            </label>
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
            <button className="booking-button" type="submit">Book Tickets</button>
        </form>
        </>
    );
};

export default Signedincalendar;