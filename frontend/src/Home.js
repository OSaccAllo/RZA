//home page for when signed in


import { Link } from "react-router-dom"
// import lion from "../src/images/Lion.jpg"
import NavSignedIn from "./components/signedInNav"


function Home() {
    return (
      <>
      <div>
        {/* nav when signed in */}
        <NavSignedIn/>
      </div>

      {/* sends user to memberships page */}
      <div className="membership">
        <Link to="/membership">
          <button className="img2_button">Memberships</button>
        </Link>
      </div>

      {/* sends user to the tickets page */}
      <div className="lion">
        <h1 className="welcome">Welcome</h1>
        <Link to="/tickets">
          <button className="img_button">Book Tickets</button>
        </Link>
      </div>
      <div>
        
      </div>
      </>
    );
  }
  
  export default Home;