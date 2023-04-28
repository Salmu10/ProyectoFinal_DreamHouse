import React, { useState } from 'react';
import Map, { GeolocateControl, Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import secrets from '../../../secrets';
import { useNavigate } from "react-router-dom";

export default function StationsMap({ houses = [], setShow }) {

    const [markerIndex, setMarkerIndex] = useState(null);
    const navigate = useNavigate();

    const redirects = {
        details: (id) => navigate('/house/' + id)
    }

    return (
        <div className="maps_content">
            <Map
                mapboxAccessToken="pk.eyJ1Ijoic2FsbXUxMCIsImEiOiJjbGRqNmZpZ2wxbDM5M3BwaXBmZXNpaGR3In0.6uyL22hZV1D-Z0yiM-hgew"
                initialViewState={{ longitude: -3.7360987714758553, latitude: 40.10684911744036, zoom: 4.5 }}
                mapStyle="mapbox://styles/mapbox/streets-v11"
            >
                <GeolocateControl positionOptions={{ enableHighAccuracy: true }} trackUserLocation={true}/>

                {houses.map((house, id) => {
                    return <Marker key={id} latitude={house.latitude} longitude={house.longitude} color={"#ff385c"}/>
                })}

                {houses.map((house, id) => (
                    <Marker key={id} latitude={house.latitude} longitude={house.longitude} color={"#ff385c"}>
                        <button className="marker_button" onClick={() => { setMarkerIndex(id); setShow(houses[id].id)}}>
                            <div style={{ backgroundColor: 'transparent', width: 25, height: 50, borderRadius: '50%' }}/>
                        </button>
                    </Marker>                
                ))}

                {markerIndex !== null && (
                    <Popup latitude={houses[markerIndex].latitude} longitude={houses[markerIndex].longitude} closeButton={true} closeOnClick={false} 
                        onClose={() => { setMarkerIndex(null); setShow(null) }} anchor="top">
                        <div className="popup" onClick={() => { redirects.details(houses[markerIndex].id) }}>
                            <div className='popup_name'>
                                <h5>{houses[markerIndex].location}, {houses[markerIndex].country}</h5>
                            </div>
                            <div className='popup_image'>
                                <img src={`${secrets.URL_BACKEND}${houses[markerIndex].image}`}/>
                                {/* <img src="/assets/estacion.jpeg" alt='img'/>  */}
                            </div>
                        </div>
                    </Popup>
                )}
            </Map>
        </div>
    );
}