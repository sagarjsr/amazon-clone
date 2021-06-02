import { Fragment } from 'react';
import Navbar from './layouts/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './components/Login';
import Footer from './layouts/Footer';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const  App = () => {
  return (
    <Fragment>
      <Navbar />
    <Router>
    
    </Router>
    <Footer/>
     
    </Fragment>

  );
}

export default App;
