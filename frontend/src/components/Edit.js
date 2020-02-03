import React from 'react';

function Edit()
{

    const doEdit = async event => 
    {
        event.preventDefault();

        alert('doIt()');
    };

    return(
        <div id="addDiv">
            <form onSubmit={doEdit}>
	        <span id="inner-title">Edit A New Contact</span><br />
	        <input type="text" id="firstName" placeholder="First Name" /><br />
	        <input type="text" id="lastName" placeholder="First Name" /><br />
	        <input type="text" id="phone" placeholder="Phone #" /><br />
	        <input type="text" id="notes" placeholder="Notes" /><br />
            <input type="submit" id="addNewContact" class="buttons" value = "Do It" onClick={doEdit} />
            </form>
	        <span id="editResult"></span>
        </div>
    );
};

export default Edit;
