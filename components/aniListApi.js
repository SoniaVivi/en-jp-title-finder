import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const aniListApi = createApi({
  reducerPath: "aniListApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://graphql.anilist.co/" }),
  endpoints: (builder) => ({
    getWorkFromTitle: builder.query({}),
  }),
});
