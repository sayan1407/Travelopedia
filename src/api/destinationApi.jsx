import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query";

export const destinationAPI = createApi({
    reducerPath : "api",
    baseQuery : fetchBaseQuery({baseUrl : "http://localhost:3000/"}),
    endpoints : (builder) => (
       {
        getAllDestination : builder.query({
            query : () => "destination"
        })
       }
    )
})

export const {useGetAllDestination} = destinationAPI