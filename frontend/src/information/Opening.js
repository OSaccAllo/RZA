//info about Opening times and other zoo info


import NavSignedOut from "../components/navbar"
import "./opening.css"

const OpeningTimes = () => {
    return(
        <>
            <div>
                <NavSignedOut/>
            </div>
            <div className="opening_times">
                <div className="heading">
                    <h2>Welcome to Our Establishment!</h2>
                    <p></p>We're thrilled to welcome you to RZA, <br/>where we strive to provide exceptional service and experiences to our valued guests.<br/> To ensure you can make the most of your visit, we've detailed our opening times below.
                </div>
                <div className="hours">
                    <h2>Opening Hours:</h2>
                    <p>Monday to Friday:</p>
                    <p>9:00 AM - 6:00 PM</p>
                    <p>Saturday:</p>
                    <p></p>10:00 AM - 4:00 PM
                    <p></p>Sunday:
                    <p>Closed</p>

                </div>
                <div>
                    <h2>Contact Us</h2>
                    <p>Phone: (555) 123-4567</p>
                    Email: info-RigitZooAdventures@gmail.com
                </div>
            </div>
        </>
    )
}

export default OpeningTimes