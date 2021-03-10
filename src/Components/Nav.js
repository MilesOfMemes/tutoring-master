import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Banner from 'react-js-banner';
import Login from './Login';
import Resource from './Resource';
import Assignment from './Assignment';
import Home from './Home';
import Class from './Class';
import Contact from './Contact';

class Navbar extends React.Component{
  componentDidMount(){
    <Home/>
  };
}

const Nav = ({handleLogout}) => {

    return(
        
    <Router>  
    <div>
      <nav>
      <div class="banner"> 
        <Banner>
          UAFS Programming Tutoring System
        </Banner>
        </div>
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/Assignment">Assignments</Link>
          </li>
          <li>
            <Link to="/Class">Classes</Link>
          </li>
          <li>
            <Link to="/Resource">Resource</Link>
          </li>
          <li>
            <Link to="/Contact">Contact Us</Link>
          </li>
        </ul>
        <button onClick={handleLogout}>Log Out</button>
      </nav>

      <Switch>
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route exact path="/Assignment">
            <Assignment/>
          </Route>
          <Route path="/Class">
            <Class />
          </Route>
          <Route path="/Resource">
            <Resource/>
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>

        </Switch>
    </div>
  </Router>

    );
};

export default Nav;