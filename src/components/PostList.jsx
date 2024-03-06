import React from 'react';
import Post from "./Post";
import {TransitionGroup, CSSTransition} from "react-transition-group";

const PostList = ({deletePost, posts, title}) => {
    if (!posts.length) {
        return <h1 style={{textAlign: 'center'}}>Posts not found</h1>
    }
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            <TransitionGroup>
                {posts.map((p, i) => {
                    return (
                        <CSSTransition
                            key={p.id}
                            // nodeRef={nodeRef}
                            timeout={500}
                            classNames="post"
                        >
                            <Post delete={deletePost} number={i + 1} post={p}/>
                        </CSSTransition>
                    )
                })}
            </TransitionGroup>

        </div>
    );
};

export default PostList;