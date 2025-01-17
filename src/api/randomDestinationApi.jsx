import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const randomDestinationApi = createApi({
  reducerPath: "apiRandomDestination",
  baseQuery: fetchBaseQuery({ baseUrl: "https://random-data-api.com/api/v2/" }),
  tagTypes : ["RandomDestinations"],
  endpoints: (builder) => ({
    //QUERY -> GET
    //MUTATION -> POST/PUT/DELETE
    getRandomDestination: builder.query({
      query: () => ({
        url : "addresses",
        method : "GET",
        params : {}
      })
      
    })
    
  }),
});
export const { useGetRandomDestinationQuery } = randomDestinationApi;