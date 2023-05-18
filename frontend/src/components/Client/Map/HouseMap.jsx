import React from 'react';
import Map, { GeolocateControl, Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "./HousesMap.scss";
import SpinnerLoading from "../../SpinnerLoading/SpinnerLoading";

export default function HouseMap({ house = [] }) {

    const lat = house.latitude != '' ? house.latitude : 40.10;
    const long = house.longitude != '' ? house.longitude : -3.73;

    return (
        lat == undefined ? <SpinnerLoading/> :
        <div className="maps_content">
            <Map
                mapboxAccessToken="pk.eyJ1Ijoic2FsbXUxMCIsImEiOiJjbGRqNmZpZ2wxbDM5M3BwaXBmZXNpaGR3In0.6uyL22hZV1D-Z0yiM-hgew"
                initialViewState={{ longitude: long, latitude: lat, zoom: 12.5 }}
                mapStyle="mapbox://styles/mapbox/streets-v11"
            >
                <GeolocateControl positionOptions={{ enableHighAccuracy: true }} trackUserLocation={true}/>

                <Marker key={house.id} latitude={house.latitude} longitude={house.longitude} color={"#aa2840"}/>
            </Map>
        </div>
    );
}