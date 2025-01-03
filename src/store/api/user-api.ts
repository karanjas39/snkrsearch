import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { tagTypes } from "@/types/api-tags";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api`,
  }),
  tagTypes,
  endpoints: (builder) => ({
    userDetails: builder.query<
      {
        user: {
          name: string;
          email: string;
          dob: string;
          gender: string;
          verified: boolean;
          createdAt: string;
        };
      },
      void
    >({
      query: () => "/user/details",
    }),
  }),
});
