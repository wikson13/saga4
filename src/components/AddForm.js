import React, {useState} from 'react';

const AddForm = (props) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const addButtonHandler = (e) => {
        e.preventDefault();
        props.addUser(firstName, lastName)
        setFirstName('');
        setLastName('');
    };

    return (
        <div>
            <form>
                <fieldset>
                    <legend>Add user</legend>
                <label htmlFor="firstName">First name </label>
                <input type="text" id="firstName" value={firstName} onChange={e=>setFirstName(e.target.value)}/>
                <br/>
                <label htmlFor="lastName">Last name </label>
                <input type="text" id="lastName"  value={lastName} onChange={e=>setLastName(e.target.value)}/>
                <br/>
                <button type="submit" onClick={addButtonHandler}>Add</button>
                </fieldset>
            </form>
        </div>
    );
};

export default AddForm;
