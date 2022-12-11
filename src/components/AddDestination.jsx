import React from "react";
import { useState } from "react";
import { useAddDestinationMutation } from "../api/destinationApi";

function AddDestination() {
  const [newCity, setNewCity] = useState("");
  const [newCountry, setNewCountry] = useState("");
  const [addDestinationMutation] = useAddDestinationMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    //addDestination
    addDestinationMutation({
      id: Math.random() * 100,
      city: newCity,
      country: newCountry,
      daysNeeded: parseInt(Math.random() * 10) + 1,
    });
    setNewCity("");
    setNewCountry("");
  };

  return (
    <div className="p-4 border">
      <form onSubmit={handleSubmit}>
        <div className="row col-8 offset-2">
          <h4>Enter a new Destination</h4>
          <div className="col-5 p-1">
            <input
              type="text"
              className="form-control"
              placeholder="Enter city..."
              value={newCity}
              onChange={(e) => setNewCity(e.target.value)}
            />
          </div>
          <div className="col-5 p-1">
            <input
              type="text"
              className="form-control"
              placeholder="Enter country..."
              value={newCountry}
              onChange={(e) => setNewCountry(e.target.value)}
            />
          </div>
          <div className="col-2 p-1">
            <button className="btn btn-success form-control">Add</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddDestination;
