import React from 'react';
import s from '../Navbar/Navbar.module.css'
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' activeClassName={s.activ}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/messages' activeClassName={s.activ}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' activeClassName={s.activ}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.activ}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' activeClassName={s.activ}>Settings</NavLink>
            </div>
        </nav>
    );
};
