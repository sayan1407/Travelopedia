import React from 'react'
import Destination from './Destination';
import { useGetRandomDestinationQuery } from '../api/randomDestinationApi';

function RandomDestination() {
    const {data,isLoading,isSuccess,isError,error} = useGetRandomDestinationQuery()
    
    let content;
    if(isLoading){
          content = <p>Loading...</p>
    }
    else if(isSuccess){
       
        content = <div className='text-center border p-3 text-white'>
            <h4 className='text-success'>Random travel suggestion : </h4>
            {data.city},{data.country}
        </div>
    }
    else if(isError){
        content = <p>Error!!</p>
    }
  return (
    <div className='pt-3'>{content}</div>
  )
}

export default RandomDestination