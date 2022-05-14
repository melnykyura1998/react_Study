import React, {useEffect, useState} from 'react';
import {postsService} from "../services";
import Post from "./post";

const Posts = ({userId}) => {
    const [posts,setPosts] = useState([])
    useEffect(()=> {
        postsService.getByUserId(userId).then(({data}) => setPosts(data))
    },[])
    return (
        <div>
            {posts && posts.map(post=><Post key = {post.id} post={post}/>)}
        </div>
    );
};

export default Posts;