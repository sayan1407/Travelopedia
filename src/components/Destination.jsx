import React from "react";
import { useDeleteDestinationMutation } from "../api/destinationApi";

function Destination(props) {
    const [deleteDestination] = useDeleteDestinationMutation(); 
    const handleDeleteClick = (id) => {
           console.log(id)
           deleteDestination({id})
    }
  return (
    <div
      key={props.destination.id}
      className="row py-1"
      style={{ borderBottom: "1px solid #3333", borderTop: "1px solid #3333" }}
    >
      <div className="col-3 offset-3 text-white">
        {props.destination.city}, {props.destination.country}
      </div>
      <div className="col-1 text-warning">{props.destination.daysNeeded} days</div>
      <div className="col-2">
        <button
          className="btn btn-danger form-control"
          onClick={() => handleDeleteClick(props.destination.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Destination;
