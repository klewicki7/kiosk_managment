import {connect} from 'react-redux';
import actions from "../redux/actions/auth";
import SummaryScreen from '../screens/SummaryScreen';

const mapStateToProps = (state) => ({
    test : state.auth.suma,
    listaMovimientosPorDia : state.auth.listaMovimientosPorDia,
    ingresos : state.auth.ingresos,
    retiros : state.auth.retiros,
    gastos : state.auth.gastos,
    gananciaDiaria : state.auth.gananciaDiaria
});

const mapDispatchToProps = dispatch => ({
    suma : (payload) => dispatch(actions.exampleRequest(payload)),
    newHistory : (payload) => dispatch(actions.newHistory(payload)),
    recalcular : () => dispatch(actions.recalcular()),
    
});

export default connect(
mapStateToProps,
mapDispatchToProps
)(SummaryScreen);
