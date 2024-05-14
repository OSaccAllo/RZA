//Giraffe room


import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import NavSignedIn from '../components/signedInNav';

function Room2() {
  const location = useLocation();
  const { room, checkInDate, checkOutDate } = location.state;
  const navigate = useNavigate()

  const updateReservation = async () => {
    try {
      const response = await axios.post('http://localhost:8081/status2', {
        checkInDate: checkInDate,
        checkOutDate: checkOutDate,
      });
      navigate("/paymentHotel", { state: { room, checkInDate, checkOutDate }})
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div>
        <NavSignedIn />
      </div>
      <div>
        <h1>{room}</h1>
        <p>
          You have booked the {room} from {checkInDate} to {checkOutDate}.
        </p>
        <button onClick={updateReservation}>Update Reservation</button>
        {/* Other room details */}
      </div>
    </>
  );
}

export default Room2;