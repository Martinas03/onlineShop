import React, {useState} from 'react';
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: new Date()
        }
        create(newPost)
        setPost({title: '', body: ''})
    }


    return (
        <div>
            <form>
                <MyInput
                    value={post.title}
                    onChange={(e) => setPost({...post, title: e.currentTarget.value})}
                    type="text"
                    placeholder={'post title'}/>
                <MyInput
                    value={post.body}
                    onChange={(e) => setPost({...post, body: e.currentTarget.value})}
                    type="text"
                    placeholder={'post description'}/>
                <MyButton onClick={addNewPost}>Add post</MyButton>
            </form>
        </div>
    );
};

export default PostForm;