import React, {useMemo, useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/postForm/PostForm";
import MySelector from "./components/UI/select/MySelector";
import PostFilter from "./components/PostFilter";

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

    const  sortedPosts = useMemo(()=> {
        console.log('Post are sorted')
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        } return posts
    }, [filter.sort, posts])

    const sortedAndSearchedPosts = useMemo(()=>{
        return posts.filter((post )=> post.title.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, sortedPosts])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const deletePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
        console.log('post deleted')
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            {/*<input type="text"*/}
            {/*       value={filter.query}*/}
            {/*       placeholder={'search'}*/}
            {/*       onChange={event => setFilter({...filter, query: event.currentTarget.value})}*/}
            {/*/>*/}
            {/*<MySelector value={filter.sort}*/}
            {/*            onChange={event => setFilter({...filter, sort: event.currentTarget.value})}*/}
            {/*            defaultOption={'sort by'}*/}
            {/*            options={[*/}
            {/*                {value: 'title', name: 'by title'},*/}
            {/*                {value: 'body', name: 'by name'}*/}
            {/*            ]}/>*/}
            {sortedAndSearchedPosts.length ?
                <PostList deletePost={deletePost} posts={sortedAndSearchedPosts} title={'Posts list'}/>
                : <h1 style={{textAlign: 'center'}}>Posts not found</h1>}


        </div>
    );
}

export default App;
