import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { reponseHandler } from "common/helpers";
import { getAuthToken } from "./auth";

const BASE_API_ENDPOINT: string = import.meta.env.VITE_API_BASE_URL;

export const jobsApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_API_ENDPOINT}/v1/jobs`,
    prepareHeaders: (headers) => {
      const token = getAuthToken();
      if (token) {
        headers.set("authorization", token);
      }
      return headers;
    },
  }),
  reducerPath: "jobsApi",
  endpoints: (build) => ({
    postJob: build.mutation({
      query: (payload: JObj) => {
        return {
          url: "",
          method: "POST",
          body: payload,
          responseHandler: reponseHandler,
        };
      },
    }),

    findJobs: build.query({
      query: ({ status, search }) => ({
        url: `?${status ? "filter.status=" + status : ""}&${search ? "search=" + search : ""}`,
        method: "GET",
        responseHandler: reponseHandler,
      }),
    }),
  }),
});

export const { useFindJobsQuery, usePostJobMutation } = jobsApi;
export default jobsApi;
