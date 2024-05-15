import React, {useEffect, useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/postForm/PostForm";
import PostFilter from "./components/PostFilter";
import ModalWindow from "./components/modalWindow/ModalWindow";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./hooks/usePosts";
import PostService from "./api/api";
import Loader from "./components/UI/Loader/Loader";
import {useFetching} from "./hooks/useFetching";

function App() {

    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modalIsOpen, setModalIsOpen] = useState(false)
    // const [isLoadedPosts, setIsLoadedPosts] = useState(false)

    const [fetchPosts, isLoadedPosts, postError] = useFetching(async () => {
        const posts = await PostService.getAll()
        setPosts(posts)
    })

    useEffect(()=>{
        fetchPosts()
    }, [filter])

    console.log(postError)

    //  const fetchPosts = async () => {
    //     setIsLoadedPosts(true)
    //          const posts = await PostService.getAll()
    //          setPosts(posts)
    //          setIsLoadedPosts(false)
    // }

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
            <MyButton onClick={fetchPosts}>Get posts</MyButton>
            <MyButton onClick={()=>setModalIsOpen(true)}>Create post</MyButton>
            <ModalWindow visible={modalIsOpen} setVisible={setModalIsOpen}>
                <PostForm create={createPost}/>
            </ModalWindow>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter filter={filter}
                        setFilter={setFilter}/>
            {postError &&
            <h1>Some error {postError}</h1>
            }
            {isLoadedPosts ?
                <div style={{display: 'flex', justifyContent: 'center', marginTop: "10px"}}><Loader/></div>
                : <PostList deletePost={deletePost}
                            posts={sortedAndSearchedPosts}
                            title={'Posts list'}
                />
                }
        </div>
    );
}

export default App;
