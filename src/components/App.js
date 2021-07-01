import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//style
import "./App.css";
//Components
import Home from "./home";
import Header from "./header";
import MyDogList from "./myDogList";
import Footer from "./footer";
import FourOhFour from "./fourOhFour";

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
      <Footer />
    </Router>
  );
}

export default App;
