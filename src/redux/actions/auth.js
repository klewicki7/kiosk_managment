export const SUMA = 'SUMA';
export const New_History = 'New_History';
export const RECALCULAR = 'RECALCULAR';
export const NEW_DAY = 'NEW_DAY';
export const NEW_MONTH = 'NEW_MONTH';
export const New_History_RESPONSE = 'New_History_RESPONSE';
export const RECALCULAR_RESPONSE = 'RECALCULAR_RESPONSE';
export const NEW_DAY_RESPONSE = 'NEW_DAY_RESPONSE';
export const NEW_MONTH_RESPONSE = 'NEW_MONTH_RESPONSE';


export default {
    exampleRequest : (payload) => ({type: SUMA, payload}),
    newHistory : (payload) => ({type: New_History, payload}),
    recalcular : () => ({type: RECALCULAR }),
    newDay : () => ({type: NEW_DAY }),
    newMonth : (res) => ({type: NEW_MONTH, res}),
    newHistoryResponse : (payload) => ({type: New_History_RESPONSE, payload}),
    recalcularResponse : (res) => ({type: RECALCULAR_RESPONSE,res }),
    newDayResponse : (res) => ({type: NEW_DAY_RESPONSE,res }),
    newMonthResponse : (res) => ({type: NEW_MONTH_RESPONSE,res}),
}