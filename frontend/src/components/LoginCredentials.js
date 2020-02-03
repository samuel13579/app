import React, { Component } from 'react';
import { Form, Container, FormGroup, Label, Input, Button, Fade, ButtonGroup, Jumbotron, Badge } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

class LogInCredentials extends Component {

    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: '' 
        }

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onLogin = this.onLogin.bind(this);
    }

    onChangeUsername(e){
        this.setState({
            username: e.target.value
        });
    }

    onChangePassword(e){
        this.setState({
            password: e.target.value
        });
    }

    onLogin(e){
        e.preventDefault();

        console.log('Login clicked.');
        console.log('Username is ', this.state.username);
        console.log('Password is ', this.state.password);

        const loginDetails = {
            login_username: this.state.username,
            login_password: this.state.password
        };
    }

    render() {
        return(
            <div>
                <Container>
                    <Fade in = {true}>
                        <div>
                            <Jumbotron fluid>
                                <Container fluid>
                                    <h1 className="display-3">Contact Manager</h1>
                                </Container>
                            </Jumbotron>
                        </div>
                    </Fade>

                    <Form onSubmit={this.onLogin}>
                        <br></br>
                        <Fade in={true}>
                        <FormGroup>
                            <Label for="username" className="float-left" size = "lg">Username:</Label>
                            <Input type="text" name="username" id="username" placeholder="Please enter your username"
                                    onChange={this.onChangeUsername}></Input>
                        </FormGroup>
                        <br></br>
                        <FormGroup>
                            <Label for="password" className="float-left" size = "lg">Password:</Label>
                            <Input type="password" name="password" id="password" placeholder="Please enter your password"
                                    onChange={this.onChangePassword}></Input>
                        </FormGroup>
                        <ButtonGroup>
                            {/* <Link to ="/contacthub"><Button color="primary" size="lg">Log In</Button>{''}</Link> Hook up next page*/}
                            <Button color="primary" size="lg">Log In</Button>{''}
                        </ButtonGroup>
                        <div>
                            <br></br>
                            <Link to="/signup">
                                <Button color='link'><Badge color='link' size='lg'>Sign up</Badge></Button>
                            </Link>
                        </div>
                        </Fade>
                    </Form>
                </Container>
            </div>
        );
    }
}

export default LogInCredentials;