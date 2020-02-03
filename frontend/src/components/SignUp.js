import React, { Component } from 'react';
import { Form, Container, FormGroup, Label, Input, Button, UncontrolledCarousel, ButtonGroup, Jumbotron, Fade } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

class SignUp extends Component {

    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: ''
        }

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSignUp = this.onSignUp.bind(this);
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
    
    onSignUp(e){
        e.preventDefault();

        console.log('Login clicked.');
        console.log('Username is ', this.state.username);
        console.log('Password is ', this.state.password);

        const loginDetails = {
            login_username: this.state.username,
            login_password: this.state.password
        };

        axios.post("http://localhost:5000/signup", loginDetails).then(res=> console.log(res.data));

        this.setState({
            username: '',
            password: ''
        })
    }

    render() {
        return (

            <Fade in={true}>
                <Container> 
                    <div className='jumbotron bg-dark text-white'>
                        <h1 className="display-3">Sign up</h1>
                    </div>
                    <Form>
                        <div>
                            <FormGroup>
                                <Label for="username" className="float-left" size = "lg">Username: </Label>
                                <Input type="text" name="username" id="username" placeholder="Please enter your username"
                                        onChange={this.onChangeUsername}></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="password" className="float-left" size = "lg">Password: </Label>
                                <Input type="password" name="password" id="password" placeholder="Please enter your password"
                                        onChange={this.onChangePassword}></Input>
                            </FormGroup>
                        </div>
                        <div>
                            <ButtonGroup>
                                {/* <Link to ="/contacthub"><Button color="primary" size="lg">Log In</Button>{''}</Link> Hook up next page*/}
                                <Button color="primary" size="lg" onClick={this.onSignUp}>Sign Up</Button>{''}
                            </ButtonGroup>
                        </div>
                    </Form>
                </Container>
            </Fade>

        )
    }
}

export default SignUp;