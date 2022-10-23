import axios from "axios";
import { AuthFormData } from "../../interfaces/auth";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use( req => {

    const localData = localStorage.getItem("profile");

    if(localData && req.headers){
        
        req.headers.authorization = `Bearer ${JSON.parse(localData).token}`;
    }
    
    return req;
},error =>{

    console.log(error);
});

API.defaults.withCredentials = true;


export const csrfToken = () => API.get("/sanctum/csrf-cookie");
export const signUp = (formData: AuthFormData)  => API.post("api/register", formData);
export const signIn = (formData: AuthFormData) => API.post("api/signin", formData);
export const logOut = () => API.post("api/logout");