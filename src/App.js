import React, {useMemo, useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/postForm/PostForm";
import PostFilter from "./components/PostFilter";
import ModalWindow from "./components/modalWindow/ModalWindow";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./hooks/usePosts";

function App() {

    const [posts, setPosts] = useState([])

    const [filter, setFilter] = useState({
        sort: '',
        query: ''
    })

    const [modalIsOpen, setModalIsOpen] = useState(false)

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModalIsOpen(false)
    }

    const deletePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
        console.log('post deleted')
    }

    return (
        <div className="App">
            <MyButton onClick={()=>setModalIsOpen(true)}>Create post</MyButton>
            <ModalWindow visible={modalIsOpen} setVisible={setModalIsOpen}>
                <PostForm create={createPost}/>
            </ModalWindow>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter filter={filter}
                        setFilter={setFilter}/>
            <PostList deletePost={deletePost}
                      posts={sortedAndSearchedPosts}
                      title={'Posts list'}
            />
        </div>
    );
}

export default App;
