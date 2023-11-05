import React from 'react';
import s from './Header.module.css'

export const Header = () => {
    return (
        <header className={s.header}>
            <img src='https://seeklogo.com/images/B/business-company-logo-32B09603F1-seeklogo.com.png'
                 alt={'img'}/>
        </header>
    );
};