import React, { Component } from 'react';import ContactList from '../components/ContactList';
import NavigationBar from '../components/NavigationBar';
import EditAndAdd from '../components/EditAndAdd';
import SplitPane, { Pane } from 'react-split-pane';
import Edit from '../components/Edit';
import Add from '../components/Add';

class MainPage extends Component 
{
    render()
    {
        return(
            <div id='MainPageDiv'>
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
            </div>
        )
    }
}

export default MainPage;