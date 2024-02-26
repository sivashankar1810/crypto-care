import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "x-rapidapi-host": process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST,
  "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY,
};
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_CRYPTO_API_URL }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) =>
        createRequest(
          `https://api.coinranking.com/v2/coins`
         // `http://localhost:8000/coin/getAllCoins?timePeriod=24h&referenceCurrencyUuid=yhjMzLPhuIDl&limit=${count}`
        ),
    }),

    getCryptoDetails: builder.query({
      query: (coinId) =>
        // createRequest(`/coin/${coinId}`),
        createRequest(
          `https://api.coinranking.com/v2/coin/${coinId}`
        //  `http://localhost:8000/coin/getCoinDetails?coin_uuid=${coinId}`
        )
    }),

    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) =>
        createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
    }),

    // getExchanges: builder.query({
    //   query: () => createRequest("/exchanges"),
    // }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetExchangesQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi;
