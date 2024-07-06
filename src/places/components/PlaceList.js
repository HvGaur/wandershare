import React from "react";

import "./PlaceList.css";
import Card from "../../shared/components/UIElements/Card";
import PlaceItem from "./PlaceItem";

const PlaceList = props => {
    if(props.item.length === 0){
        return <div className="place-list center">
            <Card>
                <h2>No Places Found. Create one now!</h2>
                <button>Share a Place</button>
            </Card>
        </div>
    }
    return <ul className="place-list">
        {props.item.map(place => <PlaceItem 
        key={place.id} 
        id={place.id} 
        img={place.imageUrl} 
        title={place.title} 
        description={place.description} 
        address={place.address}
        creatorId = {place.creator}
        coordinates={place.location}
        />)};
    </ul>;
}

export default PlaceList;