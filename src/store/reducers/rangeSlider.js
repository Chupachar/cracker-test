import {
    ACTION_RANGESLIDER,
} from "../actions/rangeSlider";


const initialState = [
    {
        valOne: 0,
        valTwo: 0,
        valThree: 0
    }
];


export default function rootReducer(state = initialState, {type}) {
    switch (type) {

        case ACTION_RANGESLIDER:
            return {...state, valOne: state.valOne, valTwo: state.valTwo, valThree: state.valThree};
        default:
            return state;
    }
}

