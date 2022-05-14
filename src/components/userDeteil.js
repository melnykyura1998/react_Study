import React from 'react';

const UserDeteil = ({user,setShowPosts}) => {
    return (
        <div>
            <div>id:{user.id}</div>
            <div>name:{user.name}</div>
            <div>username:{user.username}</div>
            <div>email:{user.email}</div>
            <div>phone:{user.phone}</div>
            <button onClick={()=>setShowPosts(true)} >get posts</button>
        </div>
    );
};

export default UserDeteil;