import React from "react";
import s from './HeaderNavItems.module.scss';
import {NavLink} from 'react-router-dom';

const HeaderNavItems = ({headerItems}) => {
    return(
        <>
            {headerItems.map((item) =>
                <li key={item.id}><NavLink to={item.url} className={s.item}>{item.title}</NavLink></li>
            )}
        </>
    )
};

export default HeaderNavItems;