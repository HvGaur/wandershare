import React from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from '../../shared/util/validators';

import "./PlaceForm.css";

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

const UpdatePlace = () => {
  const placeId = useParams().placeId;

  const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);

  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Could not find place!</h2>
      </div>
    );
  }

  return (
    <form className='place-form'>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={() => {}}
        value={identifiedPlace.title}
        valid={true}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (min. 5 characters)."
        onInput={() => {}}
        value={identifiedPlace.description}
        valid={true}
      />
      <Button type="submit" disabled={true}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
