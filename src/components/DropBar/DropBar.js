import React from "react";
import s from './DropBar.module.scss';
import DropBarItems from "../DropBarItems/DropBarItems";



const DropBar = ({DropBarList}) => {
    return(
        <>
            <ul className={s.main__drop}>
                <DropBarItems DropBarList={DropBarList}/>
            </ul>
        </>
    )
};

export default DropBar;