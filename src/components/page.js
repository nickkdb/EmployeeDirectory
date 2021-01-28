import React from 'react';

function Pages(props) {
    return (
        <tr>
            <td>
                <img alt={props.users.login.username} src={props.users.picture.thumbnail} />
            </td>
            <td>{`${props.users.name.first} ${props.users.name.last}`}</td>
            <td>{props.users.phone}</td>
            <td>{props.users.email}</td>
            <td>{props.users.dob.date.split("T", 1)}</td>            
        </tr>
    )
}

export default Pages;