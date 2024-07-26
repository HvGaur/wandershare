import React from "react";

import "./PlaceList.css";
import Card from "../../shared/components/UIElements/Card";
import PlaceItem from "./PlaceItem";
import Button from "../../shared/components/FormElements/Button";

const PlaceList = props => {
    if(props.items.length === 0){
        return <div className="place-list__empty">
            <Card>
                <h2>No Places Found. Create one now!</h2>
                <Button to="/places/new">Share a Place</Button>
                <h2></h2>
            </Card>
        </div>
    }
    return(
     <ul className="place-list">
        {props.items.map(place => (<PlaceItem 
        key={place.id} 
        id={place.id} 
        image={place.imageUrl} 
        title={place.title} 
        description={place.description} 
        address={place.address}
        coordinates={place.location}
        creatorId = {place.creator}
        />))}
    </ul>
    );
};

export default PlaceList;