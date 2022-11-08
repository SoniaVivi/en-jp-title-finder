import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createEntityAdapter } from "@reduxjs/toolkit";

const workAdapter = createEntityAdapter();
const workInitialState = workAdapter.getInitialState();

export const aniListApi = createApi({
  reducerPath: "aniListApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://graphql.anilist.co/",
    prepareHeaders: (headers) => {
      headers.set("content-type", "application/json");
      headers.set("accept", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getWorkFromTitle: builder.query({
      query: ({ title, pageNumber }) => ({
        url: "/",
        method: "POST",
        body: {
          query: `query getMangaFromName($search: String, $pageNumber: Int) {
          Page(page: $pageNumber, perPage: 25) {
            media (search: $search) {
              id
              status
              description
              volumes
              chapters
              siteUrl
              synonyms
              format
              coverImage {
                medium
              }
              externalLinks {
                url
                site
                language
              }
              tags {
                name
              }
              title {
                native
                romaji
                english
              }
            }
          }
        }`,
          variables: { search: title, pageNumber: pageNumber },
        },
      }),
      transformResponse: (responseData) =>
        workAdapter.addMany(
          workInitialState,
          responseData.data.Page.media.map((data) => ({
            ...data,
            ...data.title,
            cover: data.coverImage,
            title: null,
            coverImage: null,
          }))
        ),
    }),
  }),
});

export const { useGetWorkFromTitleQuery } = aniListApi;
