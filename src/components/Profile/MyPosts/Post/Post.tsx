import React from 'react';
import s from './Post.module.css'

type PropsType = {
    message:string
    quantity:number
}
export const Post = (props:PropsType) => {
    return (
        <div className={s.item}>
            <img src='https://i.pinimg.com/474x/54/de/c0/54dec09204a78c8b9ed76459792fd349.jpg'/>
            {props.message}
            <div><span>Like {props.quantity}</span></div>
        </div>

    );
};