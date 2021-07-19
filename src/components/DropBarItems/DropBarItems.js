import React from "react";
import s from './DropBarItems.module.scss'

const DropBarItems = ({DropBarList}) => {
    return(
        <>
            {DropBarList.map((item) => <li className={s.dropBarItems} key={item.id}>{item.title}</li>)}
        </>
    )
};

export default DropBarItems;
