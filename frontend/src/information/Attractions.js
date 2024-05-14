//Info about attractions


import NavScrollExample from "../components/navbar"
import "./attractions.css"
import Lion from "../images/Lion.jpg"

function Attractions() {
    return(
        <>
            <div>
                {/* Navbar */}
                <NavScrollExample/>
            </div>
            {/* attractions text */}
            <div className="attractions-container">
                <div className="attraction-category">
                    <h1>Welcome to Rigit Zoo Adventures</h1>
                </div>
                <div className="attraction">
                    <div className="attraction-content">
                        <img className="attraction-image" src={Lion} alt="Lion"></img>
                        <div className="attraction-text">
                            <h2>Safari Snacks:</h2>
                            <p>Refuel and recharge at our Safari Snacks concession stands, <br/>offering a variety of delicious snacks, refreshments, <br/> and light meals for hungry adventurers.</p>
                        </div>
                    </div>
                    <br/>
                    <div className="attraction-content">
                        <img className="attraction-image" src={Lion} alt="Lion"></img>
                        <div className="attraction-text">
                            <h2>Savannah Safari:</h2>
                            <p></p> Take a journey through the African savannah and encounter majestic lions, <br/>graceful giraffes, and playful zebras in their natural habitat.
                        </div>
                    </div>
                    <br/>
                    <div className="attraction-content">
                        <img className="attraction-image" src={Lion} alt="Lion"></img>
                        <div className="attraction-text">
                            <h2>Rainforest Discovery:</h2>
                            <p></p> Immerse yourself in the lush rainforest environment and marvel at <br/>colorful birds, exotic reptiles, and fascinating insects<br/> from tropical regions around the world.
                        </div>
                    </div>
                    <br/>
                    <div className="attraction-content">
                        <img className="attraction-image" src={Lion} alt="Lion"></img>
                        <div className="attraction-text">
                        <h2>Arctic Adventure: </h2>
                        <p></p> Experience the beauty and wonder of the Arctic <br/>as you watch polar bears swim, seals frolic, <br/>and penguins waddle in their icy habitat.
                        </div>
                    </div>
                    
                </div>
                <div className="attraction-category">
                    <h1>Interactive Attractions:</h1>
                </div>
                <div className="attraction">
                    <div className="attraction-content">
                        <img className="attraction-image" src={Lion} alt="Lion"></img>
                        <div className="attraction-text">
                        <h2>Petting Zoo:</h2>
                        <p></p> Get up close and personal with friendly farm animals such as goats, sheep, and rabbits in our petting zoo. Don't forget to bring some feed and enjoy the hands-on experience!
                        </div>
                    </div>
                    <br/>
                    <div className="attraction-content">
                        <img className="attraction-image" src={Lion} alt="Lion"></img>
                        <div className="attraction-text">
                        <h2>Bird Aviary:</h2>
                        <p></p>Step into our bird aviary and interact with a variety of feathered friends, from parrots and cockatoos to colorful toucans and exotic songbirds.
                    </div>
                    </div>
                </div>
                <div className="attraction-category">
                    <h1>Adventure Attractions:</h1>
                </div>
                <div className="attraction-content">
                        <img className="attraction-image" src={Lion} alt="Lion"></img>
                        <div className="attraction-text">
                            <h2>Canopy Zipline Tour:</h2>
                            <p></p>Soar above the treetops on our thrilling zipline tour and enjoy breathtaking views of the zoo from a bird's-eye perspective.
                        </div>
                    </div>
                <br/>
                <div className="attraction-content">
                        <img className="attraction-image" src={Lion} alt="Lion"></img>
                        <div className="attraction-text">
                            <h2>Explorer Tram Ride:</h2>
                            <p></p>Hop aboard our explorer tram and embark on a guided tour of the zoo's most iconic exhibits, from the African savannah to the depths of the rainforest.
                        
                        </div>
                </div>
                
                    
                <div className="attraction-category">
                    <h1>Family Fun:</h1>
                </div>
                <div className="attraction-content">
                        <img className="attraction-image" src={Lion} alt="Lion"></img>
                        <div className="attraction-text">
                            <h2>Playground and Picnic Area:</h2>
                            <p></p>Let the little ones burn off some energy at our playground while parents relax in the nearby picnic area. It's the perfect spot for a family day out in nature!
                        
                        </div>
                </div>
                <br/>
                <div className="attraction-content">
                        <img className="attraction-image" src={Lion} alt="Lion"></img>
                        <div className="attraction-text">
                            <h2>Safari Snacks: </h2>
                            <p></p> Refuel and recharge at our Safari Snacks concession stands, offering a variety of delicious snacks, refreshments, and light meals for hungry adventurers.
                
                        
                        </div>
                </div>
                <div className="attraction-category">
                    <h1>Gift Shop:</h1>
                </div>
                <div className="attraction-content">
                        <img className="attraction-image" src={Lion} alt="Lion"></img>
                        <div className="attraction-text">
                            <h2>Wilderness Wonders Gift Shop:</h2>
                            <p></p>Don't forget to stop by our gift shop on your way out and browse a wide selection of souvenirs, plush toys, apparel, and eco-friendly gifts to commemorate your visit to Wilderness Zoo.

                
                        
                        </div>
                </div>

                    
            </div>
        </>
    )
}

export default Attractions