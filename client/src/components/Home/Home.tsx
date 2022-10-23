//========Material Ui========

import { Container, Grid } from "@material-ui/core";

//========Components========

import UserCard from "../UserCard/UserCard";

//========Styles========

import  useStyles from "./styles";

//###############################################################//
const Home = () => {

    const classes = useStyles();

    return(
        <Container>
            <Grid container spacing={2}>
                <UserCard />
            </Grid>
        </Container>
    );
}
export default Home;