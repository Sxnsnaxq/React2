//import logo from './logo.svg'
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Member from './containers/member/Member';
import MemberEdit from './containers/member/MemberEdit';
import NotFound from "./containers/error/NotFound";

class App extends Component {
 
  renderRouter() {
    return(
      <Switch>
        <Route exact path='/' component={Home} />
        
        <Route exact path='/Members' component={Member} />
        <Route exact path='/Members/add' component={MemberEdit} />
        <Route exact path='/Member/edit/:id' component={MemberEdit} />
        <Route component={NotFound} />
      </Switch>
    )
  }

  render() {
    return (
      <BrowserRouter>{this.renderRouter()}</BrowserRouter>
    );
  }
}

export default App;
