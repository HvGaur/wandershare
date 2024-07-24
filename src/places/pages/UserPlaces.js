import React from "react";
import PlaceList from "../components/PlaceList";
import {useParams} from "react-router-dom" 
import userEvent from "@testing-library/user-event";

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Mehrangarh',
        description: 'Biggest Fort in India, second largest in the world!!',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Mehrangarh_Fort_sanhita.jpg',
        address: 'Sodagaran Mohalla, Jodhpur, Rajasthan 342001',
        location: {
            lat: '26.2977052',
            lng: '73.0176366'
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
            lat: '26.2977052',
            lng: '73.0176366'
        },
        creator: 'u2'
    }
];

const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);

    return <PlaceList items = {loadedPlaces}/>;
}

export default UserPlaces;