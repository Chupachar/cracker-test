import React from "react";
import s from './Main.module.scss'
import MainBlockOne from "../MainBlockOne/MainBlockOne";
import MainBlockTwo from "../MainBlockTwo/MainBlockTwo";

const DropBarList = [
    {
        title: 'choose your pack',
        id: Date.now
    },
    {
        title: 'small pack',
        id: Date.now
    },
    {
        title: 'medium pack',
        id: Date.now
    },
    {
        title: 'large pack',
        id: Date.now
    },
];

const Main = () => {
    return(
        <div className={s.main}>
            <div className={s.container}>
                <MainBlockOne />
                <MainBlockTwo DropBarList={DropBarList}/>
            </div>
        </div>
    )
};

export default Main;