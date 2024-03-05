import React from 'react';
import s from './ModalWindow.module.css'

const ModalWindow = ({children, visible, setVisible}) => {
    const dependClass = [s.myModal]
    if(visible) {
        dependClass.push([s.active])
    }
    return (
        <div className={dependClass.join(' ')} onClick={()=>setVisible(false)}>
            <div className={s.myModalContent} onClick={(event)=> event.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default ModalWindow;