import React from "react";
import s from './Hero.module.scss';


const Hero = () => {
    return(
        <div className={s.hero}>
            <div className={s.container}>
                <h1 className={s.hero__title}>MOSTLY TASTES WITH FRESHES</h1>
                <p className={s.hero__info}>
                    Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                    Lorem ipsum dolor sit amet
                </p>
                <button className={s.hero__btn}>TASTE IT</button>
            </div>
        </div>
    )
};

export default Hero;