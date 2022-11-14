import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createEntityAdapter } from "@reduxjs/toolkit";

const workAdapter = createEntityAdapter({
  sortComparer: (a, b) => {
    if (a.index < b.index) {
      return -1;
    } else if (a.index == b.index) {
      return 0;
    } else {
      return 1;
    }
  },
});
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
          Page(page: $pageNumber, perPage: 5) {
            pageInfo {
               currentPage
               lastPage
               hasNextPage
               perPage
            }
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
          responseData.data.Page.media.map((data, i) => ({
            ...data,
            ...data.title,
            pageInfo: responseData.data.Page.pageInfo,
            cover: data.coverImage.medium,
            title: null,
            coverImage: null,
            index: i,
          }))
        ),
    }),
  }),
});

export const { useGetWorkFromTitleQuery } = aniListApi;
