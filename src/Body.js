import React, {useState} from "react";
import './Body.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Main from './components/Main/Main';
// import {useSelector, useDispatch } from "react-redux";
// import { increment } from './store/actions/counter';
// import { decrement } from './store/actions/counter';
// import { set } from './store/actions/counter';

const Body = () => {

    // const { counts } = useSelector( (state) => ({
    //     counts: state.counts,
    //     updatedAt: state.updatedAt,
    //     valOne: state.valOne,
    //     valTwo: state.valTwo,
    //     valThree: state.valThree,
    //
    // }));
    //
    // const dispatch = useDispatch();

    // function handleChange(e) {
    //     console.log(e.target.value);
    //     dispatch(set(+e.target.value))
    // }
    // function handleInc() {
    //     dispatch(increment())
    // }
    // function handleDec() {
    //     dispatch(decrement())
    // }

    return(
        <div className="body">
            {/*<div>{counts}</div>*/}
            {/*<button onClick={handleInc}>Inc</button>*/}
            {/*<button onClick={handleDec}>Dec</button>*/}
            {/*<input type="number" value={counts} onChange={handleChange}/>*/}
            <Header />
            <Hero />
            <Main />
            <Footer />
        </div>
    )
};

export default Body;