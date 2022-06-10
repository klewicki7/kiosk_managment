import { SUMA, New_History, RECALCULAR, NEW_DAY, NEW_MONTH } from '../actions/auth';
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
    ]

}


const auth = (state = initialState, action) => {
    switch (action.type) {
        case SUMA:
            state.suma += action.payload
            return {
                ...state
            }
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
        case NEW_DAY:
            state.rendicionesSemanales.push({
                "date": parseInt(moment().format('X')),
                "data": [
                    {
                        "title": "Rendicion semanales",
                        "ganancias": state.gananciaDiaria,
                         "ingresos" : state.ingresos,
                         "retiros" : state.retiros,
                         "gastos" : state.gastos,
                        "date": parseInt(moment().format('X'))
                    }
                ]
            })

            state.gananciaDiaria = initialState.gananciaDiaria;
            state.retiros = initialState.retiros;
            state.gastos = initialState.gastos;
            state.ingresos = initialState.ingresos;
            state.listaMovimientosPorDia = [];
            return {
                ...state
            }
        case NEW_MONTH:
            let gananciaDelMes = 0;
            let gastosDelMes = 0;
            let ingresosDelMes = 0;
            let retirosDelMes = 0;
            state.rendicionesSemanales.map((item, index) => {
                gananciaDelMes = (parseInt(gananciaDelMes) + parseInt(item.data[0].ganancias));
                gastosDelMes = (parseInt(gastosDelMes) + parseInt(item.data[0].gastos));
                ingresosDelMes = (parseInt(ingresosDelMes) + parseInt(item.data[0].ingresos));
                retirosDelMes = (parseInt(retirosDelMes) + parseInt(item.data[0].retiros));
            })

            state.historialGananciaXMes.push({
                "date": moment().format('X'),
                "data": [
                    {
                        "title": "Rendicion mensuales",
                        "ganancias": gananciaDelMes,
                        "boleta" : 30,
                        "gastos": gastosDelMes,
                        "retiros": retirosDelMes,
                        "ingresos" : ingresosDelMes,
                        "date": moment().format('X')
                    }
                ],
                "history": [...state.rendicionesSemanales]
            });
/*             state.listaMovimientosPorDiaMensuales.map(e => {
                state.rendicionesSemanales.push({
                    "date": parseInt(moment(e.dia).format('X')),
                    "data": [
                        {
                            "title": "Rendicion semanales",
                            "ganancias": e.ganancias,
                             "ingresos" : e.ingresos,
                             "retiros" : e.retiros,
                             "gastos" : e.gastos,
                            "date": parseInt(moment(e.dia).format('X'))
                        }
                    ]
                })
            }) */
            state.mesActual = moment().format('MMMM');
            state.gananciaDiaria = initialState.gananciaDiaria;
            state.retiros = initialState.retiros;
            state.gastos = initialState.gastos;
            state.ingresos = initialState.ingresos;
            state.listaMovimientosPorDia = initialState.listaMovimientosPorDia;
            state.rendicionesSemanales = []
            return {
                ...state
            }
        default:
            return state;
    }
}

export default auth;