/* 
THIS ISN'T USED ANYMORE BUT IM KEEPING IT FOR GIGGLES
*/
import React from 'react';
import Edit from '../components/Edit';
import Add from '../components/Add';
import NavigationBar from '../components/NavigationBar';
import SplitPane, { Pane } from 'react-split-pane';

function EditAndAdd()
{
    return(
        <div id='editAndAddDiv'>
            <SplitPane
                split="horizontal"
                minSize={50}
                defaultSize={parseInt(localStorage.getItem('splitPos'), 10)}
                onChange={size => localStorage.setItem('splitPos', size)}
                >
                <Edit></Edit>
                <Add></Add>
            </SplitPane> 
        </div>
    )
}

export default EditAndAdd;