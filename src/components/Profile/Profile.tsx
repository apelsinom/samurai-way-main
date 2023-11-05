import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div>
            <div>
                <img
                    src='https://img.freepik.com/premium-vector/forest-panorama-view-pines-spruce-nature-landscape-forest-background-set-of-pine-spruce-and-christmas-tree-on-white-background-silhouette-forest-background-vector-illustration_230281-83.jpg?w=2000'
                    alt='img'/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    );
};
