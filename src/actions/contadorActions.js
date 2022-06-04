import { INCREMENT, SUM_INGRESO_DIA} from "../types";

export const  sumar = () => ({type :INCREMENT})
export const  AddIngresoXDia = (payload) => ({type :SUM_INGRESO_DIA, payload})