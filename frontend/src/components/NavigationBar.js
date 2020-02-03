import React from 'react';
import ReactBootstrap, {Button, Nav, Navbar, Form, FormControl} from 'react-bootstrap'

function NavigationBar()
{
    return(
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
            <Button style={{marginLeft: 20 + 'px'}} variant="outline-primary">Log Out</Button>
          </Form>
        </Navbar>
        <br/>
      </div>
    );
};

export default NavigationBar