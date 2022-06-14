import { SUMA, New_History, RECALCULAR_RESPONSE, NEW_DAY, NEW_MONTH, NEW_DAY_RESPONSE, NEW_MONTH_RESPONSE, New_History_RESPONSE } from '../actions/auth';
import moment from 'moment';
import 'moment/locale/es';
moment.locale('es');

const initialState = {
    suma: 0,
    listaMovimientosPorDia: [

    ],
    ingresos: 0,
    retiros: 0,
    gastos: 0,
    gananciaDiaria: 0,
    listaMovimientosPorDiaMensuales: [
    ],
    historialGananciaXMes: [
    ],
    mesActual: '',
    rendicionesSemanales: [
    ],
    boleta: 0

}


const auth = (state = initialState, action) => {
    switch (action.type) {
        case SUMA:
            state.suma += action.payload
            return {
                ...state
            }
        case New_History_RESPONSE:
            return {
                ...state, listaMovimientosPorDia: action.payload.listaMovimientosPorDia, ingresos: action.payload.ingresosX, retiros: action.payload.retirosX, gastos: action.payload.gastosX, boleta : action.payload.boletaX
            }
        case RECALCULAR_RESPONSE:
            return {
                ...state, gananciaDiaria: action.res
            }
        case NEW_DAY_RESPONSE:
            return {
                ...state, gananciaDiaria: 0, retiros: 0, gastos: 0, ingresos: 0, listaMovimientosPorDia: [], rendicionesSemanales: action.res
            }
        case NEW_MONTH_RESPONSE:
            return {
                ...state, gananciaDiaria: 0,boleta : 0, retiros: 0, gastos: 0, ingresos: 0, listaMovimientosPorDia: [], historialGananciaXMes: action.res, rendicionesSemanales: []
            }
        default:
            return state;
    }
}

export default auth;