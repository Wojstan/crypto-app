import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const requestHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": "db3e4f2cf8mshfb9f9c4c00b00c1p141de0jsn1eb296b34871",
};

const createRequest = (url: string) => ({ url, headers: requestHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://coinranking1.p.rapidapi.com/",
  }),
  endpoints: (builder) => ({
    getGlobalStats: builder.query({
      query: () => createRequest("stats"),
    }),
    getAllCoins: builder.query({
      query: () => createRequest("coins"),
    }),
  }),
});

export const { useGetGlobalStatsQuery, useGetAllCoinsQuery } = cryptoApi;
