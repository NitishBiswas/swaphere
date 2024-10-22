import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AppState } from "../store";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const baseQuery = fetchBaseQuery({
    baseUrl,
    // credentials: "include",
    prepareHeaders: (headers: Headers, { getState }) => {
        const state = getState() as AppState;
        const authState = state?.auth;

        if (authState?.token) {
            headers.set("Authorization", `Bearer ${authState?.token}`);
        }
        return headers;
    },
});

export const apiSlice = createApi({
    reducerPath: "apiSlice",
    baseQuery: baseQuery,
    tagTypes: ['user', 'message'],
    endpoints: (builder) => ({}),
});
