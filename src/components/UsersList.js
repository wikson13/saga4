import React from 'react';

const UsersList = (props) => {
    return (
        <ul>
            {props.users.map(user => {
                return <li key={user.id}>{user.firstName} {user.lastName} <span style={{fontWeight:900,marginLeft:'5px'}} onClick={()=>props.deleteUser(user.id)}>X</span></li>
            })}
        </ul>
    );
};

export default UsersList;
