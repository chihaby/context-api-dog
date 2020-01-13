import React from "react";
import "./App.css";
import GetData from "./components/GetData";
import Search from "./pages/Search";
import Login from "./containers/Login";
// import Maps from "./pages/Maps";
import NavBar from './components/NavBar';
import NoMatch from "./pages/NoMatch";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div>
                <div>
                    <NavBar></NavBar>
                </div>
                <div className="App">
                    <Switch>
                        <Route exact path="/" component={GetData} />
                        <Route exact path="/search" component={Search} />
                        <Route path="/login" exact component={Login} />
                        {/* <Route exact path="/map" component={Maps} /> */}
                        <Route component={NoMatch} />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
