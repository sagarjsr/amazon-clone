import { Fragment } from 'react';
import Navbar from './layouts/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './components/Login';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const  App = () => {
  return (
    <Fragment>
      <Navbar />
    <Router>
    <Route exact='/login' component={Login} />
    </Router>
     
    </Fragment>

  );
}

export default App;
