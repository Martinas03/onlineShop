import React, {useMemo, useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/postForm/PostForm";
import PostFilter from "./components/PostFilter";
import ModalWindow from "./components/modalWindow/ModalWindow";
import MyButton from "./components/UI/button/MyButton";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'wJava', body: '1Description'},
        {id: 2, title: 'eJavascript', body: '2Description'},
        {id: 3, title: 'fPython', body: '3Description'},
        {id: 4, title: 'gPascal', body: '4Description'},
    ])

    const [filter, setFilter] = useState({
        sort: '',
        query: ''
    })

    const [modalIsOpen, setModalIsOpen] = useState(false)

    const sortedPosts = useMemo(() => {
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts
    }, [filter.sort, posts])

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter((post) => post.title.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, sortedPosts])

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
