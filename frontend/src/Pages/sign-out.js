//sign out page


import { useNavigate } from "react-router-dom"
import NavSignedIn from "../components/signedInNav"



const Signout = () => {
    
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/")
    }

    return(
        <>
            <div>
                <NavSignedIn/>
            </div>
            <div>
                <div className="payment-container">
                    <h2>Sign Out</h2>
                    <form onSubmit={handleSubmit}>
                        <button className="options-button"type="submit">Sign out</button>
                    </form>
                </div>
            </div>
        </>
    )
};

export default Signout