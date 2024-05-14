//checking availability page


import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import rhino from "../images/Zoo_bedroom.jpg"
import "./available.css" // Import CSS file
import NavSignedIn from '../components/signedInNav'
import giraffe from "../images/zoobedroom.webp"

function Check() {
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);
    const [availability, setAvailability] = useState({});
    const navigate = useNavigate(); 

    const handleCheckAvailability = async () => {
      try {
        const response = await axios.post('http://localhost:8081/daily_data', {
          checkInDate: checkInDate.toISOString().split('T')[0],
          checkOutDate: checkOutDate.toISOString().split('T')[0]
        });
        setAvailability(response.data);
      } catch (error) {
        console.error('Error checking availability:', error);
      }
    };

    const handleBookRoom = (room) => {
      const checkInDateString = checkInDate.toISOString().split('T')[0];
      const checkOutDateString = checkOutDate.toISOString().split('T')[0];
      
      navigate('/room1', { state: { room, checkInDate: checkInDateString, checkOutDate: checkOutDateString } });
    };
    const handleBookRoom2 = (room) => {
      const checkInDateString = checkInDate.toISOString().split('T')[0];
      const checkOutDateString = checkOutDate.toISOString().split('T')[0];
      
      navigate('/room2', { state: { room, checkInDate: checkInDateString, checkOutDate: checkOutDateString } });
    };

    return (
        <>
        <div>
            <NavSignedIn/>
        </div>
      <div className="container">
        <h1>Room Availability</h1>
        <div className="date-picker">
          <div>
            <label>Check-in Date:</label>
            <DatePicker 
              selected={checkInDate} 
              onChange={date => {
                setCheckInDate(date);
                if (!checkOutDate || date.getTime() >= checkOutDate.getTime()) {
                  setCheckOutDate(new Date(date.getTime() + 24 * 60 * 60 * 1000));
                }
              }} 
              minDate={new Date()}
            />
          </div>
          <div>
            <label>Check-out Date:</label>
            <DatePicker 
              selected={checkOutDate} 
              onChange={date => setCheckOutDate(date)} 
              minDate={checkInDate ? new Date(checkInDate.getTime() + 24 * 60 * 60 * 1000) : new Date()}
            />
          </div>
        </div>
        <button onClick={handleCheckAvailability}>Check Availability</button>
        <div className="room-container">
          {availability.status1 === 'available' && (
            <div className="room">
              <h2>Rhino Room</h2>
              <img src={rhino} alt="Room 1" />
              <p className="desc">Description: This room is perfect for families with the best for both adults and children,<br/> it is advised that it is older children that stay in this room due to being up close to the <br/>dangerous animals that may scare younger children</p>
              <button onClick={() => handleBookRoom('Rhino Room')}>Book the Rhino Room</button>
            </div>
          )}
          {availability.status2 === 'available' && (
            <div className="room">
              <h2>Giraffe Room</h2>
              <img src={giraffe} alt="Room 2" />
              <p className="desc">Description: This room is perfect for families with smaller children. The room offers child targeted entertainment with toys and </p>
              <button onClick={() => handleBookRoom2('Giraffe Room')}>Book Giraffe Room</button>
            </div>
          )}
        </div>
      </div>
      </>
    );
}

export default Check;