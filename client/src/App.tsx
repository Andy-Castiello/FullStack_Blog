//========React Router Dom========

import { BrowserRouter, Routes, Route } from "react-router-dom";

//========Components========

import Auth from "./components/Auth/Auth";
import Home from "./components/Home/Home";

//###############################################################//

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/auth" element={<Auth />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
