import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import auth from "../features/authSlice";

export const store = configureStore({

    reducer:{

        auth
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>