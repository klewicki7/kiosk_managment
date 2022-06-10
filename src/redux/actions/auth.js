export const SUMA = 'SUMA';
export const New_History = 'New_History';
export const RECALCULAR = 'RECALCULAR';
export const NEW_DAY = 'NEW_DAY';
export const NEW_MONTH = 'NEW_MONTH';


export default {
    exampleRequest : (payload) => ({type: SUMA, payload}),
    newHistory : (payload) => ({type: New_History, payload}),
    recalcular : () => ({type: RECALCULAR }),
    newDay : () => ({type: NEW_DAY }),
    newMonth : () => ({type: NEW_MONTH }),
}