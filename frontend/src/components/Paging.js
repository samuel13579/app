import paginationFactory from 'react-bootstrap-table2-paginator';
import cellEditFactory, { Type } from 'react-bootstrap-table2-editor';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

export const tablePaging = paginationFactory({
    sizePerPage: 10,
    showTotal: true
});

export const selectRow = {
    mode: 'radio',
    clickToSelect: true,
    clickToEdit: true,
    onSelect: (row, isSelect, rowIndex, e) => {
    return true;
     },
    style: { backgroundColor: '#c8e6c9' }
};
// This is the event that fires when a cell is edited. More specifically (beforeSaveCell)
export const cellEdit = cellEditFactory({
    mode: 'dbclick',
    beforeSaveCell(oldValue, newValue, row, column, done) {
        console.log(row)
    }
    });

export const rowEvents = {
    onContextMenu: (event, row, rowIndex) => {
        confirmAlert({
          title: 'Confirm to submit',
          message: 'Are you sure you want to delete '+ row.first,
          buttons: [
            {
              label: 'Yes',
              // this can be made async (onClick: async () => {})
              onClick: () => {
                  // This is accessing the [first] key of the row.
                  console.log(row.first)
                  // This is accessing the id
                  console.log(row._id)
              }
            },
            {
              label: 'No',
              onClick: () => 
              {
                  console.log("do nothing")
              }
            }
          ]
        })
      }
}




export const nullChecker = cell => ((cell == "") ? "-" : cell);