import { NavigateFunction } from "react-router-dom";
import { AuthFormData } from "../../interfaces/auth";
import { AppDispatch } from "../app/store";
import * as api from "../api/index";
import * as authSlice from "../features/authSlice";
import { getAllJSDocTagsOfKind } from "typescript";
import { DefaultSerializer } from "v8";

export const signUp = (formData: AuthFormData, navigate: NavigateFunction) => async (dispatch: AppDispatch) => {

    try {
        
        await api.csrfToken();
        const { data } = await api.signUp(formData);
        dispatch(authSlice.auth(data));
        navigate("/");
        
    } catch (error) {
        
        console.log(error);
    }
}
export const signIn = (formData:AuthFormData,navigate:NavigateFunction) => async (dispatch:AppDispatch) => {

    try {   

        await api.csrfToken();
        const { data } = await api.signIn(formData);


        dispatch(authSlice.auth(data));
        navigate("/");
        
    } catch (error) {
        
        console.log(error);
    }
}
export const logOut = (navigate:NavigateFunction) => async (dispatch:AppDispatch) => {

    try {   

        await api.csrfToken();
        /* const { data } = await api.logOut(); */
        dispatch(authSlice.logout());
        navigate("/");
        
    } catch (error) {
        
        console.log(error);
    }
}
