import React from 'react';

const User = ({user,setUserDetail,setShowPosts}) => {
    let trecker = ()=>{
        setUserDetail(user)
        setShowPosts(false)
    }

    return (
        <div>
            <div>{user.id}--{user.name}</div>
            <button onClick={trecker} >getDetails</button>
        </div>

    );
};

export default User;