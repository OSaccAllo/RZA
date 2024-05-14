//page for Options about the dates booked + payment


import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import "./options.css"
import NavScrollExample from '../components/navbar';

const Options = () => {
    
    // Access the state passed from the previous page
    const location = useLocation();
    const { selectedDate, adults, children } = location.state;
    const adultTotal = adults * 10;
    const childTotal = children * 5;
    const navigate = useNavigate();

    const [cardNumber, setCardNumber] = useState('')
    const [expiryDate, setExpiryDate] = useState('')
    const [cvv, setCVV] = useState('')
      
    const handleCardNumberChange = (e) => {
        setCardNumber(e.target.value);
    };
      
    const handleExpiryDateChange = (e) => {
        setExpiryDate(e.target.value);
    };
      
    const handleCVVChange = (e) => {
        setCVV(e.target.value);
    };
      
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/thankyou", {state: {selectedDate, adults, children}})
        // Add your payment processing logic here
        console.log('Payment submitted');
        
    };
    

    return (
        <>
        <div>
            <NavScrollExample/>
        </div>
        <div className="booking-details-container">
            <h1>Booking Details</h1>
            <p>Date: {selectedDate}</p>
            <p>Adults: {adults}</p>
            <p>Children: {children}</p>
            <p>Total: £{adultTotal + childTotal}</p>
            {/* Add more content as needed */}

        </div>
        <div className="payment-container">
        <h2>Payment Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="cardNumber">Card Number:</label>
            <input
              type="text"
              id="cardNumber"
              value={cardNumber}
              onChange={handleCardNumberChange}
              placeholder="Enter card number"
              maxLength="16"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="expiryDate">Expiry Date:</label>
            <input
              type="text"
              id="expiryDate"
              value={expiryDate}
              onChange={handleExpiryDateChange}
              placeholder="MM/YYYY"
              maxLength="7"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cvv">CVV:</label>
            <input
              type="text"
              id="cvv"
              value={cvv}
              onChange={handleCVVChange}
              placeholder="Enter CVV"
              maxLength="3"
              required
            />
          </div>
          <button className="options-button"type="submit">Pay Now</button>
        </form>
      </div>
      </>
    );

}

export default Options;