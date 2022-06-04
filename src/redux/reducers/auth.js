import { SUMA, New_History, RECALCULAR } from '../actions/auth';


const initialState = {
    suma: 0,
    listaMovimientosPorDia: [
      
    ],
    ingresos: 0,
    retiros: 0,
    gastos: 0,
    gananciaDiaria: 0
}


const auth = (state = initialState, action) => {
    switch (action.type) {
        case SUMA:
            state.suma += action.payload
            return {
                ...state
            }
            break;
        case New_History:
            state.listaMovimientosPorDia.push(action.payload[0])
            state.listaMovimientosPorDia = state.listaMovimientosPorDia.sort((a, b) => { return a.hora - b.hora })
            if (action.payload[0].tipoMovimiento == 'ingreso') {
                state.ingresos = parseInt(state.ingresos) + parseInt(action.payload[0].monto);
            } else if (action.payload[0].tipoMovimiento == 'retiro') {
                state.retiros = parseInt(state.retiros) + parseInt(action.payload[0].monto);
            } else {
                state.gastos = parseInt(state.gastos) + parseInt(action.payload[0].monto);
            }
            return {
                ...state
            }
        case RECALCULAR:
            state.gananciaDiaria = ((parseInt(state.ingresos) * 40) / 100) - parseInt(state.gastos);
            return {
                ...state
            }
        default:
            return state;
    }
}

export default auth;