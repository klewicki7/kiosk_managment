export const SUMA = 'SUMA';
export const New_History = 'New_History';
export const RECALCULAR = 'RECALCULAR';


export default {
    exampleRequest : (payload) => ({type: SUMA, payload}),
    newHistory : (payload) => ({type: New_History, payload}),
    recalcular : () => ({type: RECALCULAR, }),
}