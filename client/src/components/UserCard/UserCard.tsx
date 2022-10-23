//========Material Ui========

import { Avatar, Button, Grid, Paper, Typography } from "@material-ui/core";

//========React========

import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { useAppDispatch } from "../../store/app/hooks";

//========Action Types========

import { logOut } from "../../store/actions/authActions";

//========Styles========

import  useStyles from "./styles";

//###############################################################//

const UserCard = () => {

    const classes = useStyles();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    
    let user;
    
    let local = localStorage.getItem("profile");
    if(local){

        user = JSON.parse(local).user;
    }else{

        user = false;
    }



    const handleClick = (e:any) => {

        switch (e.target.name) {

            case "signIn":
                
                navigate("/auth");
                break;
            
            case "signUp":
                
                navigate("/auth");
                break;

            case "logOut":
            
                dispatch(logOut(navigate));
                break;

            default:
                break;
        }
    }

    useEffect(()=>{},[location]);

    return(
        
        <Grid item xs={3}>
            <Paper className={classes.paper} elevation={2}>
                {!user 
                    ? <>
                        <Button name="signIn" size="large" variant="contained" color="primary" onClick={handleClick}>Sign In</Button>
                        <Button name="signUp" size="large" variant="contained" color="secondary" onClick={handleClick}>Sign Up</Button>
                    </>
                    : <>
                        <Avatar className={classes.avatar} alt="q inda" >
                            {user.first_name.charAt(0)}
                        </Avatar>
                        <Typography variant="h3">{`${user.first_name} ${user.last_name}`}</Typography>
                        <Typography variant="h5" component="p">Editar</Typography>
                        <Button name="logOut" size="large" variant="contained" color="primary" onClick={handleClick}>LogOut</Button>
                    </>
                }
            </Paper>
        </Grid>
    );

};

export default UserCard;