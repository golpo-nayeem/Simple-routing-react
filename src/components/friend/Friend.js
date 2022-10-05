import React from 'react';
import { Link } from 'react-router-dom';

const friend = (props) => {
    const{id,name,email,phone}=props.friend;
    const style={
        border:'2px solid red',
        borderRadius:'10px',
        padding:'10px',
        margin:'5px'
    }
    return (
        <div style={style}>
            <h2>I am: {name}</h2>
            <h3>email: {email}</h3>
            <p>Contact: {phone}</p>
            <Link to={`/friend/${id}`}>visit me</Link>
        </div>
    );
};

export default friend;