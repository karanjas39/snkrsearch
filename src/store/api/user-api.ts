import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { tagTypes, USER_DETAIL_TAG } from "@/types/api-tags";
import { z_editProfile_type } from "@/types";

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
      providesTags: [USER_DETAIL_TAG],
    }),
    updateUserDetails: builder.mutation<void, z_editProfile_type>({
      query: (body) => ({
        url: "/user/edit",
        method: "POST",
        body,
      }),
      invalidatesTags: [USER_DETAIL_TAG],
    }),
  }),
});
