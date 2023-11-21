import React from 'react';
import s from './ProfileInfo.module.css'
export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.fonImg}
                     src='https://img.freepik.com/premium-vector/forest-panorama-view-pines-spruce-nature-landscape-forest-background-set-of-pine-spruce-and-christmas-tree-on-white-background-silhouette-forest-background-vector-illustration_230281-83.jpg?w=2000'
                     alt='img'/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
};