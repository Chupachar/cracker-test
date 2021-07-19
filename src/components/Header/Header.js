import React from 'react';
import s from './Header.module.scss';
import HeaderNav from '../../components/HeaderNav/HeaderNav';
import logo from '../../components/img/Cracker-logo.png';
import HeaderAdd from "../HeaderAdd/HeaderAdd";


const headerItems = [
    {
        title: 'HOME',
        url: 'home',
        id: Date.now()
    },
    {
        title: 'ABOUT US',
        url: 'aboutUs',
        id: Date.now()
    },
    {
        title: 'CONTACTS',
        url: 'contacts',
        id: Date.now()
    },
    {
        title: 'CHECKOUT',
        url: 'checkout',
        id: Date.now()
    },
    {
        title: 'ACCOUNT',
        url: 'account',
        id: Date.now()
    }
];

const Header = () => {
    return(
        <>
            <div className={s.header}>
                <div className={s.container}>
                    <HeaderAdd />
                    <img src={logo} alt=""/>
                    <HeaderNav headerItems={headerItems} />
                </div>
            </div>
        </>
    )
};

export default Header;