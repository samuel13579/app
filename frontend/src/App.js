import React from 'react';
import LoginCredentials from "./components/LoginCredentials";
import SignUp from "./components/SignUp";
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LoginCredentials}/>  
          <Route exact path="/signup" component={SignUp}/>
          <Route exact path="/mainpage" component={MainPage}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
