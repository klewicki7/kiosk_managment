import actions, { NEW_DAY, NEW_MONTH, RECALCULAR, New_History } from '../actions/auth';
import moment from 'moment';

const authMiddleware = ({ dispatch, getState }) => next => action => {
    next(action);
    switch (action.type) {
        case NEW_MONTH:
            let gananciaDelMes = 0;
            let gastosDelMes = 0;
            let ingresosDelMes = 0;
            let retirosDelMes = 0;
            let rendicionesSemanal = getState().auth.rendicionesSemanales;
            let historialGananciaXMes = getState().auth.historialGananciaXMes;
            rendicionesSemanal.map((item, index) => {
                gananciaDelMes = (parseInt(gananciaDelMes) + parseInt(item.data[0].ganancias));
                gastosDelMes = (parseInt(gastosDelMes) + parseInt(item.data[0].gastos));
                ingresosDelMes = (parseInt(ingresosDelMes) + parseInt(item.data[0].ingresos));
                retirosDelMes = (parseInt(retirosDelMes) + parseInt(item.data[0].retiros));
            })

            historialGananciaXMes.push({
                "date": moment().format('X'),
                "data": [
                    {
                        "title": "Rendicion mensuales",
                        "ganancias": gananciaDelMes,
                        "boleta": getState().auth.boleta,
                        "gastos": gastosDelMes,
                        "retiros": retirosDelMes,
                        "ingresos": ingresosDelMes,
                        "date": moment().format('X')
                    }
                ],
                "history": [rendicionesSemanal]
            });
            dispatch(actions.newMonthResponse(historialGananciaXMes))

            break;
        case RECALCULAR:
            let ingresos = getState().auth.ingresos;
            let gastos = getState().auth.gastos;
            dispatch(actions.recalcularResponse(((parseInt(ingresos) * 40) / 100) - parseInt(gastos)))
            break;
        case NEW_DAY:
            let ingresosDia = getState().auth.ingresos;
            let gastosDia = getState().auth.gastos;
            let rendicionesSemanales = getState().auth.rendicionesSemanales;
            let gananciaDiaria = getState().auth.gananciaDiaria;
            let retirosDia = getState().auth.retiros;

            rendicionesSemanales.push({
                "date": parseInt(moment().format('X')),
                "data": [
                    {
                        "title": "Rendicion semanales",
                        "ganancias": gananciaDiaria,
                        "ingresos": ingresosDia,
                        "retiros": retirosDia,
                        "gastos": gastosDia,
                        "date": parseInt(moment().format('X'))
                    }
                ]
            })
            dispatch(actions.newDayResponse(rendicionesSemanales))
            break;
        case New_History:
            let listaMovimientosPorDia = getState().auth.listaMovimientosPorDia;
            if(action.payload[0].tipoMovimiento != 'boleta'){
                listaMovimientosPorDia.push(action.payload[0])
            }
            let ingresosX = getState().auth.ingresos;
            let gastosX = getState().auth.gastos;
            let retirosX = getState().auth.retiros;
            let boletaX = getState().auth.boleta;
            listaMovimientosPorDia = listaMovimientosPorDia.sort((a, b) => { return a.hora - b.hora })
            if (action.payload[0].tipoMovimiento == 'ingreso') {
                ingresosX = parseInt(ingresosX) + parseInt(action.payload[0].monto);
            } else if (action.payload[0].tipoMovimiento == 'gasto') {
                gastosX = parseInt(gastosX) + parseInt(action.payload[0].monto);
            } 
            else if(action.payload[0].tipoMovimiento === 'boleta'){
                boletaX = parseInt(boletaX) + parseInt(action.payload[0].monto);
            }
            else {
                retirosX = parseInt(retirosX) + parseInt(action.payload[0].monto);
            }
            dispatch(actions.newHistoryResponse({listaMovimientosPorDia, ingresosX, gastosX, retirosX, boletaX}))
            dispatch(actions.recalcular())
            break;
    }
}

export default authMiddleware;