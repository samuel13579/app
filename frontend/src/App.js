import React, { Component } from 'react';
import LoginCredentials from "./components/LoginCredentials";
import SignUp from "./components/SignUp";
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import MainPage from './pages/MainPage';

var userToken = '';

class App extends Component{

  constructor(props){
    super(props);
    this.state={userToken: ''}

    this.tokenCollector = this.tokenCollector.bind(this);
    this.getToken = this.getToken.bind(this);
  }

  tokenCollector = (token) => {
    console.log("Token on entiering collector is ", token);

    userToken = token;
    this.setState({ userToken: token });
  }

  getToken = () => {
    console.log("UserToken being passed is ", userToken);
    return userToken;
  }

  render(){

    var ConditionalRoute = !this.userToken ? <Route exact path ="/mainpage" render={props=><MainPage test='2' token={this.userToken} {...props}></MainPage>}/>: <div></div>;

    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" render={props=><LoginCredentials callback={this.tokenCollector}></LoginCredentials>}/>  
            <Route exact path="/signup" component={SignUp}/>
            <Route exact path ="/mainpage" render={props=><MainPage test='2' token={this.userToken} {...props}></MainPage>}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;