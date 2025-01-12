import React from 'react'
import { destinationAPI, useDeleteDestinationMutation, useGetAllDestinationQuery } from '../api/destinationApi'
import Destination from './Destination';

function DestinationList() {
    const {data,isLoading,isSuccess,isError,error} = useGetAllDestinationQuery()
    const [deleteDestination] = useDeleteDestinationMutation(); 
    const handleDeleteClick = (id) => {
           console.log(id)
           deleteDestination({id})
    }
    let content;
    if(isLoading){
          content = <p>Loading...</p>
    }
    else if(isSuccess){
       
        content = data.map((destination) => {
            return (
              <Destination destination={destination}></Destination>
              
            );
          });
    }
    else if(isError){
        content = <p>Error!!</p>
    }
  return (
    <div className='pt-3'>{content}</div>
  )
}

export default DestinationList