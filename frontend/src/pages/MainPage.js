import React, { Component } from 'react';import ContactList from '../components/ContactList';
import NavigationBar from '../components/NavigationBar';
import EditAndAdd from '../components/EditAndAdd';
import SplitPane, { Pane } from 'react-split-pane';
import { Form, Container, FormGroup, Label, Input, Button, Fade, ButtonGroup, Jumbotron, Badge } from 'reactstrap';
import Edit from '../components/Edit';
import Add from '../components/Add';

class MainPage extends Component 
{
    render()
    {
        return(
            
            <Form>
                <div id='MainPageDiv'>
                    <Fade in= {true}>
                    <NavigationBar/>
                    <SplitPane
                    split="vertical"
                    minSize={50}
                    defaultSize={parseInt(localStorage.getItem('splitPos'), 10)}
                    onChange={size => localStorage.setItem('splitPos', size)}
                    >
                            <ContactList initialSize="85%"></ContactList>
                            <EditAndAdd></EditAndAdd>
                    </SplitPane> 
                    </Fade>
                </div>
            </Form>
            
        )
    }
}

export default MainPage;