import React, {useEffect, useState} from 'react';
import {usersService} from "../services";
import User from "./user";

const Users = ({setUserDetail,setShowPosts}) => {
    const [users,setUsers] = useState([])

    useEffect(()=>{
        usersService.getAl().then(({data})=>setUsers(data))
        },[]
    )
    return (
        <div>
            {users.map(user=><User key={user.id} user={user} setUserDetail={setUserDetail} setShowPosts={setShowPosts}  />)}

        </div>
    );
};

export default Users;