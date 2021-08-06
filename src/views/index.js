import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './About';
import Cards from '../components/Cards';
import Hero from '../components/Hero';
import Details from '../components/Details';
import Error from './Error';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import Pagination from '../components/Pagination';

export default function RouterSetup() {
  const [counter, setCounter] = useState(1);
  return (
    <Router>
      <NavBar counter={counter} setCounter={setCounter} />
      <Switch>
        <Route exact path={counter >= 2 ? `/${counter}` : `/${''}`}>
          <Hero counter={counter} />
          <Cards counter={counter} />
          <Pagination counter={counter} setCounter={setCounter} />
        </Route>
        <Route exact path="/movie/:id" children={<Details counter={counter} />}></Route>
        <Route exact path="/about">
          <About counter={counter} />
        </Route>
        <Route exact path="*">
          <Error counter={counter} />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
