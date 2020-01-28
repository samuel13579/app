import React, { Component } from 'react';
import {Route, Router, Link, BrowserRouter} from 'react-router-dom';
import { Form, Container, FormGroup, Label, Input, Button, ButtonGroup, Jumbotron, Fade } from 'reactstrap';
import { render } from '@testing-library/react';
import 'bootstrap/dist/css/bootstrap.css';
import PassWordBox from './PassWordBox';

class LogInCredentials extends Component {

    login()
    {

    }

    render() {
        return(
            <div>
                <Container>
                    <div>
                    <Jumbotron fluid>
                        <Container fluid>
                            <h1 className="display-3">Contact Manager</h1>
                        </Container>
                    </Jumbotron>
                    </div>

                    <Form>
                        <br></br>
                        <FormGroup>
                            <Label for="username" className="float-left" size = "lg">Username:</Label>
                            <Input type="text" name="username" id="username" placeholder="Please enter your username"></Input>
                        </FormGroup>
                        <br></br>
                        <FormGroup>
                            <Label for="password" className="float-left" size = "lg">Password:</Label>
                            <Input type="password" name="password" id="password" placeholder="Please enter your password"></Input>
                        </FormGroup>
                    </Form>
                        <ButtonGroup>
                            {/* <Link to ="/yikes"><Button color="primary" size="lg">Log In</Button>{''}</Link> Hook up next page*/}
                            <Button color="primary" size="lg">Log In</Button>{''}
                        </ButtonGroup>
                </Container>
            </div>
        );
    }
}

export default LogInCredentials;