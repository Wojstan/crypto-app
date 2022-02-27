import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const requestHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": "a148bf6936mshfbb3f4e28a239d5p19dd72jsn0b79a54cefa9",
};

const createRequest = (url: string, params = {}) => ({
  url,
  headers: requestHeaders,
  params: { referenceCurrencyUuid: "yhjMzLPhuIDl", ...params },
});

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
    getCurrencyDetails: builder.query({
      query: (coinId: string) => createRequest(`/coin/${coinId}`),
    }),
    getCoinHistory: builder.query({
      query: (args: { coinId: string; timeframe: string }) =>
        createRequest(`/coin/${args.coinId}/history`, {
          timePeriod: args.timeframe,
        }),
    }),
    getExchangeMarkets: builder.query({
      query: (coinId: string) =>
        createRequest(`/coin/${coinId}/exchanges`, {
          limit: "20",
          offset: "0",
          orderBy: "24hVolume",
          orderDirection: "desc",
        }),
    }),
  }),
});

export const {
  useGetGlobalStatsQuery,
  useGetAllCoinsQuery,
  useGetCurrencyDetailsQuery,
  useGetCoinHistoryQuery,
  useGetExchangeMarketsQuery,
} = cryptoApi;
