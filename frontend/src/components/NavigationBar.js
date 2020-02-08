import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Button, Nav, Navbar, Form, Fade} from 'react-bootstrap'
import axios from 'axios';

var username = '';

class NavigationBar extends Component
{
    constructor(props){
      super(props);

      this.getUser = this.getUser.bind(this);
    }

    getUser(e){

      const user = this.props.token

      axios.get("http://localhost:5000/me", user).then(res => console.log(res.data))
            .catch(error => console.log(error.response.data.message));
    }

    render(){

      const userToken = this.props.token;

      return(
        <Fade in = {true}>
            <div id='navitgationBar'>
              <Navbar bg="dark" variant="dark" onLoad={this.getUser(userToken)}>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#info">Info</Nav.Link>
                    </Nav>
                
                <Form inline>
                
                  <Navbar.Text>
                    Signed in as: <a>Test Login</a>
                  </Navbar.Text>
                  {/* <Link to = '/'> */}
                  <Button style={{marginLeft: 20 + 'px'}} onClick={this.getUser} variant="outline-primary">Log Out</Button>
                  {/* </Link> */}
                </Form>
              </Navbar>
              <br/>
            </div>
            </Fade>
      );
    }
}

export default NavigationBar