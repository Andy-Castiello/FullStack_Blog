//========Material Ui========

import { Avatar, Button, Grid, Paper, Typography } from "@material-ui/core";

//========React========

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router";

//========Constants========

import { LOGOUT } from "../../constants/actionTypes";

//========Styles========

import  useStyles from "./styles";

//###############################################################//

export const UserCard = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const user = localStorage.getItem("profile");

    const logOut = () =>{

        dispatch({ type: LOGOUT });
        navigate("");
        
    }
    useEffect(()=>{},[location]);

    return(
        
        <Grid item xs={3}>
            <Paper className={classes.paper} elevation={2}>
                {!user 
                    ? <>
                        <Button size="large" variant="contained" color="primary">Sign In</Button>
                        <Button size="large" variant="contained" color="secondary">Sign Up</Button>
                    </>
                    : <>
                        <Avatar className={classes.avatar} alt="q inda" >
                            A
                        </Avatar>
                        <Typography variant="h3">El Capo</Typography>
                        <Typography variant="h5" component="p">Editar</Typography>
                        <Button size="large" variant="contained" color="primary" onClick={logOut}>LogOut</Button>
                    </>
                }
            </Paper>
        </Grid>
    );

};