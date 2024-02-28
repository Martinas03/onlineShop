import React from 'react';
import s from './Input.module.css'

const MyInput = React.forwardRef((props, ref) => {
    return (
        <div>
            <input ref={ref} className={s.input} {...props}/>
        </div>
    );
});

export default MyInput;