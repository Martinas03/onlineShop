import React from 'react';
import MySelector from "./UI/select/MySelector";
import MyInput from "./UI/input/MyInput";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput type="text"
                   value={filter.query}
                   placeholder={'search'}
                   onChange={event => setFilter({...filter, query: event.currentTarget.value})}
            />
            <MySelector value={filter.sort}
                        onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                        defaultOption={'sort by'}
                        options={[
                            {value: 'title', name: 'by title'},
                            {value: 'body', name: 'by name'}
                        ]}/>
        </div>

    );
};

export default PostFilter;