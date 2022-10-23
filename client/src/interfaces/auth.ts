export interface AuthFormData{

    first_name : String,
    last_name : String,
    email : String,
    password : String,
    password_confirmation : String
};
export type AuthState = {

    user:Object,
    token: String
} | null;