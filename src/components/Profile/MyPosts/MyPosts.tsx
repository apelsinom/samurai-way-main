import React from 'react';
import s from './MyPosts.module.css';
import {Post} from "./post/Post";

export const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message='Hi, how are you?' quantity={15}/>
                <Post message='Is my first message' quantity={20}/>
            </div>
        </div>
    );
};