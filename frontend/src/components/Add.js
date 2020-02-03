import React from 'react';

function Add()
{

    const doAdd = async event => 
    {
        event.preventDefault();

        alert('doIt()');
    };

    return(
        <div id="addDiv">
            <form onSubmit={doAdd}>
	        <span id="inner-title">Add A New Contact</span><br />
	        <input type="text" id="firstName" placeholder="First Name" /><br />
	        <input type="text" id="lastName" placeholder="First Name" /><br />
	        <input type="text" id="phone" placeholder="Phone #" /><br />
	        <input type="text" id="notes" placeholder="Notes" /><br />
            <input type="submit" id="addNewContact" class="buttons" value = "Do It" onClick={doAdd} />
            </form>
	        <span id="addResult"></span>
        </div>
    );
};

export default Add;
