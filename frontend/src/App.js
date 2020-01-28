import React from 'react';
import LoginCredentials from "./components/LoginCredentials";
import PassWordBox from "./components/PassWordBox";
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LoginCredentials}/>  
          {/* <Route exact path="/yikes" component={PassWordBox}/>  Hook up next page */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
