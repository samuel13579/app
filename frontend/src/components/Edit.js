/* 
THIS ISN'T USED ANYMORE BUT IM KEEPING IT FOR GIGGLES
*/
import React from 'react';
import { Form, Container, FormGroup, Label, Alert, Input, Button, Fade, ButtonGroup, Jumbotron, Badge, UncontrolledAlert } from 'reactstrap';

class Edit extends React.Component
{
    constructor(props){
        super(props);
        this.state ={
            firstname: '',
            lastname: '',
            phone: '',
            notes: ''
        }
        this.onFirstChange = this.onFirstChange.bind(this);
        this.onLastChange = this.onLastChange.bind(this);
        this.onNumberChange = this.onNumberChange.bind(this);
        this.onNotesChange = this.onNotesChange.bind(this);
        this.onEdit = this.onEdit.bind(this);
    }

    onFirstChange(e){
        this.setState({firstname: e.target.value});
    }

    onLastChange(e){
        this.setState({lastname: e.target.value});
    }

    onNumberChange(e){
        this.setState({phone: e.target.value});
    }

    onNotesChange(e){
        this.setState({notes: e.target.value});
    }

    onEdit(e){
        console.log("Clicked");
    }

    render(){
        return(
            <div id="addDiv">
                <form>
                <Label>Edit Contact</Label>
                <Input type="text" id="firstname" placeholder="First Name" onChange={this.onFirstChange}></Input>
                <Input type="text" id="lastname" placeholder="Last Name" onChange={this.onLastChange}></Input>
                <Input type="text" id="phone" placeholder="Phone #" onChange={this.onNumberChange}></Input>
                <Input type="text" id="notes" placeholder="Notes" onChange={this.onNotesChange}></Input><br/>
                <Button outline color = 'info' onClick={this.onEdit}>Submit</Button>
                </form>
                <span id="editResult"></span>
            </div>
        );
    }
};

export default Edit;