import { apiSlice } from "@/store/api/apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({ 
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (id) => `users/${id}`, // ey ke ah ng chher
      keepUnusedDataFor: 5, // keep unused data in cache for 5 seconds
      providesTags: ["User"], // provideTags are used for updating cache
    }),
  }),
});

// auto generated hooks for getUser query (GET)
export const { useGetUserQuery } = userApiSlice;