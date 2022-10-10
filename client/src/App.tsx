//========React Router Dom========

import { BrowserRouter, Routes, Route } from "react-router-dom";


//========Material Ui========

import { Container, Grid } from "@material-ui/core"; 

//========Components========

import { UserCard } from "./components/UserCard/UserCard";

//###############################################################//

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Grid container spacing={2}>
          <UserCard />
          <Routes>
            <Route path="/" />
          </Routes>
        </Grid>
      </Container>
    </BrowserRouter>
  );
}

export default App;
