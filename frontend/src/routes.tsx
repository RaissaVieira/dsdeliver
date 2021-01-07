import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Orders from "./pages/Orders";
import Home from "./pages/Home";
import NavBar from "./Components/NavBar";

function Routes() {
    return(
        <BrowserRouter>
            <NavBar/>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/orders" component={Orders} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;