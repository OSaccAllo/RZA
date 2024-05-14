//paying page


import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import "../tickets/options.css"
import NavScrollExample from '../components/navbar';

const PaymentHotel = () => {
    
    // Access the state passed from the previous page
    const location = useLocation();
    const { room, checkInDate, checkOutDate } = location.state;
  
    const navigate = useNavigate

    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCVV] = useState('');
      
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
        navigate("/thankyou", {state: {checkInDate, checkOutDate}})
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
            You have booked the {room} from {checkInDate} to {checkOutDate}.
            <span>payment: £100</span>

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

export default PaymentHotel;