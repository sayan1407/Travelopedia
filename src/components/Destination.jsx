import React, { useState } from "react";
import { useDeleteDestinationMutation, useUpdateDestinationMutation } from "../api/destinationApi";

function Destination(props) {
  const [deleteDestination] = useDeleteDestinationMutation();
  const handleDeleteClick = (id) => {
    console.log(id);
    deleteDestination({ id });
  };
  const [isUpdating, setIsUpdating] = useState(false);
  const [updatedCity, setUpdatedCity] = useState("");
  const [updatedCountry, setUpdatedCountry] = useState(""
  );
  const [updateDestination] = useUpdateDestinationMutation()
  let content;
  if (!isUpdating) {
    content = (
    <div className="col-3 row offset-3">
        <div className="col-6 text-white">
          {props.destination.city}
        </div>
        <div className="col-6  text-white">{props.destination.country}</div>
    </div>
    );
   
  } else {
    content = (
      <div className="col-3 row offset-3">
        <div className="col-5  text-white">
          <input
            type="text"
            value={updatedCity}
            onChange={(e) => setUpdatedCity(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="col-5  text-white">
          <input
            type="text"
            value={updatedCountry}
            onChange={(e) => setUpdatedCountry(e.target.value)}
            className="form-control"
          />
        </div>
      </div>
    );
   
  }
  const handleUpdateClick = () => {
    setIsUpdating(true);
    setUpdatedCity(props.destination.city)
    setUpdatedCountry(props.destination.country)
    
  }
  const handleSaveClick = () => {
    let city,country;
    if(updatedCity == "")
    {
        city = props.destination.city;
    }
    else{
        city = updatedCity
    }
    if(updatedCountry == "")
    {
        country = props.destination.country;
    }
    else{
        country = updatedCountry
    }
    updateDestination({
        id : props.destination.id,
        city : city,
        country : country,
        daysNeeded : props.destination.daysNeeded
    })
    setIsUpdating(false)
    
  }
 

  return (
    <div
      key={props.destination.id}
      className="row py-1"
      style={{ borderBottom: "1px solid #3333", borderTop: "1px solid #3333" }}
    >
      {content}

      <div className="col-1 text-warning">
        {props.destination.daysNeeded} days
      </div>
      <div className="col-1">
        <button
          className="btn btn-danger form-control"
          onClick={() => handleDeleteClick(props.destination.id)}
        >
          Delete
        </button>
        
      </div>
      {isUpdating ? (<div className="col-2 row">
        <div className="col-6">
             <button className="btn btn-primary form-control" onClick={() => handleSaveClick()}>Update</button>
        </div>
        <div className="col-6">
              <button className="btn btn-danger form-control" onClick={() => setIsUpdating(false)}>Cancel</button>
        </div>
         
      </div>) : (<div className="col-1">
    <button className="btn btn-warning form-control" onClick={() => handleUpdateClick()}>Edit</button>
 </div>)}
    </div>
  );
}

export default Destination;
