import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Login from './Login';
import Resource from './Resource';
import Assignment from './Assignment';

const Home = ({handleLogout}) => {
    return(
        
    <Router>  
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/Assignment">Assignments</Link>
          </li>
          <li>
            <Link to="/Resource">Resource</Link>
          </li>
        </ul>
        <button onClick={handleLogout}>Log Out</button>
      </nav>
      

      <Switch>
          <Route path="/Resource">
            <Resource/>
          </Route>
          <Route exact path="/Assignment">
            <Assignment/>
          </Route>

        </Switch>
    </div>
  </Router>

    );
};

export default Home;