import React from 'react';
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {UserDialogType} from "../Dialogs";

type PropsType = UserDialogType & {

}
export const DialogItem = (props:PropsType) => {
    const path = '/messages/' + props.id
    return (
        <div className={s.dialog + ' ' + s.activ}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
};
