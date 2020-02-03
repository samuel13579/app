import React from 'react';
import LoginCredentials from "./components/LoginCredentials";
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import NavigationBar from './components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Container, FormGroup, Label, Input, Button, ButtonGroup, Jumbotron, Fade } from 'reactstrap';
import ContactList from './components/ContactList';
import MainPage from './pages/MainPage';
import Edit from './components/Edit'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LoginCredentials}/>  
          <Route exact path="/yikes" component={MainPage}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
