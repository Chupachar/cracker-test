import React, { useState } from "react";
import s from './MainBlockTwo.module.scss';
import DropBar from '../../components/DropBar/DropBar';
import soybean from '../../components/img/Soybean.png';
import sesame from '../../components/img/Sesame.png';
import wheat from '../../components/img/Wheat.png';
import corn from '../../components/img/Corn.png';
import pacage from '../../components/img/Pacage.png';
import arrowTwo from '../../components/img/Arrow-two.png';


const MainBlockTwo = ({DropBarList}) => {


   const [dropActive, setDropActive] = useState(true);
   function click() {
       setDropActive(!dropActive)
   }


    const [newData, setNewData] = useState(
[
            {
                valOne: 0,
                valTwo: 0,
                valThree: 0

            }
        ]
    );
    const [range] = useState(
        [
            {
                min: 0,
                max: 100
            }
        ]
    );

    function changeHandler(e) {
        var val = e.target.value;
        setNewData({
            ...newData,
        value: val,
        });
        console.log(e.target.value + ' %');
    }


    return(
        <>
            <div className={s.main}>
                <h2 className={s.main__title}>CRACKER CONSTRUCTOR</h2>
                <span className={s.main__info}>CURRENT VALUE: 143€</span>
                <div className={s.main__item}>
                <img src={soybean} alt="" className={s.main__img}/>
                <input type="range"
                       className={s.main__inputOne}
                       min={range.min}
                       max={range.max}
                       value={newData.valOne}
                       onChange={changeHandler}/>
                       <div className={s.main__num}>{newData.value + '%'}</div>
                </div>
                <div className={s.main__item}>
                <img src={sesame} alt="" className={s.main__img}/>
                <input type="range"
                       className={s.main__inputTwo}
                       min={range.min}
                       max={range.max}
                       name='two'
                       value={newData.valTwo}
                       onChange={changeHandler}/>
                       <div className={s.main__num}>{newData.value + '%'}</div>
                </div>
                <div className={s.main__item}>
                <img src={wheat} alt="" className={s.main__img}/>
                <input type="range"
                       className={s.main__inputThree}
                       min={range.min}
                       max={range.max}
                       name='three'
                       value={newData.valThree}
                       onChange={changeHandler}/>
                       <div className={s.main__num}>{newData.value + '%'}</div>
                </div>
                <div className={s.main__item}>
                <img src={corn} alt="" className={s.main__img}/>
                <input type="range" className={s.main__inputFour}/>
                    <div className={s.main__num}>{newData.value + '%'}</div>
                </div>
                <div className={s.main__itemBtn}>
                <img src={pacage} alt="" className={s.main__imgBtn}/>
                    <button className={s.main__btn}   onClick={click}>
                        choose your pack
                        <img src={arrowTwo} className={s.main__imgArrow} alt=""/>
                    </button>
                </div>
                <div className={s.main__add}> </div>
                {dropActive ?  null : <DropBar DropBarList={DropBarList}/>}
            </div>
        </>
    )
};

export default MainBlockTwo;