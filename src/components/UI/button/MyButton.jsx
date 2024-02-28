import React from 'react';
import s from './MyButton.module.css'

const MyButton = ({children, ...props}) => {
    return (
        <div {...props} className={s.button}>
            {children}
        </div>
    );
};

export default MyButton;