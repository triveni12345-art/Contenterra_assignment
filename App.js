import logo from './logo.svg';
import './App.css';
import React from 'react'
import { Button, Nav, Navbar, Form, FormControl, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import RestaurantDetails from './Restaurant/RestaurantDetails';
import ManageResto from './Restaurant/ManagaResto';
import Homee from './RestaurantLogin/Homee'
import MyLoginPage from './RestaurantLogin/MyLoginPage'
import Web_Developer_exercise from './Contenterra/Web_Developer_exercise';
import Ex from './Contenterra/Ex'
function App() {

  return (
    <div className="App">

     <Web_Developer_exercise/>
      {/* <Ex/> */}

     {/* <Router>
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
          <Navbar.Brand href="#home">Zonions</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/MyLoginPage">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <br />
        <Switch>
          <Route exact path="/">
            <Homee />
            </Route>
            <Route path="/RestaurantDetails">
              <RestaurantDetails/>
            </Route>
          <Route path="/MyLoginPage">
            <MyLoginPage />
          </Route>
        </Switch>
      </Router>
 */}



      

    </div>

  );
}

export default App;
