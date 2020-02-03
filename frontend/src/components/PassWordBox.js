import React, { Component } from 'react';
import { Form, Container, FormGroup, Label, Input } from 'reactstrap';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

class PassWordBox extends Component {


    render() {
    
        return(
            <div>
                <Form>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password" id="password" placeholder="Please input password"></Input>
                    </FormGroup>
                </Form>
            </div> 
        );
    }
}

export default PassWordBox;