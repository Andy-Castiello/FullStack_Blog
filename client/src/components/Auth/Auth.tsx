//========Material Ui========

import { Avatar, Button, Container, Grid, Paper, Typography } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

//========React========

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/app/hooks";

//========Action Creators========

import { signUp, signIn } from "../../store/actions/authActions";

//========Interfaces========

import { AuthFormData } from "../../interfaces/auth";

//========Components========

import Input from "./Input";

//========Styles========

import  useStyles from "./styles";


//###############################################################//

const initialForm = {

    first_name : "",
    last_name : "",
    email : "",
    password : "",
    password_confirmation : ""
};

const Auth = () => {

    const classes = useStyles();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [ isSignedUp, setIsSignedUp ] = useState(false);
    const [ showPassword, setShowPassword ] = useState(false);
    const [ formData, setFormData ] = useState<AuthFormData>(initialForm);

    const handleChange = (e:any) => {

        setFormData(actualFormData =>( { ...actualFormData, [e.target.name]: e.target.value }));
    }

    const handleShowPassword = () => {

        setShowPassword(actualShowPassword=>!actualShowPassword);
    }

    const switchMode = () => {

        setIsSignedUp(actualIsSignedUp=>!actualIsSignedUp);
    }

    const handleSubmit = (e:any)=> {

        e.preventDefault();
        if(isSignedUp){

            dispatch(signIn(formData,navigate));
        }else{

            dispatch(signUp(formData,navigate));
        }
    }

    return(
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">Sign{ isSignedUp ? " In" : " Up" }</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            !isSignedUp &&
                            <>
                                <Input name="first_name" label="First Name" handleChange={handleChange} autofocus half />
                                <Input name="last_name" label="Last Name" handleChange={handleChange} half />
                            </>
                        }
                        <Input name="email" label="Email Address" type="email" handleChange={handleChange} />
                        <Input name="password" label="Password" type={ showPassword ? "text" : "password" } handleChange={handleChange} handleShowPassword={handleShowPassword} />
                        { !isSignedUp && <Input name="password_confirmation" label="Repeat Password" handleChange={handleChange} type="password" />}
                    </Grid>
                    <Button type="submit" fullWidth className={classes.submit} variant="contained" color="primary">
                        Sign{ isSignedUp ? " In" : " Up" }
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Button onClick={ switchMode }>
                                { isSignedUp ? "Don't have an account? Sing up!" : "Alredy have an account? Sign In!" }
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
};

export default Auth;