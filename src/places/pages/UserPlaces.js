import React from "react";
import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Mehrangarh',
        description: 'Biggest Fort in India, second largest in the world!!',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Mehrangarh_Fort_sanhita.jpg',
        address: 'Sodagaran Mohalla, Jodhpur, Rajasthan 342001',
        location: {
            lat: '26.2978267',
            lng: '73.0154383'
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Mehrangarh 2',
        description: 'Biggest Fort in India, second largest in the world!!',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Jodhpur_mehrangarh_fort.jpg/1600px-Jodhpur_mehrangarh_fort.jpg',
        address: 'Sodagaran Mohalla, Jodhpur, Rajasthan 342001',
        location: {
            lat: '26.2978267',
            lng: '73.0154383'
        },
        creator: 'u2'
    }
];

const UserPlaces = () => {
    return <PlaceList items = {DUMMY_PLACES}/>;
}

export default UserPlaces;