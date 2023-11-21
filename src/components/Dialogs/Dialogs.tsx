import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";

type  UsersDialogsType = UserDialogType[]
export type UserDialogType = {
    id:string
    name:string
}
type usersMessagesType = userMessageType[]
export type userMessageType = {
    id:string
    message:string
}
export const Dialogs = () => {
    let usersDialogs:UsersDialogsType = [
        {id:'1', name:'Sergey'},
        {id:'2', name:'Sonia'},
        {id:'3', name:'Nadia'},
        {id:'4', name:'Egor'},
        {id:'5', name:'Toma'}
    ]
    let usersMessages:usersMessagesType = [
        {id:'1', message:'Hi!'},
        {id:'2', message:'Ho?'},
        {id:'3', message:'He..'}
    ]
    let usersDialogsElement = usersDialogs.map(el=> {
            return (
                <DialogItem key={el.id} name={el.name} id={el.id}/>
            )
        })
    let usersMessagesElement = usersMessages.map(el=> {
        return (
            <Message key={el.id} message={el.message} id={el.id}/>
        )
    })
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {usersDialogsElement}
            </div>
            <div className={s.messages}>
                {usersMessagesElement}
            </div>
        </div>
    );
};
