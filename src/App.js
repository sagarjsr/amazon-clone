import { Fragment } from 'react';
import Navbar from './layouts/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './layouts/Footer';
import SmartphoneCard from './components/card/SmartphoneCard'
import ProductDetails from './components/ProductDetails'
import Home from './components/Home';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Switch>
        <Route exact path='/smartphone' component={SmartphoneCard} />
        <Route exact path='/productdetails/:id' component={ProductDetails} />
        <Route exact path='/productdetails' component={ProductDetails} />
        <Route  path='/' component={Home} />
        </Switch>
      </Router>
      <Footer />

    </Fragment>

  );
}

export default App;
