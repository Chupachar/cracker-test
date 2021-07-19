import React, { useState } from 'react';
import s from './HeaderAdd.module.scss';
import semen from '../../components/img/Semen.png';
import arrow from '../../components/img/Arrow.png';

const HeaderAdd = () => {
    return(
        <>
            <div className={s.headerAdd}>
                <img src={semen} className={s.headerAdd__icon} alt=""/>
                <span className={s.headerAdd__txtOne}>TOTAL:</span>
                <span className={s.headerAdd__txtTwo}> 143€</span>
                <span className={s.headerAdd__txtThree}>Details</span>
                <img src={arrow} className={s.headerAdd__arrow} alt=""/>
            </div>
        </>
    )
};

export default HeaderAdd;