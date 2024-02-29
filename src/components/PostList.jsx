import React from 'react';
import Post from "./Post";

const PostList = ({deletePost, posts, title}) => {
    if (!posts.length) {
        return <h1 style={{textAlign: 'center'}}>Posts not found</h1>
    }
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            {posts.map((p, i) => {
                return <Post delete={deletePost} number={i + 1} post={p} key={p.id}/>
            })}
        </div>
    );
};

export default PostList;