import { toast } from "react-toastify";
import { IAuthState } from "./authSlice.types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: IAuthState = {
    token: null,
    expiresAt: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login(state, action: PayloadAction<{ token: string }>) {
            state.token = action.payload.token;
            const expiresIn = 12 * 60 * 60 * 1000; // 12 hours in milliseconds
            state.expiresAt = Date.now() + expiresIn;

            // Store token and expiration in localStorage
            localStorage.setItem("token", action.payload.token);
            localStorage.setItem("expiresAt", (Date.now() + expiresIn)?.toString());
        },

        logout(state) {
            state.token = null;
            state.expiresAt = null;

            // Clear localStorage
            localStorage.removeItem("token");
            localStorage.removeItem("expiresAt");
        },
        checkTokenExpiry(state) {
            const expiresAt = Number(localStorage.getItem("expiresAt"));
            if (expiresAt && Date.now() > expiresAt) {
                state.token = null;
                state.expiresAt = null;

                // Clear localStorage
                localStorage.removeItem("token");
                localStorage.removeItem("expiresAt");
                toast.error("Session Expires! Login again!");
            } else {
                const expiresIn = 12 * 60 * 60 * 1000;
                localStorage.setItem("expiresAt", (Date.now() + expiresIn)?.toString());
            }
        },
    },
});

const authReducer = authSlice.reducer;
export const selectAuthToken = (state: any) => state.auth?.token;

export const { login, logout, checkTokenExpiry } = authSlice.actions;
export default authReducer;

