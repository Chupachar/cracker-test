import React from "react";
import s from './HeaderNav.module.scss';
import HeaderNavItems from "../HeaderNavItems/HeaderNavItems";


const HeaderNav = ({headerItems}) => {
    return(
        <>
            <div className={s.headerNav}>
                <ul className={s.headerNav__list}>
                    <HeaderNavItems headerItems={headerItems}/>
                </ul>
            </div>
        </>
    )
};

export default HeaderNav;