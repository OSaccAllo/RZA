//info about Directions


import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import "../images/location.png"
import "./directions.css"
import NavSignedOut from '../components/navbar';

const Map = () => {

    //for the icon
    const Zoo = L.icon({
        iconUrl: require('../images/location.png'),
        iconSize: [40, 47],
        iconAnchor: [22, 40],
        popupAnchor: [-3, -76]
    });
    //stating the position when the user logs onto the page
    const initialPosition = [54.7024, 3.2765];

    //how zoomed in the map is initially
    const initialZoomLevel = 5;
    return(
        <>
        <div>
            {/* The Navbar */}
            <NavSignedOut/>
        </div>
        {/* The Map */}
        <MapContainer center={initialPosition} zoom={initialZoomLevel} style={{ height: '400px' }}>
            <TileLayer
                // where the map is being taken from
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* marker's position on the map */}
            <Marker position={[53.505, -0.09]}  icon={Zoo}>
                <Popup>
                {/* popup when the marker is pressed */}
                A pretty popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
        {/* directions text */}
        <div className='className="facilities-container"'>
            <div >
                <h1>Directions</h1>
            </div>
            <div >
                <h2>By Car:</h2>
                <p className='direction'></p>SatNav PostCode: DN37 0HX
                <p></p>Grimsby
                <p></p>Cheapside
            </div>
            <div >
                <h2 >By Bus:</h2>
                <h3>Nearest Bus stops:</h3>
                <p></p>Cheapside Bus stop
                <p></p>53 Tetney Lane Bus stop
                <p></p>Kirkgate Bus stop
            </div>
            <div >
                <h2>By Train:</h2>
                <h3>Nearest train station</h3>
                <p></p>Grimsby train station.
            </div>
        </div>
        </>
    )

}

export default Map

