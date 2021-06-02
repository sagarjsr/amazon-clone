import { Fragment } from 'react';
import Navbar from './layouts/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './components/Login';
import Carousel from './components/Carousel'
import Footer from './layouts/Footer';
import CategoryCard from './components/card/CategoryCard';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const  App = () => {
  return (
    <Fragment>
      <Navbar />
      <Carousel/>
      <CategoryCard/>   
    <Router>
    
    </Router>
    <Footer/>
     
    </Fragment>

  );
}

export default App;
