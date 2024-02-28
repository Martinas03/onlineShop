import React from 'react';
import MySelector from "./UI/select/MySelector";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <input type="text"
                   value={filter.query}
                   placeholder={'search'}
                   onChange={event => setFilter({...filter, query: event.currentTarget.value})}
            />
            <MySelector value={filter.sort}
                        onChange={event => setFilter({...filter, sort: event.currentTarget.value})}
                        defaultOption={'sort by'}
                        options={[
                            {value: 'title', name: 'by title'},
                            {value: 'body', name: 'by name'}
                        ]}/>
        </div>
    );
};

export default PostFilter;