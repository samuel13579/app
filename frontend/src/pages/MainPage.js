import React, { Component } from 'react';import ContactList from '../components/ContactList';
import NavigationBar from '../components/NavigationBar';
import Add from '../components/Add';
import SplitPane, { Pane } from 'react-split-pane';
import { Form, Container, FormGroup, Label, Alert, Input, Button, Fade, ButtonGroup, Jumbotron, Badge, UncontrolledAlert } from 'reactstrap';

class MainPage extends Component 
{
    constructor(props){
        super(props);

        this.state = {userToken: ''};

        this.setState({userToken: this.props.token});
    }

    render()
    {

        return(
            <div id='MainPageDiv'>
                <NavigationBar token={this.props.token}></NavigationBar>
                <SplitPane
                style={{marginBottom:20 + "px"}}
                split="vertical"
                minSize={50}
                defaultSize={parseInt(localStorage.getItem('splitPos'), 10)}
                onChange={size => localStorage.setItem('splitPos', size)}
                >
                <ContactList initialSize="85%"></ContactList>
                <Add></Add>
                </SplitPane> 
            </div>
        )
    }
}

export default MainPage;