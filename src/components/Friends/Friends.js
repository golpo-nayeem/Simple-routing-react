import React, { useEffect, useState } from 'react';
import Friend from '../friend/Friend';
import './Friends.css';
const Friends = () => {
    const [friends,setFriends]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(x=>setFriends(x))
    },[])
    return (
        <div>
            <h2>I have {friends.length} friends</h2>
             <div className='gridd'>
             {friends.map(friend=><Friend
            key={friend.id}
            friend={friend}
            ></Friend>)}
             </div>
        </div>
    );
};

export default Friends;