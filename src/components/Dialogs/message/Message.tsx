import React from 'react';
import s from "../Dialogs.module.css";
import {userMessageType} from "../Dialogs";

type PropsType = userMessageType & {

}
export const Message = (props:PropsType) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    );
};
