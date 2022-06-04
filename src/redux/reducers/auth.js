import {SUMA,SUM_INGRESO_DIA} from '../actions/auth';


const initialState = {
    suma : 0
}


const auth = (state = initialState, action) => {
    switch (action.type) {
        case SUMA:
            state.suma += action.payload
            return {
                ...state
            }
        default:
            return state;
    }
}

export default auth;