import { apiSlice } from "../apiSlice";
import { ILoginProps, ISignupProps, IUserAuthOtp } from "./authApi.types";

const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        userLogin: builder.mutation({
            query: (body: ILoginProps) => {
                console.log({ body });
                return {
                    url: "/login",
                    method: "POST",
                    body: body,
                };
            },
            invalidatesTags: ["user"],
        }),

        createUser: builder.mutation({
            query: (body: ISignupProps) => {
                return {
                    url: `/register`,
                    method: "POST",
                    body,
                };
            },
            invalidatesTags: ["user"],
        }),

        sendUserAuthOtp: builder.mutation({
            query: (body: IUserAuthOtp) => {
                return {
                    url: `/signup/send-otp`,
                    method: "POST",
                    body,
                };
            },
        }),

        getUserInfo: builder.query({
            query: () => {
                return {
                    url: `/user`,
                    method: "GET",
                };
            },
            providesTags: ["user"],
        }),

        sendOtp: builder.mutation({
            query: (body: { email: string }) => {
                return {
                    url: `/password/user/send-otp`,
                    method: "POST",
                    body,
                };
            },
        }),

        verifyOtp: builder.mutation({
            query: (body: { email: string; otp: string }) => {
                return {
                    url: `/password/user/verify-otp`,
                    method: "POST",
                    body,
                };
            },
        }),

        resetPassword: builder.mutation({
            query: (body: { email: string; password: string }) => {
                return {
                    url: `/password/user/reset-password`,
                    method: "PATCH",
                    body,
                };
            },
        }),
    }),
    overrideExisting: true,
});

export const {
    useUserLoginMutation,
    useCreateUserMutation,
    useGetUserInfoQuery,
    useSendOtpMutation,
    useResetPasswordMutation,
    useVerifyOtpMutation,
    useSendUserAuthOtpMutation,
} = authApiSlice;
