import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "../../interfaces/auth";

const initialState:AuthState = null;

export const authSlice = createSlice({

    name: "auth",
    initialState: initialState as AuthState,
    reducers: {

        auth: (state,action:PayloadAction<AuthState>)=>{

            localStorage.setItem("profile", JSON.stringify({ ...action.payload}));
            state = action.payload;
        },
        logout: (state)=>{

            localStorage.removeItem("profile");
            state = null;
        }
    }
});

export const { auth, logout } = authSlice.actions;

export default authSlice.reducer;