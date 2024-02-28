import React from 'react';
import MyButton from "./UI/button/MyButton";

const Post = (props) => {
    return (
        <div>
            <div className="post">
                <div className="post__content">
                    <strong>{props.number}. {props.post.title}</strong>
                    <div>
                        {props.post.body}
                    </div>
                </div>
                <div className="post__btn">
                    <MyButton
                        onClick={()=>props.delete(props.post)}
                    >delete</MyButton>
                </div>
            </div>
        </div>
    );
};

export default Post;