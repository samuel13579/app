import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import axios from 'axios';
import cellEditFactory from 'react-bootstrap-table2-editor';

var products =
    [
        {"_id":{"$oid":"5e36449494e39914677fa88a"},"first":"Timmy part 5","phone":"3434343434343","__v":{"$numberInt":"0"},"user":"igor"},
        {"_id":{"$oid":"5e36497fc2a12d17ccf067fa"},"first":"IVAN","last":"QT","phone":"123-696-4207","__v":{"$numberInt":"0"},"user":"diego"},
        {"_id":{"$oid":"5e36449494e39914677fa88b"},"first":"Timmy","last":"Jones","phone":"420-777-6969","__v":{"$numberInt":"0"},"user":"diego"},
        {"_id":{"$oid":"5e3737f68ec706735b7cc46c"},"first":"OkayPLease","phone":"TestPhone","__v":{"$numberInt":"0"},"last":"asdf"}
    ]
var columns = 
        [
            {
                text: 'ID',
                dataField: '_id',
                hidden: true
            },
            {
                text: 'First Name',
                dataField: 'first'
            },
            {
                text: 'Last Name',
                dataField: 'last'
            },
            {
                text: 'Phone #',
                dataField: 'phone'
            },
            {
                text: 'Contact',
                dataField: 'contact',
                hidden: true

            },
            {
                text: 'Notes',
                dataField: 'notes'
            }
        ]

        const selectRow = {
            mode: 'radio',
            clickToSelect: true
          };

// function getContacts(){

//     axios.get("http://localhost:5000/me/contacts", )
// }

class ContactList extends Component
{
    render()
    {
        // const tableData = getContacts();

        return(
            <BootstrapTable selectRow={selectRow} keyField='_id' data={products} columns={columns} cellEdit = {cellEditFactory({ mode: 'click' })}/>
        )
    }
}
export default ContactList;