import React from 'react';
import {Link} from 'react-router-dom';
import ReactBootstrap, {Button, Nav, Navbar, Form, Fade} from 'react-bootstrap'

function NavigationBar()
{
    var fadeIn = false;

    return(
      <Fade in = {true}>
          <div id='navitgationBar'>
            <Navbar bg="dark" variant="dark">
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              
                  <Nav className="mr-auto">
                      <Nav.Link href="#home">Home</Nav.Link>
                      <Nav.Link href="#info">Info</Nav.Link>
                  </Nav>
              
              <Form inline>
              
                <Navbar.Text>
                  Signed in as: <a>Test Login</a>
                </Navbar.Text>
                <Link to = '/'>
                <Button style={{marginLeft: 20 + 'px'}} variant="outline-primary">Log Out</Button>
                </Link>
              </Form>
            </Navbar>
            <br/>
          </div>
          </Fade>
    );
};

export default NavigationBar