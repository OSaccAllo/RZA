//pages routes


import Login from './Login';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Signup from './Signup';
import Home from './Home';
import Main from './Pages/Main';
import Options from './tickets/Options';
import Attractions from './information/Attractions';
import Animals from './education/Animals';
import Map from './information/Directions';
import Calendar from './tickets/BookingDate';
import FacilitiesPage from './information/Facilities';
import Thankyou from './tickets/thankyou';
import Thanks from './membership/thanks';
import Membership from './membership/membership';
import Payment from './membership/MembershipPayment';
import Signout from './Pages/sign-out';
import SignedInOptions from './signed_in/Signed_in_Options';
import SignedInThankyou from './signed_in/Signed_in_thankyou';
import Signedincalendar from './signed_in/Signed_in_BookingDate';
import OpeningTimes from './information/Opening';
import Programme from './education/Programmes';
import Check from './hotel/availabilityCheck';
import Room1 from './hotel/room1';
import Room2 from './hotel/room2';
import Cookie from './components/policies/cookie_polocy';
import Protection from './education/animal_protection';
import PaymentHotel from './hotel/payment';
import MyAccount from './signed_in/my-account';
import Cod from './components/policies/CodeOfConduct';
import PP from './components/policies/PrivacyPolicy';

// app
function App() {
  return (
    <>
    
    <BrowserRouter>
      <Routes>
        {/* Login page */}
        <Route path='/Login' element={<Login/>}></Route>
        {/* Sign Up page */}
        <Route path='/Signup' element={<Signup/>}></Route>
        {/* home page for when the user logs in */}
        <Route path='/home' element={<Home/>}></Route>
        {/* home page when just going onto web app */}
        <Route path='/' element={<Main/>}></Route>
        {/* home page */}
        {/* ticket booking page */}
        <Route path='/book-tickets' element= {<Options/>}></Route>
        {/* signed in booking page */}
        <Route path='/signed_in_book-tickets' element= {<SignedInOptions/>}></Route>
        {/* attractions page */}
        <Route path='/attractions' element= {<Attractions/>}></Route>
        {/* animals page */}
        <Route path='/animals' element= {<Animals/>}></Route>
        {/* directions page */}
        <Route path='/directions' element= {<Map/>}></Route>
        {/* tickets page */}
        <Route path='/tickets' element= {<Calendar/>}></Route>
        {/* signed in tickets page */}
        <Route path='/signed_in_tickets' element= {<Signedincalendar/>}></Route>
        {/* facilities page */}
        <Route path='/facilities' element= {<FacilitiesPage/>}></Route>
        {/* thankyou page for ticket */}
        <Route path='/thankyou' element= {<Thankyou/>}></Route>
        {/* signed in thankyou page for tickets */}
        <Route path='/signed_in_thankyou' element= {<SignedInThankyou/>}></Route>
        {/* thanks page for membership */}
        <Route path='/thanks' element= {<Thanks/>}></Route>
        {/* membership page */}
        <Route path='/membership' element= {<Membership/>}></Route>
        {/* payment page */}
        <Route path='/payment' element= {<Payment/>}></Route>
        {/* page to sign out */}
        <Route path='/sign-out' element= {<Signout/>}></Route>

        <Route path='/About-us' element= {<OpeningTimes/>}></Route>
        <Route path='/programme' element= {<Programme/>}></Route>
        <Route path='/check' element= {<Check/>}></Route>
        <Route path='/room1' element= {<Room1/>}></Route>
        <Route path='/room2' element= {<Room2/>}></Route>
        <Route path='/cookie' element= {<Cookie/>}></Route>
        <Route path='/protection' element= {<Protection/>}></Route>
        <Route path='/paymentHotel' element= {<PaymentHotel/>}></Route>
        <Route path='/Account' element= {<MyAccount/>}></Route>
        <Route path='/cod' element= {<Cod/>}></Route>
        <Route path='/pp' element= {<PP/>}></Route>

      </Routes>
    </BrowserRouter>
    </>
  );
}


export default App;
