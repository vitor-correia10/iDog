import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "./App.css";

//Components
import Home from "./home";
import MyDogList from "./myDogList";
import FourOhFour from "./fourOhFour";
import Header from "./header";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/my-list">
          <MyDogList/>
        </Route>
        <Route path="*">
          <FourOhFour />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
