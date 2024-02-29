import React from 'react';
import s from './ModalWindow.module.css'

const ModalWindow = () => {
    return (
        <div className={s.myModal}>
            <div className={s.myModalContent}></div>
        </div>
    );
};

export default ModalWindow;