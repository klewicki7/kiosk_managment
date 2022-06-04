import { INCREMENT, SUM_INGRESO_DIA } from "../types";

const initialState = {
    nombres : [],
    ingresoXDia :0
};

export default function contadorReducer (state = initialState, action){
    switch (action.type) {
        case INCREMENT:
            state.nombres = [...state.nombres, 'hola']
            return state;
        case SUM_INGRESO_DIA:
            state.ingresoXDia = state.ingresoXDia + action.payload
            console.log(state)
            return state;
        default:
            return state;
    }
}