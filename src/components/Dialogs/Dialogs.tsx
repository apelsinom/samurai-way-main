import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem name={'Sergey'} id={'1'}/>
                <DialogItem name={'Sonia'} id={'2'}/>
                <DialogItem name={'Nadia'} id={'3'}/>
                <DialogItem name={'Egor'} id={'4'}/>
                <DialogItem name={'Toma'} id={'5'}/>
            </div>
            <div className={s.messages}>
                <Message message={'Hi!'}/>
                <Message message={'Ho?'}/>
                <Message message={'He..'}/>
            </div>
        </div>
    );
};
